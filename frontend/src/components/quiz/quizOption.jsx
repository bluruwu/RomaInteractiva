import React, { useState } from "react";

const Option = ({ optionNumber, selectedOption, handleOptionSelect, option, initialOption, questionNumber, correctAnswerNumber }) => {
	// Función para determinar si el botón está activo o no
	const isButtonActive = () => {
		return selectedOption === optionNumber || initialOption === optionNumber;
	};

	const hoverScale = () => {
		const quizResuelto = JSON.parse(localStorage.getItem('monarquiaResuelto'));
		if (!quizResuelto) {
			return 'hover:scale-110'
		}
	}

	const enlargeButton = () => {
		const quizResuelto = JSON.parse(localStorage.getItem('monarquiaResuelto'));
		if (isButtonActive() || optionNumber === correctAnswerNumber) {
			if (isButtonActive()) {
				return "border-4 border-gray-500 focus:outline-none scale-110"
			}
			else {
				if (quizResuelto) {
					return " focus:outline-none scale-110"
				}
				else return ""
			}
		}
		else {
			return ""
		}
	}

	const activeColor = () => {
		const quizResuelto = JSON.parse(localStorage.getItem('monarquiaResuelto'));
		if (quizResuelto && optionNumber === correctAnswerNumber) {
			return " bg-green-400"
		}
		else if (isButtonActive()) {
			return "bg-[#e69200]"
		}
		else return "bg-custom-rojo"
	}

	const iconReview = () => {
		const quizResuelto = JSON.parse(localStorage.getItem('monarquiaResuelto'));
		const opcionEscogida = JSON.parse(localStorage.getItem(`monarquiaOpcion${questionNumber}`))
		if (quizResuelto) {
			if (optionNumber === correctAnswerNumber) {
				return <img
					src={process.env.PUBLIC_URL + "icons/check.svg"}
					alt="Check"
					className="h-8 w-8 absolute top-1/2 left-[25rem] transform -translate-y-1/2"
				/>
			}
			else if (opcionEscogida === optionNumber)
				return <img src={process.env.PUBLIC_URL + '/icons/x.svg'} alt="X" className="h-8 w-8 absolute top-1/2 left-[25rem] transform -translate-y-1/2" />
		}
		else return ""
	}

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
