import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../conections/requests";
import HomeButton from "../utilities/HomeButton";
import Swal from "sweetalert2";
import "./css/register.css"

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
				customClass: {
					container: "font-text", // Cambiar la fuente del título
				},
			});
			return;
		}

		if (formData["contrasena"] != confirmedPassword) {
			// Validar que las contraseñas coincidan
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Passwords are not the same",
				customClass: {
					container: "font-text", // Cambiar la fuente del título
				},
			});
			return;
		}

		if (formData["nombre_usuario"].length < 8) {
			// Validar longitud mínima de nombre de usuario
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Full name is too short",
				customClass: {
					container: "font-text", // Cambiar la fuente del título
				},
			});
			return;
		}

		if (formData["nickname"].length < 5) {
			// Validar longitud mínima de nickname
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Nickname is too short",
				customClass: {
					container: "font-text", // Cambiar la fuente del título
				},
			});
			return;
		}

		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData["email"]) == false) {
			// Validar formato de correo electrónico
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Email is not valid",
				customClass: {
					container: "font-text", // Cambiar la fuente del título
				},
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
				Swal.fire({
					title: "Congrats!",
					text: "You have succesfully been registered!",
					icon: "success",
					customClass: {
						container: "font-text",
					},
				});

				//alert("Register succesful");
				navigate("/login");
			} else {
				// Si ocurre un error durante el registro, mostrar una alerta de error con el mensaje de error correspondiente
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Really sorry, some services aren't avaliable right now.",
					customClass: {
						container: "font-text", // Cambiar la fuente del título
					},
				});
			}
		};
		myresponse(); // Ejecutar la función asíncrona myresponse
	};
	// Render de la pagina con sus componentes. Una imagen de fondo, un logo, y los campos necesarios para registrarse. Además del botón de submit y el botón que lleva a Login y Home
	return (
		<div id="register">
			<form onSubmit={handleSubmit}>
				<div className="form">
					{/* Imagen de fondo */}
					<div className="flex-1.6  justify-center items-center">
						<img
							src={require("../media/coliseo.jpg")}
							alt="Imagen de fondo"
							className="block w-full h-full object-cover"
						/>
					</div>

					{/* Panel derecho */}
					<div className="homebutton">
						{/* HomeButton */}
						<div className="self-end justify-end items-end">
							<HomeButton />
						</div>

						{/* Logo */}
						<img
							src={require("../media/logos/logo.png")}
							alt="Imagen en el top right"
							className="welcomeimage"
						/>

						{/* Formulario */}
						<div className="divfields">
							<input
								type="text"
								className="inputfields"
								placeholder="Full name"
								onChange={(e) => setFormData({ ...formData, nombre_usuario: e.target.value })}
							/>
						</div>
						<div className="divfields">
							<input
								type="text"
								className="inputfields"
								placeholder="Nickname"
								onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
							/>
						</div>
						<div className="divfields">
							<input
								type="email"
								className="inputfields"
								placeholder="Email"
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
							/>
						</div>
						<div className="divfields">
							<input
								type="password"
								className="inputfields"
								placeholder="Password"
								onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
							/>
						</div>
						<div className="divfields">
							<input
								type="password"
								className="inputfields"
								placeholder="Repeat Password"
								onChange={(e) => setConfirmedPassword(e.target.value)}
							/>
						</div>
						<div className="divfields">
					<button
						type="submit"
						className="registerbutton"

					>
						Register
					</button></div>
					<br />
					<p
						className="link"
						onClick={() => navigate("/login")}
					>
						Already have an account?
					</p>
					</div>
				</div >
			</form >
		</div >

	);
};

export default Register;
