import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../conections/requests";
import HomeButton from "../utilities/HomeButton";
import Swal from "sweetalert2";

const Register = () => {
	const navigate = useNavigate(); // Hook de navegación
	// Datos que se enviarán al backend
	const [formData, setFormData] = useState({
		email: "",
		nombre_usuario: "",
		nickname: "",
		contrasena: "",
	});

	const [confirmedPassword, setConfirmedPassword] = useState(); // Estado para almacenar la confirmación de contraseña

	const handleSubmit = (event) => {
		event.preventDefault(); // Prevenir comportamiento de envío predeterminado
		const lowercaseEmail = formData.email.toLowerCase(); // Convertir el campo de email a minúsculas
		console.log(lowercaseEmail);

		console.log(formData); // Imprimir los datos del formulario en la consola

		if (formData["contrasena"].length < 6) {
			// Validar longitud mínima de contraseña
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Password is too short",
			});
			return;
		}

		if (formData["contrasena"] != confirmedPassword) {
			// Validar que las contraseñas coincidan
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Passwords are not the same",
			});
			return;
		}

		if (formData["nombre_usuario"].length < 8) {
			// Validar longitud mínima de nombre de usuario
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Username is too short",
			});
			return;
		}

		if (formData["nickname"].length < 5) {
			// Validar longitud mínima de nickname
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Nickname is too short",
			});
			return;
		}

		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData["email"]) == false) {
			// Validar formato de correo electrónico
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Email is not valid",
			});
			return;
		}

		const myresponse = async () => {
			const req_succesful = await postData({
				...formData,
				email: lowercaseEmail,
			});
			// Realizar solicitud de registro utilizando los datos del formulario
			if (req_succesful === "Data submitted successfully") {
				// Si el registro es exitoso, mostrar una alerta de éxito y navegar a la página de inicio de sesión ("/login")
				Swal.fire("Congrats!", "You have succesfully been register!", "success");
				//alert("Register succesful");
				navigate("/login");
			} else {
				// Si ocurre un error durante el registro, mostrar una alerta de error con el mensaje de error correspondiente
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Really sorry, some services aren't avaliable right now.",
				});
			}
		};
		myresponse(); // Ejecutar la función asíncrona myresponse
	};
	// Render de la pagina con sus componentes. Una imagen de fondo, un logo, y los campos necesarios para registrarse. Además del botón de submit y el botón que lleva a Login y Home
	return (
		<form onSubmit={handleSubmit}>
			<div className="flex h-screen">
				{/* Imagen de fondo */}
				<div className=" flex justify-center items-centers">
					<img
						src={require("../media/coliseo.jpg")}
						alt="Imagen de fondo"
						className="block w-full h-full object-cover"
					/>
				</div>

				{/* Panel derecho */}
				<div className="font-text flex-1 flex flex-col justify-center items-center bg-gray-100 p-16">
					{/* HomeButton */}
					<div className="w-full flex justify-end">
						<HomeButton />
					</div>

					{/* Logo */}
					<img
						src={require("../media/logos/logo.png")}
						alt="Imagen en el top right"
						className="h-42"
					/>

					{/* Formulario */}
					<div className="flex flex-col items-center mb-12">
						<input
							type="text"
							className="w-fit px-28 py-2 text-center text-gray-700 rounded-full border-4 border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 mb-2"
							placeholder="Full name"
							onChange={(e) => setFormData({ ...formData, nombre_usuario: e.target.value })}
						/>
						<input
							type="text"
							className="w-fit px-28 py-2 text-center text-gray-700 rounded-full border-4 border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 mb-2"
							placeholder="Nickname"
							onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
						/>
						<input
							type="email"
							className="w-fit px-28 py-2 text-center text-gray-700 rounded-full border-4 border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 mb-2"
							placeholder="Email"
							onChange={(e) => setFormData({ ...formData, email: e.target.value })}
						/>
						<input
							type="password"
							className="w-fit px-28 py-2 text-center text-gray-700 rounded-full border-4 border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 mb-2"
							placeholder="Password"
							onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
						/>
						<input
							type="password"
							className="w-fit px-28 py-2 text-center text-gray-700 rounded-full border-4 border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 mb-2"
							placeholder="Repeat Password"
							onChange={(e) => setConfirmedPassword(e.target.value)}
						/>
						<button
							type="submit"
							className="w-full py-2 text-xl text-white bg-red-500 rounded-full cursor-pointer hover:bg-red-600"
							style={{ backgroundColor: "rgb(142, 0, 0)" }}
						>
							Register
						</button>
						<br />
						<p
							className="underline ... hover:underline-offset-4 hover:text-green-500 "
							onClick={() => navigate("/login")}
						>
							Already have an account?
						</p>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Register;
