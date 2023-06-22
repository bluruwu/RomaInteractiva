require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require('multer');
const fs = require('fs');

//Credenciales supabase

const supabaseUrl = "https://yciwytjuvbslrghfniat.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;

const secretKey = process.env.SECRET_KEY_JWT;

// Middleware for parsing JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'))

// allow all the incoming ip
  const corsOptions = {
 	origin: "*",
 	credentials: true,//  Enable CORS with credentials (e.g., cookies, authorization headers)
  };

 app.use(cors());


app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
})

const supabase = createClient(supabaseUrl, supabaseKey);

// Configuración de Multer para gestionar la carga de archivos
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
	},
	filename: async function (req, file, cb) {

		cb(null,"avatar"+(parseInt(await getLastId("/uploads"))+1).toString() + ".jpg"); // Nombre único para la imagen
	}
});
const upload = multer({ storage: storage });

// Endpoint para subir una imagen
app.post('/upload', upload.single('file'), async (req, res) => {
	if (!req.file) {
		res.status(400).json({ error: 'No se ha proporcionado ninguna imagen' });
		return;
	}
	let lastId = await getLastId("/uploads")


 

	try {
		res.json({ message: lastId});
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Error al leer el directorio' });
	}
	return
});
 
//funcion que me retorna el avatar con el ultimo id
//esto sirve para añadir imagenes al server de forma ordenada
async function getLastId(directoryPath) {
	function readDirectoryAsync(directoryPath) {
		return new Promise((resolve, reject) => {
			fs.readdir(directoryPath, (err, files) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(files);
			});
		});
	}
	const allFileNames = await readDirectoryAsync('./uploads');
	console.log(allFileNames);

	let id = 6
	for (let i in allFileNames) {
		if (id <= parseInt(allFileNames[i].substr(6,allFileNames[i].search('.')+2)))
			id = parseInt(allFileNames[i].substr(6,allFileNames[i].search('.')+2))
	}
	return id
}











//POST para el inicio de sesion de los usuarios
app.post("/login", async (req, res) => {
	try {
		// Datos obtenidos por el frontend
		const { email, contrasena } = req.body;

		// Realizar la consulta para obtener todos los datos del usuario en la base de datos
		const { data: usuarioData, error: queryError } = await supabase
			.from("usuarios")
			.select("*")
			.eq("email", email)
			.single();

		// Si hay un error durante la consulta
		if (queryError) {
			throw new Error(queryError.message);
		}

		// Verificar el hash de la contraseña
		const contrasenaHash = usuarioData.contrasena;

		// Comparar el hash almacenado con el hash de la contraseña proporcionada por el usuario
		const match = await bcrypt.compare(contrasena, contrasenaHash);

		// Si las contraseñas no coinciden, se envía una respuesta de error
		if (!match) {
			throw new Error("Credenciales de inicio de sesión inválidas");
		}

		const user = {
			id_usuario: usuarioData.id_usuario,
			email: usuarioData.email,
			nickname: usuarioData.nickname,
		};

		// Generar token JWT con el id_usuario email y nickname del usuario
		const token = jwt.sign(user, secretKey);

		// Enviar el token al frontend con los datos del usuario y un mensaje de confirmacion
		res.json({ usuarioData, token, message: "Inicio de sesión exitoso" });
	} catch (error) {
		console.error("Error al iniciar sesión:", error);
		res.status(500).json({ error: "Credenciales de inicio de sesión inválidas" });
	}
});

app.get("/currentuser", verifyToken, (req, res) => {
	const userId = req.user.id_usuario;
	const email = req.user.email;
	const username = req.user.nickname;

	console.log("INFO TOKEN:", userId, email, username);

	res.json({ userId, email, username });
});

// Middleware para verificar la validez de un token de autenticacion JWT
function verifyToken(req, res, next) {
	//Extrae el token del encabezado de autorizacion de la solicitud
	//El token se envía al servidor en el encabezado de autorización utilizando el esquema 'Bearer'
	const token = req.headers.authorization;
	console.log("MITOKEN", token);

	//Si no se proporciono ningun token. Se envia respuesta de error 401 (No autorizado)
	if (!token) {
		return res.status(401).json({ error: "Token no proporcionado" });
	}

	//Verifica la validad del token con la biblitoeca jsonwebtoken
	//Toma tres argumentos: el token a verificar, la clave secreta y una funcion de devolucion de llamada que maneja el resultado de la verificacion
	jwt.verify(token.split(" ")[1], secretKey, (err, decoded) => {
		if (err) {
			return res.status(403).json({ error: "Token inválido" });
		}

		// Si el token es valido y se verifica correctamente, el usuario decodificado se asigna a req.user
		req.user = decoded;
		//Invoca siguiente funcion de middleware
		next();
	});
}

