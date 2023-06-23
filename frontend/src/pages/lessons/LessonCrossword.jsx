import React from "react";
import Navbar from "../../utilities/Navbar";
import Crossword from "@jaredreisinger/react-crossword";
import styled, { ThemeProvider } from "styled-components";
import HomeButton from "../../utilities/HomeButton";

const LessonCrossword = () => {
	const theme = {
		columnBreakpoint: "768px",
		gridBackground: "rgb(255, 0, 255)",
		cellBackground: "rgb(255, 255, 255)",
		cellBorder: "rgb(0, 0, 0)",
		textColor: "rgb(0, 0, 0)",
		numberColor: "rgba(0, 0, 0, 0.25)",
		focusBackground: "rgb(255, 255, 0)",
		highlightBackground: "rgb(255, 255, 204)",
	};

	const data = {
		across: [
			{
				clue: "Julio",
				answer: "JULIO",
				row: 1,
				col: 0,
			},
			{
				clue: "Tarquinius",
				answer: "TARQUINIUS",
				row: 5,
				col: 1,
			},
			// Agrega más objetos según sea necesario para las palabras en horizontal
		],
		down: [
			{
				clue: "Augusto",
				answer: "AUGUSTO",
				row: 0,
				col: 1,
			},
			{
				clue: "Romulo",
				answer: "ROMULO",
				row: 5,
				col: 3,
			},
			// Agrega más objetos según sea necesario para las palabras en vertical
		],
	};

	const handleCrosswordCorrect = (isCorrect) => {
		// Handle crossword correct event
		if (isCorrect) {
			alert("Congratulations! The crossword is completely correct!");
		} else {
			alert("The crossword is no longer correct.");
		}
	};

	const onCrosswordCorrect = (correct, total) => {
		console.log(`Correct: ${correct}, Total: ${total}`);
	};
	return (
		<div className="font-text">
			<Navbar />
			{/* Parte superior con HomeButton y titulo */}
			<div className="grid grid-cols-3 justify-center items-center">
				{/* Botón de inicio */}
				<div className="p-14">
					<HomeButton />
				</div>

				{/* Título de la pregunta */}
				<div className="flex-grow text-3xl text-center">
					<p className="font-bold filter drop-shadow-lg">Crucigrama Romano</p>
				</div>

				{/* Espacio en blanco */}
				<div style={{ width: "200px", height: "50px" }}></div>
			</div>
			{/* Crucigrama */}
			<div className="flex flex-col items-center justify-center mb-8">
				<div className="flex flex-row md:flex-row bg-custom-doradodark" style={{ width: "50rem" }}>
					{" "}
					{/* Div del contenido + modelo */}
					{/* Componente de texto de la lección */}
					<ThemeProvider theme={theme}>
						<Crossword data={data} />
					</ThemeProvider>
				</div>
			</div>
			{/* Navegación entre lecciones */}
		</div>
	);
};

export default LessonCrossword;
