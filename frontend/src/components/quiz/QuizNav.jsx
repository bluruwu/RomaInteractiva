import React from "react";
import { useNavigate } from "react-router-dom";

// Componente de barra de navegación para el cuestionario
// Recibe las siguientes propiedades:
// - buttonbef: Texto del botón anterior
// - buttonnxt: Texto del botón siguiente
// - urlbef: URL de la página anterior
// - urlnxt: URL de la siguiente página
const QuizNav = ({ buttonbef, buttonnxt, urlbef, urlnxt }) => {
	const navigate = useNavigate();

	return (
		// Contenedor de los botones
		<div className="flex flex-col md:flex-row justify-between mx-auto px-8 md:px-80">
			{/* Botón "Anterior" */}
			<button
				className="max-w-80 mb-4 md:mb-0 h-8 bg-custom-doradonormal rounded-xl font-bold drop-shadow-xl hover:bg-custom-doradodark shadow-md transform transition duration-300 hover:scale-110"
				onClick={() => navigate(urlbef)}
				style={{ minWidth: "15rem" }}
			>
				{buttonbef}
			</button>

			{/* Botón "Siguiente" */}
			<button
				// className="mb-4 md:mb-0 h-8 bg-custom-doradonormal rounded-xl font-bold drop-shadow-xl md:hover:bg-custom-doradodark shadow-md md:transform md:transition md:duration-300 md:hover:scale-110"
				style={{ minWidth: "15rem" }}
				onClick={() => navigate(urlnxt)}
			>
				{buttonnxt}
			</button>
		</div>
	);
};

export default QuizNav;
