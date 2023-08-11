import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendRecoveryEmail } from "../conections/requests";
import { Alert } from "../components/alerts/alerts";
import Swal from "sweetalert2";
import HomeButton from "../utilities/HomeButton";

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
				body: "Tu nueva contraseña es: ",
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
					text: "No pudimos enviarte tu nueva contraseña 😭",
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

			<div className="md:flex md:flex-row w-full md:h-screen">
				{/* IMAGEN PRINCIPAL IZQUIERDA */}
				<div className="hidden md:block md:w-1/2 lg:w-7/12 justify-center items-center h-full w-full">
					<img
						src={require("../media/caida.jpg")}
						alt="Imagen de fondo"
						className="block w-full h-full object-cover"
					/>
				</div>

				{/* PANEL DERECHO */}
				<form onSubmit={handleSubmit} className="md:w-1/2 lg:w-5/12 justify-center">
					<div className="flex p-4 flex flex-col justify-center h-full w-full">
						<div className="flex self-end justify-end items-end pb-4 md:pr-[calc((100%-22rem)/2)]">
							<HomeButton />
						</div>

						{/* IMAGEN TOP RIGHT */}
						<div className="flex w-full justify-center items-center mb-4 ">
							<img
								src={require("../media/iconos/a.png")}
								alt="Imagen en el top right"
								className="max-w-xs md:max-w-sm"
							/>
						</div>

						{/* CAMPO DEL CORREO */}

						<div className="flex flex-col items-center justify-center">
							<input
								id="email"
								type="text"
								className="max-w-sm w-full h-full text-center border-2 rounded-3xl focus:outline-none mb-4 focus:border-custom-rojo focus:ring-0"
								placeholder="Email"
								onChange={(e) => setFormData({ email: e.target.value })}
							/>

							<button
								id="submit"
								type="submit"
								className="max-w-sm bg-custom-rojo text-white w-full h-full text-center border-2 rounded-3xl border focus:outline-none py-2 mb-8"
								onSubmit={(e) => e.preventDefault()}
							>
								Send email
							</button>
						</div>

						<div className="flex flex-col items-center">
							<button id="gotologin" className="mb-4 underline" onClick={() => navigate("/login")}>
								Return to login
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Recover;
