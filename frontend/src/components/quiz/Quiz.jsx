import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../utilities/Navbar";
import HomeButton from "../../utilities/HomeButton";

const Quiz = () => {
	const navigate = useNavigate();

	return (
		<div className="font-text">
			<Navbar />
			{/* HomeButton y titulo pregunta */}
			<div className="mb-2 flex flex-col md:flex-row items-center justify-center">
				<div className="p-14">
					<HomeButton />
				</div>
				{/* Pregunta titulo */}
				<div className="flex-grow text-3xl text-center">
					<p className="font-bold filter drop-shadow-lg">¿Dónde nació Julio César?</p>
				</div>
			</div>

			{/* Div con los botones de las opciones de respuesta */}
			<div className="flex flex-col  items-center mb-12">
				<button
					className="mb-4 h-10 border border-gray-500 bg-custom-rojo text-white  rounded-3xl shadow-xl"
					style={{ minWidth: "25rem" }}
				>
					Alejandría
				</button>
				<button
					className="mb-4 h-10 border border-gray-500 bg-custom-rojo text-white  rounded-3xl shadow-xl"
					style={{ minWidth: "25rem" }}
				>
					Tarraco
				</button>
				<button
					className="mb-4 h-10 border border-gray-500 bg-custom-rojo text-white  rounded-3xl shadow-xl"
					style={{ minWidth: "25rem" }}
				>
					Subura
				</button>
				<button
					className="mb-4 h-10 border border-gray-500 bg-custom-rojo text-white  rounded-3xl shadow-xl"
					style={{ minWidth: "25rem" }}
				>
					Lugo
				</button>
			</div>

			{/* Div con los botones de Anterior y Siguiente pregunta de la parte inferior */}
			<div className="flex flex-col md:flex-row justify-between mx-auto px-8 md:px-80">
				<button
					className="mb-4 md:mb-0 h-8 bg-custom-dorado rounded-xl font-bold drop-shadow-xl"
					style={{ minWidth: "15rem" }}
				>
					Anterior
				</button>
				<button
					className="mb-4 md:mb-0 h-8 bg-custom-dorado rounded-xl font-bold drop-shadow-xl"
					style={{ minWidth: "15rem" }}
				>
					Siguiente
				</button>
			</div>
		</div>
	);
};

export default Quiz;
