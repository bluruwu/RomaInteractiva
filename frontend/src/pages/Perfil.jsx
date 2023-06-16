import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../utilities/Navbar";
import HomeButton from "../utilities/HomeButton";
import Modal from "../components/scores";
import ModalAvatar from "../components/chooseAvatar";
import { putActualizarPerfil } from "../conections/requests";

//Pagina del PERFIL DEL USUARIO
const Perfil = () => {
	// const navigate = useNavigate();

	//Manejar cuando el usuario hace clic en "GUARDAR CAMBIOS"
	const handleButtonClick = () => {
		// Guardar los valores en el localStorage
		localStorage.setItem("nombre_usuario", JSON.stringify(nombreCompleto));
		localStorage.setItem("nickname", JSON.stringify(nickname));
		localStorage.setItem("email", JSON.stringify(email));
		localStorage.setItem("avatar_id", JSON.stringify(idAvatar));
		localStorage.setItem("contrasena", JSON.stringify(contrasena))

		const myData =
		{
			"nombre_usuario": nombreCompleto,
			"nickname": nickname,
			"email": email,
			"contrasena": contrasena
		}

		//realizar la peticion al backend
		console.log()


		const myPutPetition = async () => {
			const req_succesful = await putActualizarPerfil(myData, localStorage.getItem("token")); // Realizar solicitud de registro utilizando los datos del formulario
			if (req_succesful === "Data submitted successfully") {
				// Si el registro es exitoso, mostrar una alerta de éxito y navegar a la página de inicio de sesión ("/login")
				//Swal.fire("Congrats!", "You have succesfully updated!", "success");
			}
			// } else {
			// 	// Si ocurre un error durante el registro, mostrar una alerta de error con el mensaje de error correspondiente
			// 	Swal.fire({
			// 		icon: "error",
			// 		title: "Oops...",
			// 		text: "Email or username already taken",
			// 	});
			// }
		};
		myPutPetition(); // Ejecutar la función asíncrona myresponse

		// Recargar la página
		window.location.reload();

		//Recargar página
		return <Navigate to="/perfil" />;
	};

	//Obtener el avatar del usuario si tiene uno
	const initialAvatar = () => {
		if (localStorage.getItem("avatar_id")) {
			return JSON.parse(localStorage.getItem("avatar_id"));
		} else return null;
	};

	//Obtener el nombre del usuario
	const [nombreCompleto, setNombreCompleto] = useState(
		JSON.parse(localStorage.getItem("nombre_usuario")) || ""
	);

	//Obtener datos del usuario cuando ingresa a la pagina
	const [nickname, setNickname] = useState(JSON.parse(localStorage.getItem("nickname")) || "");
	const [contrasena, setContrasena] = useState(JSON.parse(localStorage.getItem("contrasena") || ""));
	const [email, setEmail] = useState(JSON.parse(localStorage.getItem("email")) || "");
	const [nivel, setNivel] = useState(localStorage.getItem("nivel") || "");
	const [experiencia, setExperiencia] = useState(localStorage.getItem("experiencia") || "");
	const [idAvatar, setIdAvatar] = useState(initialAvatar());

	//Obtener la imagen del avatar
	const getAvatar = () => {
		//Si el usuario tiene un avatar_id se busca la imagen que le corresponde
		if (idAvatar != null) {
			return (
				<img
					src={process.env.PUBLIC_URL + `/avatars/avatar${idAvatar}.svg`}
					className="inline border-4 border-custom-doradodark object-cover w-36 h-36 mb-2 rounded-full"
				/>
			);
		} else {
			//Si el usuario no tiene ningun avatar_id se pone el avatar generico
			return (
				<img
					src={process.env.PUBLIC_URL + `/avatars/usericon.png`}
					className="inline  object-cover w-32 h-32 mb-2 rounded-full"
				/>
			);
		}
	};

	return (
		<div className="font-text bg-gray-100 h-screen">
			<Navbar />
			{/* Contenido de la leccion y modelo */}
			<div className="mt-10 ml-10">
				<HomeButton />
			</div>

			<div className="flex items-center justify-center">
				{/* Logros izquierda */}
				<div class=" flex-col items-center">
					<img
						src={require("../media/logros/logro-columna.png")}
						className="inline  object-cover w-16 h-16 mr-6 rounded-full"
					/>
					<img
						src={require("../media/logros/logro-helmet.png")}
						className="inline  object-cover w-16 h-16 mr-6 rounded-full"
					/>
					{getAvatar()}
					<img
						src={require("../media/logros/logro-medalla.png")}
						className="inline  object-cover w-16 h-16 ml-6 rounded-full"
					/>
					<img
						src={require("../media/logros/logro-toga.png")}
						className="inline  object-cover w-16 h-16 ml-6 rounded-full"
					/>
				</div>
			</div>

			{/* Modal para mostrar los avatares disponibles */}
			<div className="flex flex-col items-center justify-center mb-5">
				<ModalAvatar saveAvatar={setIdAvatar} />
				<Modal />
			</div>

			{/* Campos con la informacion del usuario */}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 items-center mb-8">
				<div className="flex flex-col">
					<div className="w-30 self-end">
						<p>Nombre completo</p>
						<input
							type="text"
							className="w-fit px-28 py-1 text-center text-gray-700 rounded-full border-4 border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 mb-2"
							onChange={(e) => setNombreCompleto(e.target.value)}
							value={nombreCompleto}
						/>
					</div>
				</div>
				<div className="flex flex-col w-30">
					<p>Apodo</p>
					<input
						type="text"
						className="w-fit px-28 py-1 text-center text-gray-700 rounded-full border-4 border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 mb-2"
						onChange={(e) => setNickname(e.target.value)}
						value={nickname}
					/>
				</div>
				<div className="flex flex-col">
					<div className="w-30 self-end">
						<p>Contraseña</p>
						<input
							type="text"
							className="w-fit px-28 py-1 text-center text-gray-700 rounded-full border-4 border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 mb-2"
							onChange={(e) => setContrasena(e.target.value)}
							value={contrasena}
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<p>Correo electrónico</p>
					<input
						type="text"
						className="w-fit px-28 py-1 text-center text-gray-700 rounded-full border-4 border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 mb-2"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<div className="flex flex-col">
					<div className="w-30 self-end">
						<p>Nivel</p>
						<input
							type="text"
							className="w-fit px-28 py-1 text-center text-gray-700 rounded-full border-4 border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 mb-2"
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<p>Experiencia</p>
					<input
						type="text"
						className="w-fit px-28 py-1 text-center text-gray-700 rounded-full border-4 border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 mb-2"
					/>
				</div>
			</div>

			{/* Boton guardar cambios */}
			<div className="flex flex-col items-center">
				<button
					className="mb-4 md:mb-0 h-8 bg-custom-doradonormal rounded-xl font-bold drop-shadow-xl hover:bg-custom-doradodark shadow-md transform transition duration-300 hover:scale-110"
					style={{ minWidth: "15rem" }}
					onClick={handleButtonClick}
				>
					Guardar cambios
				</button>
			</div>
		</div>
	);
};

export default Perfil;
