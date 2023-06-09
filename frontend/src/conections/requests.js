export const postData = async (mydata) => {
	try {
		const response = await fetch("http://127.0.0.1:9000/register/user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(mydata),
		});

		if (response.ok) {
			console.log("Data submitted successfully");
			return "Data submitted successfully";
			// Perform additional actions after successful submission
		} else {
			const error = await response.json();
			console.error(error);
			return "Email or Username already taken";
			// Handle error response
		}
	} catch (error) {
		console.error("Error:", error);
		return "Conection failed";
		// Handle network error
	}
};

export const postLogin = async (mydata) => {
	try {
		const response = await fetch("http://127.0.0.1:9000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(mydata),
		});

		if (response.ok) {
			const jsonData = await response.json();
			const { user, session, data, message } = jsonData;

			// Accede a los datos de la fila en "data"
			console.log(data);
			console.log(message);

			// Realiza las acciones adicionales después de una autenticación exitosa
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
