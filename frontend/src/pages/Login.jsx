import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin, postLoginGoogle, getPrueba } from "../conections/requests";
import { Alert } from "../components/alerts/alerts";
import Swal from "sweetalert2";
import HomeButton from "../utilities/HomeButton";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
	const navigate = useNavigate(); // Hook de navegación
	const [showAlert, setShowAlert] = useState(false); // Estado para mostrar/ocultar la alerta

	const [formData, setFormData] = useState({
		email: "",
		contrasena: "",
	}); // Estado para almacenar los datos del formulario de inicio de sesión

	//MANEJAR EL LOGIN NORMAL (SIN GOOGLE)
	const handleSubmit = (event) => {
		event.preventDefault(); // Prevenir comportamiento de envío predeterminado
		const lowercaseEmail = formData.email.toLowerCase(); // Convertir el campo de email a minúsculas

		console.log(formData); // Imprimir los datos del formulario en la consola
		const myresponse = async () => {
			// Realizar solicitud de inicio de sesión utilizando los datos del formulario
			const req_succesful = await postLogin({
				...formData,
				email: lowercaseEmail,
			});

			console.log(req_succesful);
			if (req_succesful === "Inicio de sesión exitoso") {
				// Si las credenciales son correctas, mostrar una alerta de éxito y navegar a la página de inicio ("/home")
				Swal.fire({
					title: "Welcome!",
					text: "You have succesfully been logged!",
					icon: "success",
					customClass: {
						container: "font-text",
					},
				});

				navigate("/home");
			} else {
				// Si las credenciales son incorrectas, mostrar una alerta de error con el mensaje de error devuelto por la solicitud
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: req_succesful,
					customClass: {
						container: "font-text",
					},
				});
			}
		};
		myresponse(); // Ejecutar la función asíncrona myresponse
	};

	//MANEJAR EL LOGIN CON GOOGLE
	const handleGoogleLogin = (credentialResponse) => {
		console.log(credentialResponse); // Imprimir los datos del formulario en la consola
		const myresponse = async () => {
			// Realizar solicitud de inicio de sesión utilizando los datos del formulario
			const req_succesful = await postLoginGoogle({
				credentialResponse,
			});

			console.log(req_succesful);
			if (req_succesful === "Inicio de sesión exitoso") {
				// Si las credenciales son correctas, mostrar una alerta de éxito y navegar a la página de inicio ("/home")
				Swal.fire({
					title: "Welcome!",
					text: "You have succesfully been logged!",
					icon: "success",
					customClass: {
						container: "font-text",
					},
				});

				navigate("/home");
			}
		};
		myresponse(); // Ejecutar la función asíncrona myresponse
	};

	// Render de la pagina con sus componentes. Una imagen de fondo, un logo, y los campos necesarios para loguearse. Además del botón de submit y el botón que lleva a registro
	return (
		<div id="login" className="font-text">
			{showAlert && <Alert />}

			<div className="md:flex md:flex-row w-full md:h-screen">
				{/* IMAGEN DE FONDO IZQUIERDA */}
				<div className="hidden md:block md:w-1/2 lg:w-7/12 justify-center items-center h-full w-full">
					<img
						src={require("../media/plazaSanPedro.jpg")}
						alt="Imagen de fondo"
						className="block w-full h-full object-cover"
					/>
				</div>

				{/* PARTE DERECHA */}
				<form className="md:w-1/2 lg:w-5/12 justify-center" onSubmit={handleSubmit}>
					<div className="flex p-4 flex flex-col justify-center h-full w-full">
						{/* HOMEBUTTON */}
						<div className="flex self-end justify-end items-end pb-4 md:pr-[calc((100%-22rem)/2)]">
							<HomeButton />
						</div>

						{/* IMAGEN DEL LOGIN */}
						<div className="flex justify-center mb-4">
							<img src={require("../media/iconos/luperca.png")} alt="Imagen en el top right" />
						</div>

						{/* CAMPO DE EMAIL, PASSWORD, BOTON DE LOGIN */}
						<div className="flex flex-col items-center justify-center">
							<input
								id="email"
								type="text"
								className="max-w-sm w-full h-full text-center border-2 rounded-3xl border focus:outline-none mb-4 focus:border-custom-rojo focus:ring-0"
								placeholder="Email"
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
							/>
							<input
								id="password"
								type="password"
								className="max-w-sm w-full h-full text-center border-2 rounded-3xl border focus:outline-none mb-4 focus:border-custom-rojo focus:ring-0"
								placeholder="Password"
								onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
							/>

							<button
								id="submit"
								type="submit"
								className="max-w-sm bg-custom-rojo text-white w-full h-full text-center border-2 rounded-3xl border focus:outline-none py-2 mb-4"
								onSubmit={(e) => e.preventDefault()}
							>
								Login
							</button>
						</div>

						{/* ELEMENTOS DE LOGIN CON GOOGLE, RECUPERAR CONTRASENA Y REGISTRARSE */}
						<div className="flex flex-col items-center">
							<p className="mb-4">O continúa con</p>

							{/* LOGIN CON GOOGLE */}
							<div className="mb-8">
								<GoogleOAuthProvider clientId="880689041530-1g2pd7csm5mbrrqaha8rh60s6bvntlsv.apps.googleusercontent.com">
									<GoogleLogin
										onSuccess={(credentialResponse) => {
											handleGoogleLogin(credentialResponse); // Pasar credentialResponse como argumento
										}}
										onError={() => {
											console.log("Login Failed");
										}}
										theme="filled_blue"
										shape="circle"
										useOneTap
									/>
								</GoogleOAuthProvider>
							</div>

							<button
								id="recover"
								className="mb-4 underline"
								onClick={() => navigate("/recoverpassword")}
							>
								Recover password
							</button>
							<button id="navregistro" className="underline " onClick={() => navigate("/register")}>
								Don't have an account?
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
