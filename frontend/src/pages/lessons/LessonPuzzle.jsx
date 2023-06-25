import React from "react";
import Navbar from "../../utilities/Navbar";
import App from "./puzzle/App";
import Image from "../../media/coliseo.jpg"; // Ruta de la imagen

const LessonPuzzle = () => {
	const navbarHeight = 2; // Altura del Navbar en píxeles

	return (
		<div className="font-text">
			<Navbar />

			<div className={`flex flex-col md:flex-row h-fit h-[calc(100vh - ${navbarHeight}px)]`}>
				<div className="w-full md:w-1/2 bg-red-100">
					<img src={Image} alt="Imagen del Coliseo" className="w-full h-full" />
				</div>
				<div className="w-full md:w-1/2 flex flex-col items-center space-y-4">
					<div className="w-full mt-10 mb-10 justify-center items-center">
						<p className="font-bold text-3xl text-center drop-shadow-xl">Rompecabezas Romano</p>
					</div>
					<div>
						<App />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LessonPuzzle;
