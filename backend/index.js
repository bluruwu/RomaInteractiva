require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const corsOptions = {
    origin: ['*'],
    allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Methods", "Access-Control-Request-Headers"],
    credentials: true,
    enablePreflight: true
}

app.use(cors(corsOptions));
app.options('*', cors(corsOptions))


//Credenciales supabase

const supabaseUrl = 'https://yciwytjuvbslrghfniat.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;

const secretKey = process.env.SECRET_KEY_JWT;

// Middleware for parsing JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const supabase = createClient(supabaseUrl, supabaseKey);

//POST para el inicio de sesion de los usuarios
app.post('/login', async (req, res) => {
	try {
		// Datos obtenidos por el frontend
		const { email, contrasena } = req.body;

		// Login en supabase auth con los datos del usuario
		const { data: loginResult, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: contrasena,
		});

		// Si hay un error durante el login
		if (error) {
			throw new Error(error.message);
		}
		// Realizar la consulta para obtener todos los datos del usuario en la base de datos
		const { data: usuarioData, error: queryError } = await supabase
			.from('usuarios')
			.select('*')
			.eq('email', email)
			.single();

		// Si hay un error durante la consulta
		if (queryError) {
			throw new Error(queryError.message);
		}

		const user = {
			id_usuario: usuarioData.id_usuario,
			email: usuarioData.email,
			nickname: usuarioData.nickname,
		};

		// Generar token JWT con el id_usuario email y nickname del usuario
		const token = jwt.sign(user, secretKey);

		// Enviar el token al frontend con los datos del usuario y un mensaje de confirmacion
		res.json({ usuarioData, token, message: 'Inicio de sesión exitoso' });
	} catch (error) {
		console.error('Error al iniciar sesión:', error);
		res.status(500).json({ error: 'Credenciales de inicio de sesión inválidas' });
	}
});

app.get('/currentuser', verifyToken, (req, res) => {
	const userId = req.user.id_usuario;
	const email = req.user.email;
	const username = req.user.nickname;

	console.log('INFO TOKEN:', userId, email, username);

	res.json({ userId, email, username });
});

// Middleware para verificar la validez de un token de autenticacion JWT
function verifyToken(req, res, next) {
	//Extrae el token del encabezado de autorizacion de la solicitud
	//El token se envía al servidor en el encabezado de autorización utilizando el esquema 'Bearer'
	const token = req.headers.authorization;
	console.log('MITOKEN', token);

	//Si no se proporciono ningun token. Se envia respuesta de error 401 (No autorizado)
	if (!token) {
		return res.status(401).json({ error: 'Token no proporcionado' });
	}

	//Verifica la validad del token con la biblitoeca jsonwebtoken
	//Toma tres argumentos: el token a verificar, la clave secreta y una funcion de devolucion de llamada que maneja el resultado de la verificacion
	jwt.verify(token.split(' ')[1], secretKey, (err, decoded) => {
		if (err) {
			return res.status(403).json({ error: 'Token inválido' });
		}

		// Si el token es valido y se verifica correctamente, el usuario decodificado se asigna a req.user
		req.user = decoded;
		//Invoca siguiente funcion de middleware
		next();
	});
}

//POST para el registro de usuarios
app.post('/register/user', async (req, res) => {
	try {
		//Datos de registro del usuario recibidos
		const { email, nombre_usuario, nickname, avatar_id, contrasena } = req.body;

		// Registro del usuario en supabase auth
		const { user, session, error } = await supabase.auth.signUp({
			email,
			password: contrasena,
		});

		// Si hay un error durante el registro en supabase
		if (error) {
			throw new Error(error.message);
		}

		// Guardar los datos adicionales del usuario en la tabla 'usuarios'
		const { data, error: insertError } = await supabase
			.from('usuarios')
			.insert([{ email, nickname, nombre_usuario, avatar_id, contrasena }]);

		//Si hay un error durante la insercion de los datos del usuario
		if (insertError) {
			throw new Error(insertError.message);
		}

		//Respuesta
		res.json({ user, session });
	} catch (error) {
		console.error('Error al crear el usuario:', error);
		res.status(500).json({ error: error.message });
	}
});

// POST para el registro de calificacion de un quiz de un usuario en la base de datos
//Se requiere el verifyToken para validar la sesion del usuario
app.post('/enviarevaluacion', verifyToken, async (req, res) => {
	try {
		//Obtener datos del usuario del frontend
		const { respuesta0, respuesta1, respuesta2, respuesta3, respuesta4, calificacion, id_quiz } =
			req.body;

		// Obtener el ID de usuario del token decodificado
		const id_usuario = req.user.id_usuario;
		console.log('id_usuario', id_usuario);
		console.log(respuesta0, calificacion, id_quiz);

		//Guardar calificaciones del usuario
		const { data, error } = await supabase.from('calificaciones').insert([
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
		res.json({ message: 'Quiz guardado' });
	} catch (error) {
		res.status(500).json({ error: 'Error al guardar calificacion' });
	}
});

app.get('/calificaciones', verifyToken, async (req, res) => {
	// Seleccionar todos los usuarios de la base de datos con todos sus atributos
	const id_usuario = req.user.id_usuario;

	const { data, error } = await supabase
		.from('calificaciones')
		.select('*')
		.eq('id_usuario', id_usuario);

	//Si hay un error durante la consulta
	if (error) {
		throw new Error(queryError.message);
	}

	console.log(data);

	//Respuesta
	res.json(data);
});

// Obtener informacion de todos los usuarios de la base de datos
app.get('/users', async (req, res) => {
	// Seleccionar todos los usuarios de la base de datos con todos sus atributos
	const { data, error: queryError } = await supabase.from('usuarios').select('*');

	//Si hay un error durante la consulta
	if (queryError) {
		throw new Error(queryError.message);
	}

	console.log(data);

	//Respuesta
	res.json(data);
});

// Actualizar Datos editables en el perfil de un usuario
app.put('/actualizarperfil', verifyToken, async (req, res) => {

	// Obtener el ID de usuario del token decodificado
	const id_usuario = req.user.id_usuario;

	const { nombre_usuario, nickname, contrasena } = req.body


	newData = {}
	if (nombre_usuario) newData["nombre_usuario"] = nombre_usuario
	if (nickname) newData["nickname"] = nickname
	if (contrasena) newData["contrasena"] = contrasena

	const { error: queryError } = await supabase.
		from('usuarios').
		update(newData).
		eq('id_usuario', id_usuario);

	//Si hay un error durante la actualizacion
	if (queryError) {
		throw new Error(queryError.message);
	}

	res.json("Perfil actualizado correctamente")

});


// Iniciar el servidor
app.listen(9000, () => {
	console.log('Servidor Express.js en ejecución');
});