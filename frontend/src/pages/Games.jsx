import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../utilities/Navbar";
import Image1 from "../media/juegos1.jpg"; // Ruta de la imagen
import Image2 from "../media/juegos2.jpg"; // Ruta de la imagen

// Pagina para navegar a los juegos
const Games = () => {
	const navigate = useNavigate();
	const [isHoveredPuzzle, setIsHoveredPuzzle] = useState(false);
	const [isHoveredCrossword, setIsHoveredCrossword] = useState(false);

	const handleHoverPuzzle = () => {
		setIsHoveredPuzzle(true);
	};

	const handleMouseLeavePuzzle = () => {
		setIsHoveredPuzzle(false);
	};

	const handleHoverCrossword = () => {
		setIsHoveredCrossword(true);
	};

	const handleMouseLeaveCrossword = () => {
		setIsHoveredCrossword(false);
	};
	return (
		<div className="font-text flex flex-col min-h-screen">
			<Navbar />

			<div className="flex flex-col grow md:flex-row">
				<div
					className="w-full md:w-1/2 relative cursor-pointer overflow-hidden"
					onClick={() => navigate("/puzzle")}
					onMouseEnter={handleHoverPuzzle}
					onMouseLeave={handleMouseLeavePuzzle}
				>
					<img
						src={Image1}
						alt="Anterior leccion"
						className={`block w-full h-full object-cover ${
							isHoveredPuzzle ? "scale-110 transition-all duration-500" : ""
						}${!isHoveredPuzzle ? "scale-100 transition-all duration-500" : ""}`}
						style={{
							transformOrigin: "center center",
							transformStyle: "preserve-3d",
						}}
					/>
					{/* Opacidad de la imagen */}
					<div
						className={`absolute inset-0 transition-opacity duration-1000 bg-black ${
							isHoveredPuzzle ? "opacity-70" : "opacity-50"
						}`}
					></div>
					{/* Texto que aparece sobre la imagen */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
						<p
							className={`text-3xl font-bold text-white pb-8 ${
								isHoveredPuzzle ? "scale-110 transition-all duration-500" : ""
							} ${!isHoveredPuzzle ? "scale-100 transition-all duration-500" : ""}`}
						>
							Rompecabezas deslizante
						</p>
						<p
							className={` font-bold text-white ${
								isHoveredPuzzle ? "scale-110 transition-all duration-500" : ""
							} ${!isHoveredPuzzle ? "scale-100 transition-all duration-500" : ""}`}
						>
							Soluciona los distintos rompecabezas de personajes y lugares de Roma
						</p>
					</div>
				</div>

				{/* //////////////////////////////////////////////////////////////////////// */}
				{/* Leccion anterior */}
				<div
					className="w-full md:w-1/2 relative cursor-pointer overflow-hidden"
					onClick={() => navigate("/crossword")}
					onMouseEnter={handleHoverCrossword}
					onMouseLeave={handleMouseLeaveCrossword}
				>
					<img
						src={Image2}
						alt="Anterior leccion"
						className={`block w-full h-full object-cover ${
							isHoveredCrossword ? "scale-110 transition-all duration-500" : ""
						}${!isHoveredCrossword ? "scale-100 transition-all duration-500" : ""}`}
						style={{
							transformOrigin: "center center",
							transformStyle: "preserve-3d",
						}}
					/>
					{/* Opacidad de la imagen */}
					<div
						className={`absolute inset-0 transition-opacity duration-1000 bg-black ${
							isHoveredCrossword ? "opacity-70" : "opacity-50"
						}`}
					></div>
					{/* Texto que aparece sobre la imagen */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
						<p
							className={`text-3xl font-bold text-white pb-8 ${
								isHoveredCrossword ? "scale-110 transition-all duration-500" : ""
							} ${!isHoveredCrossword ? "scale-100 transition-all duration-500" : ""}`}
						>
							Crucigrama
						</p>
						<p
							className={` font-bold text-white ${
								isHoveredCrossword ? "scale-110 transition-all duration-500" : ""
							} ${!isHoveredCrossword ? "scale-100 transition-all duration-500" : ""}`}
						>
							Comprueba tus conocimientos sobre la Antigua Roma con este sencillo crucigrama
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Games;
