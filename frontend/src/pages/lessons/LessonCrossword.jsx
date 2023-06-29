import React from "react";
import Navbar from "../../utilities/Navbar";
import Image from "../../media/coliseo.jpg"; // Ruta de la imagen
import Crossword from "@jaredreisinger/react-crossword";

const LessonCrossword = () => {
	const navbarHeight = 2; // Altura del Navbar en píxeles

	const crosswordData = {
		across: {
			1: {
				clue: "one plus one",
				answer: "TWO",
				row: 0,
				col: 0,
			},
		},
		down: {
			2: {
				clue: "three minus two",
				answer: "ONE",
				row: 0,
				col: 2,
			},
		},
	};

	return (
		<div className="font-text">
			<Navbar />

			<div className={`flex flex-col md:flex-row h-fit h-[calc(100vh - ${navbarHeight}px)]`}>
				{/* <div className="w-full md:w-1/2 flex flex-col items-center space-y-4"> */}
				<div className="w-full mt-10 mb-10 justify-center items-center">
					<p className="font-bold text-3xl text-center drop-shadow-xl">Crucigrama Romano</p>
					<div className="h-full">
						<Crossword data={crosswordData} />
					</div>
				</div>
				{/* </div> */}
			</div>
		</div>
	);
};

export default LessonCrossword;
