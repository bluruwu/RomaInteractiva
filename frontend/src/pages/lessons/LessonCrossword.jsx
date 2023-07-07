import React from "react";
import Navbar from "../../utilities/Navbar";
import Crossword from "@jaredreisinger/react-crossword";
import Swal from "sweetalert2";

const LessonCrossword = () => {
	// Datos del crucigrama
	const crosswordData = {
		across: {
			1: {
				clue: "Tipo de casa romana",
				answer: "DOMUS",
				row: 2,
				col: 5,
			},
			2: {
				clue: "La legendaria espada romana",
				answer: "GLADIUS",
				row: 4,
				col: 1,
			},
			3: {
				clue: "También conocido como Anfiteatro Flavio",
				answer: "COLISEO",
				row: 8,
				col: 0,
			},
		},
		down: {
			4: {
				clue: "General cartaginés",
				answer: "ANIBAL",
				row: 0,
				col: 3,
			},
			5: {
				clue: "Primer rey de Roma",
				answer: "ROMULO",
				row: 1,
				col: 6,
			},
			6: {
				clue: "Primer emperador del Imperio Romano",
				answer: "AUGUSTO",
				row: 2,
				col: 1,
			},
		},
	};

	//Cuando el usuario gana
	const handleCorrect = () => {
		Swal.fire({
			title: "🧠 ¡Ganaste! 🎉",
			text: `Has resuelto correctamente el crucigrama`,
			icon: "success",
			showConfirmButton: true,
			confirmButtonColor: "#03ac13",
			customClass: {
				container: "font-text", // Cambiar la fuente del título
			},
		});
	};

	return (
		<div className="font-text">
			<Navbar />

			<div className=" mt-10 mb-10 justify-center items-center">
				{/* Titulo y descripcion */}
				<div className="w-full">
					<p className="font-bold text-3xl text-center drop-shadow-xl pb-4">Crucigrama Romano</p>
					<p className=" text-center">
						A la derecha encontrarás las preguntas divididas en horizontal (ACROSS) y vertical
						(DOWN).
					</p>
					<p className=" text-center drop-shadow-xl pb-8">
						Selecciona una de ellas para resolverla.
					</p>
				</div>

				{/* Mostrar crucigrama */}
				<div className="w-full h-2/4 flex justify-center">
					<div className="flex mx-auto w-2/4 ">
						{/* Se le envia los datos del crucigrama y el funcionamiento cuando se resuelve correctamente el crucigrama */}
						<Crossword data={crosswordData} onCrosswordCorrect={handleCorrect} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LessonCrossword;
