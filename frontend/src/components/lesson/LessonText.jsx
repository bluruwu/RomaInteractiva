import React, { useState } from "react";

//Recibe el titulo y parrafos de la leccion, y el boton de cambiar entre modelos
const LessonText = ({ title, paragraphs, dropdownMenu }) => {
	const [currentParagraph, setCurrentParagraph] = useState(0);

	const handleParagraphChange = (index) => {
		setCurrentParagraph(index);
	};

	return (
		<div className="w-full h-[200vw] sm:h-[75vw] md:h-[90vw] lg:h-auto lg:p-12 md:w-1/2 p-6  lg:p-21 relative">
			{/* Titulo de la leccion */}
			<div className="mb-10 text-3xl">
				<p className="font-bold text-center filter drop-shadow-lg">{title}</p>
			</div>

			{/* Párrafo actual */}
			<div className="relative text-justify">
				{paragraphs.map((paragraph, index) => (
					<p
						key={index}
						className={`absolute top-0 left-0 w-full h-full transform ${
							currentParagraph === index
								? "opacity-100 translate-x-0"
								: "-translate-x-full opacity-0"
						} transition-all duration-300`}
					>
						{paragraph}
					</p>
				))}
			</div>

			{/* BOTONES DE LOS PARRAFOS Y BOTON DE CAMBIAR ENTRE MODELOS */}
			<div className="bottom-10 absolute z-10 flex flex-col items-end right-1">
				{/* Botones circulares */}
				<div className="bottom-10 z-10 flex space-x-2 right-1 transform -translate-x-1/2">
					{paragraphs.map((_, index) => (
						<button
							key={index}
							onClick={() => handleParagraphChange(index)}
							className={`rounded-full h-8 w-8 flex items-center justify-center text-base border ${
								currentParagraph === index
									? "bg-[#e69200] text-white "
									: "bg-gray-300 text-gray-600"
							}`}
						>
							{index + 1}
						</button>
					))}
				</div>
				{/* Si se le pasa el dropdownMenu para cambiar entre modelos, lo muestra en el div */}
				<div className="bottom-1 pt-10 pr-8 md:pr-14 flex">{dropdownMenu}</div>
			</div>
		</div>
	);
};

export default LessonText;
