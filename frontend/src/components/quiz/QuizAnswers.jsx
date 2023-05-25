import React from "react";

//Div con los 4 botones de las opciones de respuesta

const QuizAnswers = ({ firstoption, secondoption, thirdoption, fourthoption }) => {
	return (
		<div className="flex flex-col  items-center mb-12">
			<button
				className="mb-4 h-10 border border-gray-500 bg-custom-rojo text-white  rounded-3xl shadow-xl transform transition duration-300 hover:scale-105"
				style={{ minWidth: "25rem" }}
			>
				{firstoption}
			</button>
			<button
				className="mb-4 h-10 border border-gray-500 bg-custom-rojo text-white  rounded-3xl shadow-xl transform transition duration-300 hover:scale-105"
				style={{ minWidth: "25rem" }}
			>
				{secondoption}
			</button>
			<button
				className="mb-4 h-10 border border-gray-500 bg-custom-rojo text-white  rounded-3xl shadow-xl transform transition duration-300 hover:scale-105"
				style={{ minWidth: "25rem" }}
			>
				{thirdoption}
			</button>
			<button
				className="mb-4 h-10 border border-gray-500 bg-custom-rojo text-white  rounded-3xl shadow-xl transform transition duration-300 hover:scale-105 "
				style={{ minWidth: "25rem" }}
			>
				{fourthoption}
			</button>
		</div>
	);
};

export default QuizAnswers;
