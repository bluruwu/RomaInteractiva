import React, { useState } from "react";

const Option = ({ optionNumber, selectedOption, handleOptionSelect, option, initialOption }) => {
	// Función para determinar si el botón está activo o no
	const isButtonActive = () => {
		return selectedOption === optionNumber || initialOption === optionNumber;
	};

	return (
		// Botón de opción
		<button
			className={`mb-4 h-10 border  border-gray-500 bg-custom-rojo text-white rounded-3xl shadow-xl transform transition w-96 duration-300 hover:scale-110 ${
				isButtonActive() ? "   bg-custom-doradodark border-0 focus:outline-none scale-110" : ""
			}`}
			onClick={() => handleOptionSelect(optionNumber)}
		>
			{option}
		</button>
	);
};

export default Option;
