//ARCHIVO PARA HACER LAS SOLICITUDES HTTP
//Usar Authorization: `Bearer ${token}` en el header de los fetch

//Usar API_URL de vercel antes de hacer pull request a main para hacer el despliegue
const API_URL = "https://roma-interactiva-back-edinsonuwu.vercel.app";
//Usar la API_URL del puerto 9000 si se va a trabajar local
// const API_URL = "http://127.0.0.1:9000";

//Solicitud POST para el registro de usuarios
export const postData = async (mydata) => {
	try {
		const response = await fetch(`${API_URL}/register/user`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(mydata),
		});

		//Si se recibe una respuesta exitosa del backend
		if (response.ok) {
			console.log("Data submitted successfully");
			return "Data submitted successfully";
		} else {
			// Handle error response
			const error = await response.json();
			console.error(error);
			return "Email or Username already taken";
		}
	} catch (error) {
		console.error("Error:", error);
		return "Conection failed";
		// Handle network error
	}
};

//GET de prueba para el funcionamiento de los tokens
//Retorna los datos del usuario en consola
//Se le pasa un token
export const getPrueba = async (token) => {
	try {
		const response = await fetch(`${API_URL}/currentuser`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		//Si se recibe una respuesta exitosa del backend
		if (response.ok) {
			const jsonData = await response.json();
			const { userId, email, username } = jsonData;

			// Mostrar en consola los datos del usuario obtenidos por medio del token
			console.log(userId, email, username);

			return "OK";
		} else {
			const error = await response.json();
			console.error(error);
			// Maneja la respuesta de error
			return "No se puedo obtener la informacion del usuario";
		}
	} catch (error) {
		console.error("Error:", error);
		return "Error en solicitud";
	}
};

//POST para realizar el login de los usuarios
export const postLogin = async (mydata) => {
	try {
		const response = await fetch(`${API_URL}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				// Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(mydata),
		});

		//Si se obtiene respuesta exitosa del backend
		if (response.ok) {
			const jsonData = await response.json();
			//Obtener datos del usuario
			const { usuarioData, message } = jsonData;

			// Obtener token de la respuesta del servidor
			const token = jsonData.token;
			//Guardar el token en localStorage
			localStorage.setItem("token", token);
			console.log("token recibido del login", token);

			//Guardar datos del usuario en localStorage
			localStorage.setItem("email", JSON.stringify(usuarioData.email));
			localStorage.setItem("avatar_id", JSON.stringify(usuarioData.avatar_id));
			localStorage.setItem("nickname", JSON.stringify(usuarioData.nickname));
			localStorage.setItem("email", JSON.stringify(usuarioData.email));
			localStorage.setItem("id_usuario", JSON.stringify(usuarioData.id_usuario));
			localStorage.setItem("nombre_usuario", JSON.stringify(usuarioData.nombre_usuario));

			return "Inicio de sesión exitoso";
		} else {
			const error = await response.json();
			console.error(error);
			// Maneja la respuesta de error
			return "Credenciales incorrectas";
		}
	} catch (error) {
		console.error("Error:", error);
		return "Error de conexión";
	}
};

//POST para guardar las respuestas de los quizes tomados
export const postQuiz = async (mydata, token) => {
	try {
		const response = await fetch(`${API_URL}/enviarevaluacion`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(mydata),
		});

		console.log(mydata);
		//Respuesta exitosa del backend
		if (response.ok) {
			console.log("Insercion de calificacion realizada");
			return "Insercion de calificacion realizada";
		} else {
			const error = await response.json();
			console.error(error);
			// Maneja la respuesta de error
			return "Error al insertar calificacion";
		}
	} catch (error) {
		console.error("Error:", error);
		return "Error de conexión";
	}
};

//POST para obtener las calificaciones del usuario de la base de datos
export const getCalificaciones = async (token) => {
	try {
		const response = await fetch(`${API_URL}/calificaciones`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		//Si se recibe una respuesta exitosa del backend
		if (response.ok) {
			const jsonData = await response.json();
			const { data } = jsonData;

			// Mostrar en consola todas las calificaciones del usuario obtenidas
			console.log("data calificaciones:", data);

			return "OK";
		} else {
			const error = await response.json();
			console.error(error);
			// Maneja la respuesta de error
			return "No se puedo obtener la informacion del usuario";
		}
	} catch (error) {
		console.error("Error:", error);
		return "Error en solicitud";
	}
};
