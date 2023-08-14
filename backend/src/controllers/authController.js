/**
 * Controladores de autenticacion, manejo de las cuentas de usuario
 */

const {
	getUserByEmail,
	getUsers,
	insertUser,
	updatePasswordUser,
	searchUser,
	insertGoogleUser,
} = require("../models/UsuariosModel");
const { verifyTokenGoogle } = require("../middlewares/authMiddleware");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secretKey = process.env.SECRET_KEY_JWT;
const nodemailer = require("nodemailer");

// Configura el transporte de nodemailer con tus credenciales de Gmail
const transporter = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: "romainteractiva@gmail.com",
		pass: "moqkwrtblblthnaw",
	},
});

//POST para el inicio de sesion de los usuarios
async function loginUser(req, res) {
	try {
		// Datos obtenidos por el frontend
		const { email, contrasena } = req.body;

		// Realizar la consulta para obtener todos los datos del usuario en la base de datos
		const usuarioData = await getUserByEmail(email);

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

		console.log("user", user, "usuarioData", usuarioData);
		// Generar token JWT con el id_usuario email y nickname del usuario
		const token = jwt.sign(user, secretKey);

		// Enviar el token al frontend con los datos del usuario y un mensaje de confirmacion
		res.json({ usuarioData, token, message: "Inicio de sesión exitoso" });
	} catch (error) {
		console.error("Error al iniciar sesión:", error);
		res.status(500).json({ error: "Credenciales de inicio de sesión inválidas" });
	}
}

//POST LOGIN WITH GOOGLE
async function loginGoogleUser(req, res) {
	try {
		const { credentialResponse } = req.body;

		const clientId = credentialResponse.clientId;
		const credential = credentialResponse.credential;

		// Verificar el token con la función verifyTokenGoogle
		const payload = await verifyTokenGoogle(clientId, credential);

		//Obtener datos del usuario
		const { email, name, picture, given_name } = payload;

		//Email a verificar si ya existe en la base de datos
		const emailToCheck = email;

		try {
			//Consulta para verificar si el email existe en la base de datos
			const verifyExistenceUser = await searchUser(emailToCheck);

			//Si el correo electrónico NO está registrado en la tabla
			if (verifyExistenceUser.length == 0) {
				const registerUser = await insertGoogleUser(email, given_name, name);
				console.log(registerUser);
			}
		} catch (error) {
			console.error("Error en la consulta:", error);
		}

		const usuarioData = await getUserByEmail(email);

		//Datos para poner en el token
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
}

// Ruta para enviar el correo electrónico
async function recoveryPasswordUser(req, res) {
	const { to, subject, body } = req.body;

	newData = {};

	newData["contrasena"] = Math.random().toString(36).slice(-8);

	const mailOptions = {
		from: "romainteractiva@gmail.com",
		to,
		subject,
		html: body + newData["contrasena"],
	};

	newData["contrasena"] = await bcrypt.hash(newData["contrasena"], 10);

	const newPassword = await updatePasswordUser(to);

	// Envía el correo electrónico utilizando nodemailer
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error("Error al enviar el correo electrónico:", error);
			res.status(500).json("Ocurrió un error al enviar el correo electrónico");
		} else {
			console.log("Correo electrónico enviado:", info.response);
			res.status(200).json({ message: "Correo electrónico enviado exitosamente" });
		}
	});
}

//POST para el registro de usuarios
async function registerUser(req, res) {
	try {
		//Datos de registro del usuario recibidos
		const { email, nombre_usuario, nickname, avatar_id, contrasena } = req.body;

		// Generar el hash de la contraseña
		const hashedPassword = await bcrypt.hash(contrasena, 10); // 10 es el número de rondas de hashing

		const data = await insertUser(email, nombre_usuario, nickname, avatar_id, hashedPassword);

		// console.log("data", data);

		//Respuesta
		res.json("OK");
	} catch (error) {
		console.error("Error al crear el usuario:", error);
		res.status(500).json({ error: error.message });
	}
}

async function currentUser(req, res) {
	const userId = req.user.id_usuario;
	const email = req.user.email;
	const username = req.user.nickname;

	console.log("INFO TOKEN:", userId, email, username);

	res.json({ userId, email, username });
}

// // Obtener informacion de todos los usuarios de la base de datos
async function users(req, res) {
	const data = await getUsers();
	//Respuesta
	res.json(data);
}

module.exports = {
	loginUser,
	loginGoogleUser,
	registerUser,
	recoveryPasswordUser,
	currentUser,
	users,
};
