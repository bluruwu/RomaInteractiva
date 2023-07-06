import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendRecoveryEmail } from "../conections/requests";
import { Alert } from "../components/alerts/alerts";
import Swal from "sweetalert2";
import HomeButton from "../utilities/HomeButton";
import "./css/recover.css";

const Recover = () => {
	const navigate = useNavigate(); // Hook de navegación
	const [showAlert, setShowAlert] = useState(false); // Estado para mostrar/ocultar la alerta

	const [formData, setFormData] = useState({
		email: "",
	}); // Estado para almacenar los datos del formulario de inicio de sesión

	const handleSubmit = (event) => {
		event.preventDefault(); // Prevenir comportamiento de envío predeterminado
		const lowercaseEmail = formData.email.toLowerCase(); // Convertir el campo de email a minúsculas

		console.log(formData); // Imprimir los datos del formulario en la consola
		const myresponse = async () => {
			// Realizar solicitud de inicio de sesión utilizando los datos del formulario
			const req_succesful = await sendRecoveryEmail({
				to: lowercaseEmail,
				subject: "Recuperacion de contraseña",
				body: "Tu nueva contraseña es: "
			});

			console.log(req_succesful);
			if (req_succesful === "Correo electrónico enviado exitosamente") {
				// Si las credenciales son correctas, mostrar una alerta de éxito y navegar a la página de inicio ("/home")
				Swal.fire({
					title: "Éxito!",
					text: "Te hemos enviado a tu correo tu nueva contraseña!",
					icon: "success",
					customClass: {
						container: "font-text",
					},
				});

				navigate("/login");
			} else {
				// Si las credenciales son incorrectas, mostrar una alerta de error con el mensaje de error devuelto por la solicitud
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: 'No pudimos enviarte tu nueva contraseña 😭',
					customClass: {
						container: "font-text",
					},
				});
			}
		};
		myresponse(); // Ejecutar la función asíncrona myresponse
	};

	// Render de la pagina con sus componentes. Una imagen de fondo, un logo, y los campos necesarios para loguearse. Además del botón de submit y el botón que lleva a registro
	return (
		<div id="recover" className="font-text">
			{showAlert && <Alert />}

			<form onSubmit={handleSubmit}>
				<div className="form">
					<div className="flex-1.6  justify-center items-center">
						<img
							src={require("../media/caida.jpg")}
							alt="Imagen de fondo"
							className="block w-full h-full object-cover"
						/>
					</div>
					<div className="homebutton">
						<div className="self-end justify-end items-end">
							<HomeButton />
						</div>

						<img
							src={require("../media/iconos/a.png")}
							alt="Imagen en el top right"
							className="welcomeimage"
						/>
						<div className="divfields">
							<input
								id="email"
								type="text"
								className="inputfields"
								placeholder="Email"
								onChange={(e) => setFormData({ email: e.target.value })}
							/>
						</div>

						<button
							id="submit"
							type="submit"
							className="recoverbutton"
							onSubmit={(e) => e.preventDefault()}
						>
							Send email
						</button>

						<br />
						
					</div>
				</div>
			</form>
		</div>
	);
};

export default Recover;
