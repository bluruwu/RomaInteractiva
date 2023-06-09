import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../utilities/Navbar";
import HomeButton from "../utilities/HomeButton";
import Modal from "../components/scores";
import ModalAvatar from "../components/chooseAvatar";

const Perfil = () => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/perfil");
	};

	const initialAvatar = () => {
		if (localStorage.getItem('avatar')) {
			return JSON.parse(localStorage.getItem('avatar'))
		}
		else return null
	}

	const [nombreCompleto, setNombreCompleto] = useState(
		localStorage.getItem("nombre_usuario") || ""
	);
	const [nickname, setNickname] = useState(localStorage.getItem("nickname") || "");
	const [contrasena, setContrasena] = useState(localStorage.getItem("contrasena") || "");
	const [email, setEmail] = useState(localStorage.getItem("email") || "");
	const [nivel, setNivel] = useState(localStorage.getItem("nivel") || "");
	const [experiencia, setExperiencia] = useState(localStorage.getItem("experiencia") || "");
	const [idAvatar, setIdAvatar] = useState(initialAvatar())

	

	const getAvatar = () => {
		if (idAvatar != null) {
			return <img
				src={process.env.PUBLIC_URL + `/avatars/avatar${idAvatar}.svg`}
				className="inline border-4 border-gray-500 object-cover w-36 h-36 mb-2 rounded-full"
			/>
		}
		else {
			return <img
			src={require("../media/usericon.png")}
			className="inline  object-cover w-32 h-32 mb-2 rounded-full"
		/>
		}
	}

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
						src={require("../media/logro-columna.png")}
						className="inline  object-cover w-16 h-16 mr-6 rounded-full"
					/>
					<img
						src={require("../media/logro-helmet.png")}
						className="inline  object-cover w-16 h-16 mr-6 rounded-full"
					/>
					{getAvatar()}
					<img
						src={require("../media/logro-medalla.png")}
						className="inline  object-cover w-16 h-16 ml-6 rounded-full"
					/>
					<img
						src={require("../media/logro-toga.png")}
						className="inline  object-cover w-16 h-16 ml-6 rounded-full"
					/>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center mb-5">
				<ModalAvatar saveAvatar={setIdAvatar}/>
				<Modal />
			</div>

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