//POST para el registro de usuarios
app.post("/register/user", async (req, res) => {
	try {
		//Datos de registro del usuario recibidos
		const { email, nombre_usuario, nickname, avatar_id, contrasena } = req.body;

		// Generar el hash de la contraseña
		const hashedPassword = await bcrypt.hash(contrasena, 10); // 10 es el número de rondas de hashing

		// Guardar los datos adicionales del usuario en la tabla 'usuarios'
		const { data, error: insertError } = await supabase
			.from("usuarios")
			.insert([{ email, nickname, nombre_usuario, avatar_id, contrasena: hashedPassword }]);

		//Si hay un error durante la insercion de los datos del usuario
		if (insertError) {
			throw new Error(insertError.message);
		}

		//Respuesta
		res.json("OK");
	} catch (error) {
		console.error("Error al crear el usuario:", error);
		res.status(500).json({ error: error.message });
	}
});

// POST para el registro de calificacion de un quiz de un usuario en la base de datos
//Se requiere el verifyToken para validar la sesion del usuario
app.post("/enviarevaluacion", verifyToken, async (req, res) => {
	try {
		//Obtener datos del usuario del frontend
		const { respuesta0, respuesta1, respuesta2, respuesta3, respuesta4, calificacion, id_quiz } =
			req.body;

		// Obtener el ID de usuario del token decodificado
		const id_usuario = req.user.id_usuario;
		console.log("id_usuario", id_usuario);
		console.log(respuesta0, calificacion, id_quiz);

		//Guardar calificaciones del usuario
		const { data, error } = await supabase.from("calificaciones").insert([
			{
				id_quiz: parseInt(id_quiz),
				id_usuario: parseInt(id_usuario),
				calificacion: parseInt(calificacion),
				respuesta0: parseInt(respuesta0),
				respuesta1: parseInt(respuesta1),
				respuesta2: parseInt(respuesta2),
				respuesta3: parseInt(respuesta3),
				respuesta4: parseInt(respuesta4),
			},
		]);

		//Si hay un error durante la insercion
		if (error) {
			throw new Error(error.message);
		}

		//Respuesta
		res.json({ message: "Quiz guardado" });
	} catch (error) {
		res.status(500).json({ error: "Error al guardar calificacion" });
	}
});

app.get("/calificaciones", verifyToken, async (req, res) => {
	// Seleccionar todos los usuarios de la base de datos con todos sus atributos
	const id_usuario = req.user.id_usuario;

	const { data, error } = await supabase
		.from("calificaciones")
		.select("*")
		.eq("id_usuario", id_usuario);

	//Si hay un error durante la consulta
	if (error) {
		throw new Error(queryError.message);
	}

	//Respuesta
	res.json(data);
});

// Obtener informacion de todos los usuarios de la base de datos
app.get("/users", async (req, res) => {
	// Seleccionar todos los usuarios de la base de datos con todos sus atributos
	const { data, error: queryError } = await supabase.from("usuarios").select("*");

	//Si hay un error durante la consulta
	if (queryError) {
		throw new Error(queryError.message);
	}

	console.log(data);

	//Respuesta
	res.json(data);
});

// Actualizar Datos editables en el perfil de un usuario
/**
 * Envia un json stado acorde y con un string.
 * {status: 280, Perfil actualizado correctamente}
 * {status: 480, "Las contraseña actual no es valida"}
 */
app.put("/actualizarperfil", verifyToken, async (req, res) => {
	// Obtener el ID de usuario del token decodificado
	const id_usuario = req.user.id_usuario;

	const { nombre_usuario, nickname, contrasena, nueva_contrasena, avatar_id } = req.body;

	newData = {};
	if (nombre_usuario && (nombre_usuario != "")) newData["nombre_usuario"] = nombre_usuario;
	if (nickname) newData["nickname"] = nickname;
	if (contrasena) newData["contrasena"] = contrasena;
	if (avatar_id) newData["avatar_id"] = avatar_id;

	//Consulata a la base de datos para obtener el usuario con el id del token
	const { data, error } = await supabase
		.from("usuarios")
		.select("contrasena")
		.eq("id_usuario", id_usuario);

	//se obtiene la contraseña del usuario en la bd
	const contrasena_db = data[0]["contrasena"]

	/**
	 * Si se resive una contrasena, se debe chequear contra la bd.
	 * Si equivalen a lo mismo, se cambia en el diccionario con el 
	 * nuevo body, la nueva contrasena
	 */
	console.log(contrasena_db)
	if (contrasena) {
		const verificacionHash = await bcrypt.compare(contrasena, contrasena_db)
		console.log(verificacionHash)
		if (verificacionHash) {
			if (nueva_contrasena) {
				newData["contrasena"] = await bcrypt.hash(nueva_contrasena, 10); // 10 es el número de rondas de hashing
			}
		} else {
			res.status(480).json("Las contraseña actual no es valida");
			return
		}
	}

	const { error: queryError } = await supabase
		.from("usuarios")
		.update(newData)
		.eq("id_usuario", id_usuario);

	//Si hay un error durante la actualizacion
	if (queryError) {
		throw new Error(queryError.message);
	}

	res.status(280).json("Perfil actualizado correctamente");
	return
});




// Iniciar el servidor
app.listen(9000, () => {
	console.log("Servidor Express.js en ejecución");
});
