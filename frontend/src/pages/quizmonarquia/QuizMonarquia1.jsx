import React, { useState } from "react";
import Navbar from "../../utilities/Navbar";
import QuizQuestion from "../../components/quiz/QuizQuestion";
import Option from "../../components/quiz/quizOption";
import Swal from "sweetalert2";
import { postQuiz } from "../../conections/requests";
import { INFORMATION } from "../../utilities/monarquiaInfo";
import { useNavigate } from "react-router-dom";

const QuizMonarquia1 = () => {
	const navigate = useNavigate();

	const [selectedOption, setSelectedOption] = useState(null);

	const [questionNumber, setQuestionNumber] = useState(0);

	const setInitialOptions = () => {
		if (JSON.parse(localStorage.getItem("monarquiaResuelto")) === true) {
			let valoresIniciales = [];
			for (let i = 0; i < 5; i++) {
				valoresIniciales[i] = JSON.parse(localStorage.getItem(`monarquiaOpcion${i}`));
			}
			return valoresIniciales;
		} else return [0, 0, 0, 0, 0];
	};

	const [checkedOptions, setCheckedOptions] = useState(setInitialOptions());

	const guardarOpcionMarcada = (index, valor) => {
		const quizResuelto = JSON.parse(localStorage.getItem("monarquiaResuelto"));
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
		const quizResuelto = JSON.parse(localStorage.getItem("monarquiaResuelto"));
		if (!quizResuelto) {
			setSelectedOption(option);
			guardarOpcionMarcada(questionNumber, option);
		}
	};

	const handleClickButton1 = () => {
		guardarOpcionMarcada(questionNumber, selectedOption);
		const quizResuelto = JSON.parse(localStorage.getItem("monarquiaResuelto"));
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
		const quizResuelto = JSON.parse(localStorage.getItem("monarquiaResuelto"));
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
			if (JSON.parse(localStorage.getItem("monarquiaResuelto"))) {
				Swal.fire({
					title: "¿Terminar revisión?",
					showCancelButton: true,
					confirmButtonText: "Sí",
				}).then((result) => {
					/* Leer más sobre isConfirmed, isDenied a continuación */
					if (result.isConfirmed) {
						// Llamada a postQuiz para enviar los datos del quiz al servidor
						const formData = {
							monarquiaOpcion0: localStorage.getItem("monarquiaOpcion0"),
							monarquiaOpcion1: localStorage.getItem("monarquiaOpcion1"),
							monarquiaOpcion2: localStorage.getItem("monarquiaOpcion2"),
							monarquiaOpcion3: localStorage.getItem("monarquiaOpcion3"),
							monarquiaOpcion4: localStorage.getItem("monarquiaOpcion4"),
							aciertosMonarquia: localStorage.getItem("aciertosMonarquia"),
						};

						postQuiz(formData)
							.then((response) => {
								// Manejar la respuesta del servidor si es necesario
								console.log(response);
							})
							.catch((error) => {
								// Manejar el error si ocurre
								console.error(error);
							});

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
						localStorage.setItem(`monarquiaOpcion${i}`, JSON.stringify(checkedOptions[i]));
						if (checkedOptions[i] === INFORMATION[i].respuesta) {
							respuestasCorrectas++;
						}
					}
					localStorage.setItem("aciertosMonarquia", JSON.stringify(respuestasCorrectas));
					localStorage.setItem("monarquiaResuelto", JSON.stringify(true));
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
								navigate("/Quiz_monarquia_1");
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
			if (JSON.parse(localStorage.getItem("monarquiaResuelto"))) {
				return "Finalizar revisión";
			} else return "Finalizar Quiz";
		} else return "Siguiente pregunta";
	};

	// const [formData, setFormData] = useState({
	// 	monarquiaOpcion0: "",
	// 	monarquiaOpcion1: "",
	// 	monarquiaOpcion2: "",
	// 	monarquiaOpcion3: "",
	// 	monarquiaOpcion4: "",
	// 	aciertosMonarquia: "",
	// });

	// const monarquiaOpcion0 = localStorage.getItem("monarquiaOpcion0");
	// const monarquiaOpcion1 = localStorage.getItem("monarquiaOpcion1");
	// const monarquiaOpcion2 = localStorage.getItem("monarquiaOpcion2");
	// const monarquiaOpcion3 = localStorage.getItem("monarquiaOpcion3");
	// const monarquiaOpcion4 = localStorage.getItem("monarquiaOpcion4");
	// const aciertosMonarquia = localStorage.getItem("aciertosMonarquia");

	// setFormData({
	// 	monarquiaOpcion0: monarquiaOpcion0,
	// 	monarquiaOpcion1: monarquiaOpcion1,
	// 	monarquiaOpcion2: monarquiaOpcion2,
	// 	monarquiaOpcion3: monarquiaOpcion3,
	// 	monarquiaOpcion4: monarquiaOpcion4,
	// 	aciertosMonarquia: aciertosMonarquia,
	// });

	const handleSubmit = (event) => {
		event.preventDefault(); // Prevenir comportamiento de envío predeterminado

		const formData = {
			monarquiaOpcion0: localStorage.getItem("monarquiaOpcion0"),
			monarquiaOpcion1: localStorage.getItem("monarquiaOpcion1"),
			monarquiaOpcion2: localStorage.getItem("monarquiaOpcion2"),
			monarquiaOpcion3: localStorage.getItem("monarquiaOpcion3"),
			monarquiaOpcion4: localStorage.getItem("monarquiaOpcion4"),
			aciertosMonarquia: localStorage.getItem("aciertosMonarquia"),
		};
		console.log(formData); // Imprimir los datos del formulario en la consola

		const myresponse = async () => {
			const req_succesful = await postQuiz(formData); // Realizar solicitud de inicio de sesión utilizando los datos del formulario
			console.log(req_succesful);
			if (req_succesful === "Inicio de sesión exitoso") {
				// Si las credenciales son correctas, mostrar una alerta de éxito y navegar a la página de inicio ("/home")
				Swal.fire("Welcome!", "You have succesfully been logged!", "success");
				navigate("/home");
			} else {
				// Si las credenciales son incorrectas, mostrar una alerta de error con el mensaje de error devuelto por la solicitud
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: req_succesful,
				});
			}
		};
		myresponse(); // Ejecutar la función asíncrona myresponse
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
				/>
				<Option
					option={INFORMATION[questionNumber].option2}
					selectedOption={selectedOption}
					handleOptionSelect={handleOptionSelect}
					optionNumber={2}
					initialOption={checkedOptions[questionNumber]}
					questionNumber={questionNumber}
					correctAnswerNumber={INFORMATION[questionNumber].respuesta}
				/>
				<Option
					option={INFORMATION[questionNumber].option3}
					selectedOption={selectedOption}
					handleOptionSelect={handleOptionSelect}
					optionNumber={3}
					initialOption={checkedOptions[questionNumber]}
					questionNumber={questionNumber}
					correctAnswerNumber={INFORMATION[questionNumber].respuesta}
				/>
				<Option
					option={INFORMATION[questionNumber].option4}
					selectedOption={selectedOption}
					handleOptionSelect={handleOptionSelect}
					optionNumber={4}
					initialOption={checkedOptions[questionNumber]}
					questionNumber={questionNumber}
					correctAnswerNumber={INFORMATION[questionNumber].respuesta}
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

export default QuizMonarquia1;
