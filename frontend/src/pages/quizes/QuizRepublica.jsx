import React, { useState } from "react";
import Navbar from "../../utilities/Navbar";
import QuizQuestion from "../../components/quiz/QuizQuestion";
import Option from "../../components/quiz/quizOption";
import Swal from "sweetalert2";
import { postQuiz } from "../../conections/requests";
import { INFORMATION } from "../../utilities/republicaInfo";
import { useNavigate } from "react-router-dom";

const QuizRepublica = () => {
	const navigate = useNavigate();

	const [selectedOption, setSelectedOption] = useState(null);

	const [questionNumber, setQuestionNumber] = useState(0);

	//Obtener token de la sesion
	const token = localStorage.getItem("token");

	const setInitialOptions = () => {
		if (JSON.parse(localStorage.getItem("republicaResuelto")) === true) {
			let valoresIniciales = [];
			for (let i = 0; i < 5; i++) {
				valoresIniciales[i] = JSON.parse(localStorage.getItem(`republicaOpcion${i}`));
			}
			return valoresIniciales;
		} else return [0, 0, 0, 0, 0];
	};

	const [checkedOptions, setCheckedOptions] = useState(setInitialOptions());

	const guardarOpcionMarcada = (index, valor) => {
		const quizResuelto = JSON.parse(localStorage.getItem("republicaResuelto"));
		if (!quizResuelto) {
			// Clonar el arreglo existente
			const arregloModificado = [...checkedOptions];

			// Modificar el estado específico
			arregloModificado[index] = valor;

			// Actualizar el estado con la nueva copia del arreglo modificado
			setCheckedOptions(arregloModificado);
		}
	};

	const handleOptionSelect = (option) => {
		const quizResuelto = JSON.parse(localStorage.getItem("republicaResuelto"));
		if (!quizResuelto) {
			setSelectedOption(option);
			guardarOpcionMarcada(questionNumber, option);
		}
	};

	const handleClickButton1 = () => {
		guardarOpcionMarcada(questionNumber, selectedOption);
		const quizResuelto = JSON.parse(localStorage.getItem("republicaResuelto"));
		if (questionNumber != 0) {
			if (!quizResuelto) {
				setSelectedOption(checkedOptions[questionNumber - 1]);
			}
			setQuestionNumber(questionNumber - 1);
		} else {
			navigate(INFORMATION[questionNumber].urlbef);
		}
	};

	const handleClickButton2 = () => {
		guardarOpcionMarcada(questionNumber, selectedOption);
		const quizResuelto = JSON.parse(localStorage.getItem("republicaResuelto"));
		if (questionNumber != 4) {
			if (!quizResuelto) {
				if (checkedOptions[questionNumber + 1] == 0) {
					setSelectedOption(0);
				} else {
					setSelectedOption(checkedOptions[questionNumber + 1]);
				}
			}
			setQuestionNumber(questionNumber + 1);
		} else {
			if (JSON.parse(localStorage.getItem("republicaResuelto"))) {
				Swal.fire({
					title: "¿Terminar revisión?",
					showCancelButton: true,
					confirmButtonText: "Sí",
				}).then((result) => {
					/* Leer más sobre isConfirmed, isDenied a continuación */
					if (result.isConfirmed) {
						navigate(INFORMATION[questionNumber].urlnxt);
					}
				});
			} else {
				Swal.fire({
					title: "¿Quieres terminar el intento?",
					showCancelButton: true,
					confirmButtonText: "Sí",
				}).then((result) => {
					let respuestasCorrectas = 0;
					for (let i = 0; i < 5; i++) {
						localStorage.setItem(`republicaOpcion${i}`, JSON.stringify(checkedOptions[i]));
						if (checkedOptions[i] === INFORMATION[i].respuesta) {
							respuestasCorrectas++;
						}
					}
					localStorage.setItem("aciertosRepublica", JSON.stringify(respuestasCorrectas));
					localStorage.setItem("republicaResuelto", JSON.stringify(true));

					//Objeto para enviar respuestas al backend
					const formData = {
						id_quiz: JSON.parse("2"), //El id_quiz=2 pertence a republica
						respuesta0: JSON.parse(localStorage.getItem("republicaOpcion0")),
						respuesta1: JSON.parse(localStorage.getItem("republicaOpcion1")),
						respuesta2: JSON.parse(localStorage.getItem("republicaOpcion2")),
						respuesta3: JSON.parse(localStorage.getItem("republicaOpcion3")),
						respuesta4: JSON.parse(localStorage.getItem("republicaOpcion4")),
						calificacion: JSON.parse(localStorage.getItem("aciertosRepublica")),
					};

					console.log(formData);

					//Agregar token
					postQuiz(formData, token)
						.then((response) => {
							// Manejar la respuesta del servidor si es necesario
							console.log(response);
						})
						.catch((error) => {
							// Manejar el error si ocurre
							console.error(error);
						});

					/* Leer más sobre isConfirmed, isDenied a continuación `Tu puntaje fue ${respuestasCorrectas}/5`*/
					if (result.isConfirmed) {
						Swal.fire({
							title: `Tu puntaje fue ${respuestasCorrectas}/5`,
							showDenyButton: true,
							confirmButtonText: "Revisar respuestas",
							denyButtonText: `Volver a home`,
							denyButtonColor: "#3085d6",
						}).then((result) => {
							/* Read more about isConfirmed, isDenied below */
							if (result.isConfirmed) {
								setQuestionNumber(0);
								setSelectedOption(null);
								navigate("/Quiz_Republica");
							} else if (result.isDenied) {
								navigate(INFORMATION[questionNumber].urlnxt);
							}
						});
					}
				});
			}
		}
	};

	const button2Text = () => {
		if (questionNumber === 4) {
			if (JSON.parse(localStorage.getItem("republicaResuelto"))) {
				return "Finalizar revisión";
			} else return "Finalizar Quiz";
		} else return "Siguiente pregunta";
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
					questionNumber={questionNumber}
					correctAnswerNumber={INFORMATION[questionNumber].respuesta}
					resolved={JSON.parse(localStorage.getItem("republicaResuelto"))}
					savedSelection={JSON.parse(localStorage.getItem(`republicaOpcion${questionNumber}`))}
				/>
				<Option
					option={INFORMATION[questionNumber].option2}
					selectedOption={selectedOption}
					handleOptionSelect={handleOptionSelect}
					optionNumber={2}
					initialOption={checkedOptions[questionNumber]}
					questionNumber={questionNumber}
					correctAnswerNumber={INFORMATION[questionNumber].respuesta}
					resolved={JSON.parse(localStorage.getItem("republicaResuelto"))}
					savedSelection={JSON.parse(localStorage.getItem(`republicaOpcion${questionNumber}`))}
				/>
				<Option
					option={INFORMATION[questionNumber].option3}
					selectedOption={selectedOption}
					handleOptionSelect={handleOptionSelect}
					optionNumber={3}
					initialOption={checkedOptions[questionNumber]}
					questionNumber={questionNumber}
					correctAnswerNumber={INFORMATION[questionNumber].respuesta}
					resolved={JSON.parse(localStorage.getItem("republicaResuelto"))}
					savedSelection={JSON.parse(localStorage.getItem(`republicaOpcion${questionNumber}`))}
				/>
				<Option
					option={INFORMATION[questionNumber].option4}
					selectedOption={selectedOption}
					handleOptionSelect={handleOptionSelect}
					optionNumber={4}
					initialOption={checkedOptions[questionNumber]}
					questionNumber={questionNumber}
					correctAnswerNumber={INFORMATION[questionNumber].respuesta}
					resolved={JSON.parse(localStorage.getItem("republicaResuelto"))}
					savedSelection={JSON.parse(localStorage.getItem(`republicaOpcion${questionNumber}`))}
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
					{button2Text()}
				</button>
			</div>
		</div>
	);
};

export default QuizRepublica;
