const { createClient } = require("@supabase/supabase-js");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const supabaseUrl = "https://yciwytjuvbslrghfniat.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljaXd5dGp1dmJzbHJnaGZuaWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjUxODMsImV4cCI6MjAwMTkwMTE4M30.LsP_mUbNlT0nr7mZtgOxm9cevizYtTk9cLixo_K4ewM";
const supabase = createClient(supabaseUrl, supabaseKey);
// const supabase = createClient(supabaseUrl, supabaseKey, {
// 	localStorage: window.localStorage, // Utilizar localStorage del navegador para persistir las sesiones
// });

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// allow all the incoming ip
app.use(cors());

// async function agregarFila() {
// 	try {
// 		const { data, error } = await supabase.from("prueba").insert([{ id: 90, nombre: "Hola" }]);

// 		if (error) {
// 			console.error("Error al agregar la fila:", error);
// 		} else {
// 			console.log("Fila agregada exitosamente:", data);
// 		}
// 	} catch (error) {
// 		console.error("Error en la conexión con Supabase:", error);
// 	}
// }

// agregarFila();

app.post("/register/user", async (req, res) => {
	try {
		const { email, nombre_usuario, nickname, avatar_id, contrasena } = req.body;

		const { user, session, error } = await supabase.auth.signUp({
			email,
			password: contrasena,
		});

		if (error) {
			throw new Error(error.message);
		}

		// Guardar los datos adicionales del usuario en la tabla "users"
		const { data, error: insertError } = await supabase
			.from("usuarios")
			.insert([{ email, nickname, nombre_usuario, avatar_id, contrasena }]);

		if (insertError) {
			throw new Error(insertError.message);
		}

		console.log("Usuario creado:", user);

		res.json({ user, session });
	} catch (error) {
		console.error("Error al crear el usuario:", error);
		res.status(500).json({ error: error.message });
	}
});

app.post("/login", async (req, res) => {
	try {
		const { email, contrasena } = req.body;

		const { user, session, error } = await supabase.auth.signInWithPassword({
			email,
			password: contrasena,
		});

		console.log("Email:", email);
		console.log("Contraseña:", contrasena);

		if (error) {
			throw new Error(error.message);
		}

		// Realizar la consulta para obtener los datos de una fila en la tabla "usuarios"
		const { data, error: queryError } = await supabase
			.from("usuarios")
			.select("*")
			.eq("email", email)
			.single();

		if (queryError) {
			throw new Error(queryError.message);
		}

		console.log(data);

		res.json({ user, session, data, message: "Inicio de sesión exitoso" });
	} catch (error) {
		console.error("Error al iniciar sesión:", error);
		res.status(500).json({ error: "Credenciales de inicio de sesión inválidas" });
	}
});

app.post("/enviarevaluacion", async (req, res) => {
	try {
		const { monarquiaOpcion0, monarquiaOpcion1 } = req.body;

		// const { user, session, error } = await supabase.auth.signInWithPassword({
		// 	email,
		// 	password: contrasena,
		// });

		const { data, error } = await supabase
			.from("calificaciones")
			.insert([
				{
					id_quiz: 1,
					id_usuario: "Hola",
					calificacion: 4,
					respuesta0: 1,
					respuesta1: 1,
					respuesta2: 2,
					respuesta3: 2,
					respuesta4: 2,
				},
			]);

		if (error) {
			throw new Error(error.message);
		}

		if (error) {
			console.error("Error al agregar la fila:", error);
		} else {
			console.log("Fila agregada exitosamente:", data);
		}

		res.json({ data, message: "Quiz guardado" });
	} catch (error) {
		console.error("Error al iniciar sesión:", error);
		res.status(500).json({ error: "Credenciales de inicio de sesión inválidas" });
	}
});

// Iniciar el servidor
app.listen(9000, () => {
	console.log("Servidor Express.js en ejecución");
});
