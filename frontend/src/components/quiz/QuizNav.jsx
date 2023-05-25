import React from "react";
import { useNavigate } from "react-router-dom";

//Div con los 4 botones de las opciones de respuesta

const QuizNav = ({ buttonbef, buttonnxt, urlbef, urlnxt }) => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col md:flex-row justify-between mx-auto px-8 md:px-80">
			<button
				className="mb-4 md:mb-0 h-8 bg-custom-dorado rounded-xl font-bold drop-shadow-xl hover:bg-custom-doradodark shadow-md transform transition duration-300 hover:scale-105"
				onClick={() => navigate(urlbef)}
				style={{ minWidth: "15rem" }}
			>
				{buttonbef}
			</button>
			<button
				className="mb-4 md:mb-0 h-8 bg-custom-dorado rounded-xl font-bold drop-shadow-xl hover:bg-custom-doradodark shadow-md transform transition duration-300 hover:scale-105"
				style={{ minWidth: "15rem" }}
				onClick={() => navigate(urlnxt)}
			>
				{buttonnxt}
			</button>
		</div>
	);
};

export default QuizNav;
