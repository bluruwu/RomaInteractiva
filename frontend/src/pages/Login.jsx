import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin, postLoginGoogle, getPrueba } from "../conections/requests";
import { Alert } from "../components/alerts/alerts";
import Swal from "sweetalert2";
import HomeButton from "../utilities/HomeButton";
import "./css/login.css";
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

			<form onSubmit={handleSubmit}>
				<div className="form">
					<div className="flex-1.6  justify-center items-center">
						<img
							src={require("../media/plazaSanPedro.jpg")}
							alt="Imagen de fondo"
							className="block w-full h-full object-cover"
						/>
					</div>
					<div className="homebutton">
						<div className="self-end justify-end items-end">
							<HomeButton />
						</div>

						<img
							src={require("../media/iconos/luperca.png")}
							alt="Imagen en el top right"
							className="welcomeimage"
						/>
						<div className="divfields">
							<input
								id="email"
								type="text"
								className="inputfields"
								placeholder="Email"
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
							/>
						</div>
						<div className="divfields">
							<input
								id="password"
								type="password"
								className="inputfields"
								placeholder="Password"
								onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
							/>
						</div>
						<button
							id="submit"
							type="submit"
							className="loginbutton"
							onSubmit={(e) => e.preventDefault()}
						>
							Login
						</button>

						<br />

						<p>O continúa con</p>

						<br />

						{/* LOGIN CON GOOGLE */}
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

						<br />
						<p
							id="recover"
							className="link cursor-pointer"
							onClick={() => navigate("/recoverpassword")}
						>
							Recover password
						</p>
						<br />
						<p
							id="navregistro"
							className="link cursor-pointer"
							onClick={() => navigate("/register")}
						>
							Don't have an account?
						</p>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
