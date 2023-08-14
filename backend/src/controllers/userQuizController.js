/**
 * Controladores para el manejo de las calificaciones de los quizzes de los usuarios
 */
const { insertCalificacion, getCalificacionesUsuario } = require("../models/CalificacionesModel");

// POST para el registro de calificacion de un quiz de un usuario en la base de datos
//Se requiere el verifyToken para validar la sesion del usuario
async function sendGrade(req, res) {
	try {
		//Obtener datos del usuario del frontend
		const { respuesta0, respuesta1, respuesta2, respuesta3, respuesta4, calificacion, id_quiz } =
			req.body;

		// Obtener el ID de usuario del token decodificado
		const id_usuario = req.user.id_usuario;

		const sendNewGrade = await insertCalificacion(
			respuesta0,
			respuesta1,
			respuesta2,
			respuesta3,
			respuesta4,
			calificacion,
			id_quiz,
			id_usuario
		);

		//Respuesta
		res.json({ message: "Quiz guardado" });
	} catch (error) {
		res.status(500).json({ error: "Error al guardar calificacion" });
	}
}

//GET para obtener las calificaciones de un usuario
async function getGrades(req, res) {
	// Obtener el id del usuario actual
	const id_usuario = req.user.id_usuario;

	const getUserGrades = await getCalificacionesUsuario(id_usuario);

	//Respuesta
	res.json(getUserGrades);
}

module.exports = {
	sendGrade,
	getGrades,
};
