import React, { useState } from "react";
import Navbar from "../../utilities/Navbar";
import QuizQuestion from "../../components/quiz/QuizQuestion";
import Option from "../../components/quiz/quizOption";
import Swal from "sweetalert2";
import { INFORMATION } from "../../utilities/monarquiaInfo";
import { useNavigate } from "react-router-dom";

const QuizMonarquia1 = () => {
	const navigate = useNavigate();

	const [selectedOption, setSelectedOption] = useState(null);

	const [questionNumber, setQuestionNumber] = useState(0);

	const [checkedOptions, setCheckedOptions] = useState([0, 0, 0, 0, 0]);

	const guardarOpcionMarcada = (index, valor) => {
		// Clonar el arreglo existente
		const arregloModificado = [...checkedOptions];

		// Modificar el estado específico
		arregloModificado[index] = valor;

		// Actualizar el estado con la nueva copia del arreglo modificado
		setCheckedOptions(arregloModificado);
	};

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
		guardarOpcionMarcada(questionNumber, option);
	};

	const handleClickButton1 = () => {
		guardarOpcionMarcada(questionNumber, selectedOption);
		if (questionNumber != 0) {
			setSelectedOption(checkedOptions[questionNumber - 1]);

			setQuestionNumber(questionNumber - 1);
		} else {
			navigate(INFORMATION[questionNumber].urlbef);
		}
	};

	const handleClickButton2 = () => {
		guardarOpcionMarcada(questionNumber, selectedOption);
		if (questionNumber != 4) {
			if (checkedOptions[questionNumber + 1] == 0) {
				setSelectedOption(0);
			} else {
				setSelectedOption(checkedOptions[questionNumber + 1]);
			}
			setQuestionNumber(questionNumber + 1);
		} else {
			Swal.fire({
				title: "¿Quieres terminar el intento?",
				showCancelButton: true,
				confirmButtonText: "Sí",
			}).then((result) => {
				let respuestasCorrectas = 0;
				for (let i = 0; i < 5; i++) {
					if (checkedOptions[i] === INFORMATION[i].respuesta) {
						respuestasCorrectas++;
					}
				}
				/* Leer más sobre isConfirmed, isDenied a continuación */
				if (result.isConfirmed) {
					Swal.fire(`Tu puntaje fue ${respuestasCorrectas}/5`);
					navigate(INFORMATION[questionNumber].urlnxt);
				}
			});
		}
	};

	return (
		<div className="font-text">
			<Navbar />
			<QuizQuestion question={INFORMATION[questionNumber].title} />
			<div className="flex flex-col items-center mb-12">
				<Option
					option={INFORMATION[questionNumber].option1}
					selectedOption={selectedOption}
					handleOptionSelect={handleOptionSelect}
					optionNumber={1}
					initialOption={checkedOptions[questionNumber]}
				/>
				<Option
					option={INFORMATION[questionNumber].option2}
					selectedOption={selectedOption}
					handleOptionSelect={handleOptionSelect}
					optionNumber={2}
					initialOption={checkedOptions[questionNumber]}
				/>
				<Option
					option={INFORMATION[questionNumber].option3}
					selectedOption={selectedOption}
					handleOptionSelect={handleOptionSelect}
					optionNumber={3}
					initialOption={checkedOptions[questionNumber]}
				/>
				<Option
					option={INFORMATION[questionNumber].option4}
					selectedOption={selectedOption}
					handleOptionSelect={handleOptionSelect}
					optionNumber={4}
					initialOption={checkedOptions[questionNumber]}
				/>
			</div>
			<div className="flex flex-col md:flex-row justify-between mx-auto px-8 md:px-80">
				<button
					className="mb-4 md:mb-0 h-8 bg-custom-doradonormal rounded-xl font-bold drop-shadow-xl hover:bg-custom-doradodark shadow-md transform transition duration-300 hover:scale-105"
					onClick={handleClickButton1}
					style={{ minWidth: "15rem" }}
				>
					{questionNumber === 0 ? "Volver a lección" : "Pregunta anterior"}
				</button>
				<button
					className="mb-4 md:mb-0 h-8 bg-custom-doradonormal rounded-xl font-bold drop-shadow-xl hover:bg-custom-doradodark shadow-md transform transition duration-300 hover:scale-105"
					style={{ minWidth: "15rem" }}
					onClick={handleClickButton2}
				>
					{questionNumber === 4 ? "Finalizar Quiz" : "Siguiente pregunta"}
				</button>
			</div>
		</div>
	);
};

export default QuizMonarquia1;
