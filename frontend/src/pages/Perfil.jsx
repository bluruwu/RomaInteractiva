import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../utilities/Navbar";
import HomeButton from "../utilities/HomeButton";
import Modal from "../components/scores";

const Perfil = () => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/perfil");
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
						src={require("../media/logro.png")}
						className="inline  object-cover w-20 h-20 rounded-full"
					/>
					<img
						src={require("../media/logro.png")}
						className="inline  object-cover w-20 h-20 rounded-full"
					/>
					<img
						src={require("../media/usericon.png")}
						className="inline  object-cover w-28 h-28 ml-4 mr-4 mb-2 rounded-full"
					/>

					<img
						src={require("../media/logro.png")}
						className="inline  object-cover w-20 h-20 rounded-full"
					/>
					<img
						src={require("../media/logro.png")}
						className="inline  object-cover w-20 h-20 rounded-full"
					/>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center mb-5">
				<button
					className="mb-4 md:mb-0 h-8  rounded-xl transform transition duration-300 hover:scale-110 underline"
					onClick={() => navigate("/perfil")}
				>
					Cambiar avatar
				</button>
				<Modal/>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 items-center mb-8">
				<div className="flex flex-col">
					<div className="w-30 self-end">
						<p>Nombre completo</p>
						<input
							type="text"
							className="w-fit px-28 py-1 text-center text-gray-700 rounded-full border-4 border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 mb-2"
						/>
					</div>
				</div>
				<div className="flex flex-col w-30">
					<p>Apodo</p>
					<input
						type="text"
						className="w-fit px-28 py-1 text-center text-gray-700 rounded-full border-4 border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 mb-2"
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
