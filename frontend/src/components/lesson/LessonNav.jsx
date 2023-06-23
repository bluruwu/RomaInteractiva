import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

//Botones de navegacion que aparecen en la parte inferior de las lecciones
const LessonNav = ({
	urlbef,
	urlnxt,
	mediabef,
	medianxt,
	titlebef,
	titlenxt,
	last = false,
	quiz,
}) => {
	const navigate = useNavigate();

	const quizDone = () => {
		if (quiz == "monarquia") {
			return JSON.parse(localStorage.getItem("monarquiaResuelto"));
		} else if (quiz == "republica") {
			return JSON.parse(localStorage.getItem("republicaResuelto"));
		} else if (quiz == "personajes") {
			return JSON.parse(localStorage.getItem("personajesResuelto"));
		}
	};

	//Manejar si un usuario ya ha hecho el quiz -> Preguntar si quiere hacer revision de las preguntas
	//Si no lo ha hecho -> Preguntar si lo quiere hacer
	const quizMessage = () => {
		if (last) {
			if (quizDone()) {
				Swal.fire({
					title: "Ya has realizado este quiz ",
					text: "¿Deseas hacer revisión de las respuestas?",
					icon: "warning",
					showDenyButton: true,
					showCancelButton: true,
					confirmButtonText: "Sí",
					denyButtonText: `Volver a home`,
					denyButtonColor: "#3085d6",
					customClass: {
						container: "font-text", // Cambiar la fuente del título
					},
				}).then((result) => {
					/* Read more about isConfirmed, isDenied below */
					if (result.isConfirmed) {
						navigate(urlnxt);
					} else if (result.isDenied) {
						navigate("/home");
					}
				});
			} else {
				Swal.fire({
					title: "Solo tienes un intento para hacer el quiz",
					showCancelButton: true,
					confirmButtonText: "Hacer quiz",
					confirmButtonColor: "#03ac13",

					customClass: {
						container: "font-text", // Cambiar la fuente del título
					},
				}).then((result) => {
					/* Read more about isConfirmed, isDenied below */
					if (result.isConfirmed) {
						navigate(urlnxt);
					}
				});
			}
		} else {
			navigate(urlnxt);
		}
	};

	const [isHoveredPrev, setIsHoveredPrev] = useState(false);
	const [isHoveredNext, setIsHoveredNext] = useState(false);

	const handleHoverPrev = () => {
		setIsHoveredPrev(true);
	};

	const handleMouseLeavePrev = () => {
		setIsHoveredPrev(false);
	};

	const handleHoverNext = () => {
		setIsHoveredNext(true);
	};

	const handleMouseLeaveNext = () => {
		setIsHoveredNext(false);
	};

	return (
		<div className="flex flex-col md:flex-row bg-red-100 ">
			{/* Leccion anterior */}
			<div
				className="w-full md:w-1/2 h-40 relative cursor-pointer overflow-hidden"
				onClick={() => navigate(urlbef)}
				onMouseEnter={handleHoverPrev}
				onMouseLeave={handleMouseLeavePrev}
			>
				<img
					src={require(`../../media/${mediabef}`)}
					alt="Anterior leccion"
					className={`block w-full h-full object-cover ${
						isHoveredPrev ? "scale-110 transition-all duration-500" : ""
					}${!isHoveredPrev ? "scale-100 transition-all duration-500" : ""}`}
					style={{
						transformOrigin: "center center",
						transformStyle: "preserve-3d",
					}}
				/>
				{/* Opacidad de la imagen */}
				<div
					className={`absolute inset-0 transition-opacity duration-1000 bg-black ${
						isHoveredPrev ? "opacity-70" : "opacity-40"
					}`}
				></div>

				{/* Texto que aparece sobre la imagen */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
					<p
						className={`text-lg font-bold text-white ${
							isHoveredPrev ? "scale-125 transition-all duration-500" : ""
						} ${!isHoveredPrev ? "scale-100 transition-all duration-500" : ""}`}
					>
						Anterior
					</p>
					<p
						className={`text-lg font-bold text-white ${
							isHoveredPrev ? "scale-125 transition-all duration-500" : ""
						} ${!isHoveredPrev ? "scale-100 transition-all duration-500" : ""}`}
					>
						{titlebef}
					</p>
				</div>
			</div>

			{/* Leccion siguiente */}
			<div
				className="w-full md:w-1/2 h-40 relative cursor-pointer overflow-hidden"
				onClick={quizMessage}
				onMouseEnter={handleHoverNext}
				onMouseLeave={handleMouseLeaveNext}
			>
				<img
					src={require(`../../media/${medianxt}`)}
					alt="Siguiente leccion"
					className={`block w-full h-full object-cover ${
						isHoveredNext ? "scale-110 transition-all duration-500" : ""
					}${!isHoveredNext ? "scale-100 transition-all duration-500" : ""}`}
				/>
				{/* Opacidad de la imagen */}
				<div
					className={`absolute inset-0 transition-opacity duration-1000 bg-black ${
						isHoveredNext ? "opacity-70" : "opacity-40"
					}`}
				></div>

				{/* Texto que aparece sobre la imagen */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
					<p
						className={`text-lg font-bold text-white ${
							isHoveredNext ? "scale-125 transition-all duration-500" : ""
						} ${!isHoveredNext ? "scale-100 transition-all duration-500" : ""}`}
					>
						Siguiente
					</p>
					<p
						className={`text-lg font-bold text-white ${
							isHoveredNext ? "scale-125 transition-all duration-500" : ""
						} ${!isHoveredNext ? "scale-100 transition-all duration-500" : ""}`}
					>
						{titlenxt}
					</p>
				</div>
			</div>
		</div>
	);
};

export default LessonNav;
