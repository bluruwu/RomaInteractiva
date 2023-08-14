/**
 * Controladores para el manejo de los datos del perfil de los usuarios
 */
const { getUserPassword, updateUserPassword } = require("../models/UsuariosModel");
const bcrypt = require("bcryptjs");

// Actualizar Datos editables en el perfil de un usuario
/**
 * Envia un json stado acorde y con un string.
 * {status: 280, Perfil actualizado correctamente}
 * {status: 480, "Las contraseña actual no es valida"}
 */
async function updateUserProfile(req, res) {
	// Obtener el ID de usuario del token decodificado
	const id_usuario = req.user.id_usuario;

	const {
		nombre_usuario,
		nickname,
		contrasena,
		nueva_contrasena,
		avatar_id,
		logro_monarquia,
		logro_republica,
		logro_imperio,
		logro_personajes,
		logro_arquitectura,
		logro_cultura,
		nivel,
		experiencia,
	} = req.body;

	newData = {};
	if (nombre_usuario && nombre_usuario != "") newData["nombre_usuario"] = nombre_usuario;
	if (nickname) newData["nickname"] = nickname;
	if (contrasena) newData["contrasena"] = contrasena;
	if (avatar_id) newData["avatar_id"] = avatar_id;
	if (logro_monarquia) newData["logro_monarquia"] = logro_monarquia;
	if (logro_republica) newData["logro_republica"] = logro_republica;
	if (logro_imperio) newData["logro_imperio"] = logro_imperio;
	if (logro_personajes) newData["logro_personajes"] = logro_personajes;
	if (logro_arquitectura) newData["logro_arquitectura"] = logro_arquitectura;
	if (logro_cultura) newData["logro_cultura"] = logro_cultura;
	if (nivel) newData["nivel"] = nivel;
	if (experiencia) newData["experiencia"] = experiencia;

	const data = await getUserPassword(id_usuario);
	//se obtiene la contraseña del usuario en la bd
	const contrasena_db = data[0]["contrasena"];

	/**
	 * Si se resive una contrasena, se debe chequear contra la bd.
	 * Si equivalen a lo mismo, se cambia en el diccionario con el
	 * nuevo body, la nueva contrasena
	 */
	console.log(contrasena_db);
	if (contrasena) {
		const verificacionHash = await bcrypt.compare(contrasena, contrasena_db);
		console.log(verificacionHash);

		if (verificacionHash) {
			if (nueva_contrasena) {
				newData["contrasena"] = await bcrypt.hash(nueva_contrasena, 10); // 10 es el número de rondas de hashing
			}
		} else {
			res.status(480).json("Las contraseña actual no es valida");
			return;
		}
	}

	const updatePassword = await updateUserPassword(newData, id_usuario);

	res.status(280).json("Perfil actualizado correctamente");
	return;
}

module.exports = {
	updateUserProfile,
};
