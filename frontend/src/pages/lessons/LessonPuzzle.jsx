import React from "react";
import Navbar from "../../utilities/Navbar";
import App from "./puzzle/Puzzle";
import Image from "../../media/coliseo2.jpg"; // Ruta de la imagen

const LessonPuzzle = () => {
	return (
		<div className="font-text flex flex-col min-h-screen">
			<Navbar />

			<div className="flex flex-col grow md:flex-row">
				{/* Imagen izquierda */}
				<div className="w-full md:w-1/2 flex flex-grow hidden lg:block">
					<img src={Image} alt="Imagen del Coliseo" className="w-full h-full object-cover" />
				</div>

				{/* Juego puzzle */}
				<div className="w-full md:w-1/2 flex flex-grow flex-col items-center space-y-4 mb-8">
					{/* Titulo */}
					<div className="w-full mt-10 mb-10 justify-center items-center">
						<p className="font-bold text-3xl text-center filter drop-shadow-lg px-4">
							Rompecabezas Romano
						</p>
					</div>

					{/* Rompecabezas con su boton */}
					<div>
						<App />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LessonPuzzle;
