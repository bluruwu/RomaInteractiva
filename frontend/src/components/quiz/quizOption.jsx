import React, { useState } from "react";

const Option = ({
	optionNumber,
	selectedOption,
	handleOptionSelect,
	option,
	initialOption,
	questionNumber,
	correctAnswerNumber,
	resolved,
	savedSelection,
}) => {
	// Función para determinar si el botón está activo o no
	const isButtonActive = () => {
		return selectedOption === optionNumber || initialOption === optionNumber;
	};

	// Función para aplicar una escala al hacer hover en el botón
	const hoverScale = () => {
		if (!resolved) {
			return "hover:scale-110";
		}
	};

	// Función para ampliar el botón en ciertas circunstancias
	const enlargeButton = () => {
		if (isButtonActive() || optionNumber === correctAnswerNumber) {
			if (isButtonActive()) {
				return "border-4 border-gray-700 focus:outline-none scale-110";
			} else {
				if (resolved) {
					return " focus:outline-none scale-110";
				} else return "";
			}
		} else {
			return "";
		}
	};

	// Función para determinar el color activo del botón
	const activeColor = () => {
		if (resolved && optionNumber === correctAnswerNumber) {
			return " bg-green-400";
		} else if (isButtonActive()) {
			return "bg-[#e69200]";
		} else return "bg-custom-rojo";
	};
	
	// Función para mostrar un icono de revisión en el botón
	const iconReview = () => {
		if (resolved) {
			if (optionNumber === correctAnswerNumber) {
				return (
					<img
						src={process.env.PUBLIC_URL + "icons/check.svg"}
						alt="Check"
						className="h-8 w-8 absolute top-1/2 left-[25rem] transform -translate-y-1/2"
					/>
				);
			} else if (savedSelection === optionNumber)
				return (
					<img
						src={process.env.PUBLIC_URL + "/icons/x.svg"}
						alt="X"
						className="h-8 w-8 absolute top-1/2 left-[25rem] transform -translate-y-1/2"
					/>
				);
		} else return "";
	};

	return (
		// Botón de opción
		<button
			className={`mb-4 h-10 border relative text-white rounded-3xl shadow-xl transform transition w-96 duration-300 ${hoverScale()} ${enlargeButton()}
			${activeColor()}`}
			onClick={() => handleOptionSelect(optionNumber)}
		>
			{iconReview()}
			{option}
		</button>
	);
};

export default Option;
