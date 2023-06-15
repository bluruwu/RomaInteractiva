import React from "react";
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
					text: "¿deseas hacer revisión de las respuestas?",
					icon: "warning",
					showDenyButton: true,
					showCancelButton: true,
					confirmButtonText: "Sip",
					denyButtonText: `Volver a home`,
					denyButtonColor: "#3085d6",
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

	return (
		<div className="flex flex-col md:flex-row bg-red-100">
			{/* Leccion anterior */}
			<div
				className="w-full md:w-1/2 h-32 relative cursor-pointer"
				onClick={() => navigate(urlbef)}
			>
				<img
					src={require(`../../media/${mediabef}`)} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
					alt="Anterior leccion"
					className="block w-full h-full object-cover"
				/>
				{/* Opacidad de la imagen */}
				<div className="absolute inset-0 bg-black opacity-50"></div>

				{/* Texto que aparece sobre la imagen */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
					<p className="text-lg font-bold text-white">Anterior</p>
					<p className="text-lg font-bold text-white">{titlebef}</p>
				</div>
			</div>

			{/* Leccion siguiente */}
			<div className="w-full md:w-1/2 h-32 relative cursor-pointer" onClick={quizMessage}>
				<img
					src={require(`../../media/${medianxt}`)} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
					alt="Siguiente leccion"
					className="block w-full h-full object-cover"
				/>
				{/* Opacidad de la imagen */}
				<div className="absolute inset-0 bg-black opacity-50"></div>

				{/* Texto que aparece sobre la imagen */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
					<p className="text-lg font-bold text-white">Siguiente</p>
					<p className="text-lg font-bold text-white">{titlenxt}</p>
				</div>
			</div>
		</div>
	);
};

export default LessonNav;
