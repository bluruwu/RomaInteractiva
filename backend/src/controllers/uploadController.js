/**
 * Controladores para manejar la subida de las imagenes a Google
 */

const { Readable } = require("stream");

// Credenciales Google Drive
const googleCredentials = require("../configs/credenciales.json");

const { google } = require("googleapis");
// const fs = require("fs");

// Configuración de autenticación de Google Drive
const auth = new google.auth.GoogleAuth({
	credentials: googleCredentials,
	scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

const folderId = "1AguL3BshwwbjoW5BLst8Ynanu4n4u91r";

async function uploadImage(req, res) {
	try {
		const file = req.file;
		const fileName = file.originalname;
		console.log(file);
		// Crear el objeto de metadatos del archivo
		const lastId = await getLastId();
		const fileMetadata = {
			name: `avatar${lastId + 1}.jpg`,
			parents: [folderId], // Reemplaza con el ID de la carpeta en Google Drive
		};
		const media = {
			mimeType: file.mimetype,
			body: Readable.from(file.buffer),
		};

		// Subir el archivo a Google Drive
		const response = await drive.files.create({
			resource: fileMetadata,
			media: media,
			fields: "id",
		});

		console.log("File ID:", response.data.id);

		res.json(lastId + 1);
	} catch (error) {
		//console.error(error);
		res.json(error.message);
	}
}

//funcion que me retorna el avatar con el ultimo id
//esto sirve para añadir imagenes al server de forma ordenada
async function getLastId() {
	let imageNames;
	try {
		// Obtener la lista de archivos en la carpeta de Google Drive
		const response = await drive.files.list({
			q: `'${folderId}' in parents and mimeType contains 'image/'`,
			fields: "files(name)",
		});

		const files = response.data.files;

		// Obtener los nombres de las imágenes
		imageNames = files.map((file) => file.name);
	} catch (error) {
		console.error(error);
	}
	let allFileNames = imageNames;
	let id = 8;
	for (let i in allFileNames) {
		if (id <= parseInt(allFileNames[i].substr(6, allFileNames[i].search(".") + 2)))
			id = parseInt(allFileNames[i].substr(6, allFileNames[i].search(".") + 2));
	}
	return id;
}

async function getImage(req, res) {
	try {
		const fileName = req.params.name;

		// Buscar el archivo por nombre en la carpeta de Google Drive
		const response = await drive.files.list({
			q: `name='${fileName}' and '${folderId}' in parents`,
			fields: "files(id)",
		});

		const files = response.data.files;

		// Verificar si se encontró el archivo
		if (files && files.length > 0) {
			const fileId = files[0].id;

			// Obtener los datos del archivo
			const fileResponse = await drive.files.get(
				{
					fileId: fileId,
					alt: "media",
				},
				{ responseType: "stream" }
			);

			// Establecer los encabezados de la respuesta
			res.set({
				"Content-Type": fileResponse.headers["content-type"],
				"Content-Length": fileResponse.headers["content-length"],
			});

			// Enviar el contenido de la imagen como respuesta
			fileResponse.data.pipe(res);
		} else {
			res.status(404).json({ error: "Imagen no encontrada." });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al buscar la imagen en Google Drive." });
	}
}

module.exports = {
	getLastId,
	uploadImage,
	getImage,
};
