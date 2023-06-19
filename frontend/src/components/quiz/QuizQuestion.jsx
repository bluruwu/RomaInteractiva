import React from "react";
import HomeButton from "../../utilities/HomeButton";

/* 
Componente de pregunta del cuestionario.
Recibe la siguiente propiedad:
- question: Texto de la pregunta a mostrar
*/

const QuizQuestion = ({ question }) => {
	return (
		// Contenedor de la pregunta y el botón de inicio
		<div className="grid grid-cols-3 justify-center items-center">
			{/* Botón de inicio */}
			<div className="p-14">
				<HomeButton />
			</div>

			{/* Título de la pregunta */}
			<div className="flex-grow text-3xl text-center">
				<p className="font-bold filter drop-shadow-lg">{question}</p>
			</div>

			{/* Espacio en blanco */}
			<div style={{ width: "200px", height: "100px" }}></div>
		</div>
	);
};

export default QuizQuestion;
