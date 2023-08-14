/**
 * MANEJO DE LAS SOLICITUDES A LA BASE DE DATOS DE LA TABLA DE "calificaciones"
 */

const { supabase } = require("../configs/databaseConfig");

//Guardar calificacio del usuario
const insertCalificacion = async (
	respuesta0,
	respuesta1,
	respuesta2,
	respuesta3,
	respuesta4,
	calificacion,
	id_quiz,
	id_usuario
) => {
	try {
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

		return data;
	} catch (error) {
		throw new Error("DB: Error insertando calificaciones");
	}
};

//Guardar calificacio del usuario
const getCalificacionesUsuario = async (id_usuario) => {
	try {
		//Obtener todas las calificaciones del usuario
		const { data, error } = await supabase
			.from("calificaciones")
			.select("*")
			.eq("id_usuario", id_usuario);

		//Si hay un error durante la consulta
		if (error) {
			throw new Error(queryError.message);
		}

		return data;
	} catch (error) {
		throw new Error("DB: Error obteniendo calificaciones");
	}
};

module.exports = {
	insertCalificacion,
	getCalificacionesUsuario,
};
