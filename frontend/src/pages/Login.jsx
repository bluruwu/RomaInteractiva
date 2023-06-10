import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../conections/requests";
import { Alert } from "../components/alerts/alerts";
import Swal from "sweetalert2";
import HomeButton from "../utilities/HomeButton";

const Login = () => {
	const navigate = useNavigate(); // Hook de navegación
	const [showAlert, setShowAlert] = useState(false); // Estado para mostrar/ocultar la alerta

	const [formData, setFormData] = useState({
		email: "",
		contrasena: "",
	}); // Estado para almacenar los datos del formulario de inicio de sesión

	const handleSubmit = (event) => {
		event.preventDefault(); // Prevenir comportamiento de envío predeterminado
		console.log(formData); // Imprimir los datos del formulario en la consola
		const myresponse = async () => {
			const req_succesful = await postLogin(formData); // Realizar solicitud de inicio de sesión utilizando los datos del formulario
			console.log(req_succesful);
			if (req_succesful === "Inicio de sesión exitoso") {
				// Si las credenciales son correctas, mostrar una alerta de éxito y navegar a la página de inicio ("/home")
				Swal.fire("Welcome!", "You have succesfully been logged!", "success");
				navigate("/home");
			} else {
				// Si las credenciales son incorrectas, mostrar una alerta de error con el mensaje de error devuelto por la solicitud
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: req_succesful,
				});
			}
		};
		myresponse(); // Ejecutar la función asíncrona myresponse
	};

	// Render de la pagina con sus componentes. Una imagen de fondo, un logo, y los campos necesarios para loguearse. Además del botón de submit y el botón que lleva a registro
	return (
		<div className="flex h-screen font-text">
			{showAlert && <Alert />}
			<form onSubmit={handleSubmit}>
				<div className="flex h-screen">
					<div className="flex-1.6  justify-center items-center">
						<img
							src={require("../media/plazaSanPedro.jpg")}
							alt="Imagen de fondo"
							className="block w-full h-full object-cover"
						/>
					</div>
					<div className="flex-1 flex flex-col justify-center items-center bg-gray-100 p-40">
						<div className="self-end justify-end items-end">
							<HomeButton />
						</div>

						<img
							src={require("../media/luperca.jpg")}
							alt="Imagen en el top right"
							className="max-w-200 max-h-200 object-cover  max-w-prose"
						/>
						<div className="mb-4">
							<input
								id="email"
								type="text"
								className="w-fit px-32 py-3 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
								placeholder="Email"
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
							/>
						</div>
						<div className="mb-4">
							<input
								id="password"
								type="password"
								className="w-fit px-32 py-3 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
								placeholder="Password"
								onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
							/>
						</div>
						<button
							id="submit"
							type="submit"
							className="w-full px-6 py-3 text-xl text-white bg-custom-rojo rounded-full cursor-pointer hover:bg-red-800"
							onSubmit={(e) => e.preventDefault()}
						>
							Login
						</button>
						<br />
						<p
							id="recover"
							className="underline ... hover:underline-offset-4 hover:text-green-500"
							onClick={() => navigate("/recoverpassword")}
						>
							Recover password
						</p>
						<br />
						<p
							id="navregistro"
							className="underline ... hover:underline-offset-4 hover:text-green-500"
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
