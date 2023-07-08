import React, { useState } from "react";
import Navbar from "../../utilities/Navbar";
import QuizQuestion from "../../components/quiz/QuizQuestion";
import Option from "../../components/quiz/quizOption";
import Swal from "sweetalert2";
import { postQuiz } from "../../conections/requests";
import { INFORMATION } from "../../utilities/republicaInfo";
import { useNavigate } from "react-router-dom";
import gifNyanCat from "../../media/nyan-cat.gif"; // Ruta de la imagen
import gifrepublica from "../../media/logros/gifrepublica.gif";
import { updateUserBecauseOfNewAchivement } from "../../conections/requests";

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
					customClass: {
						container: "font-text", // Cambiar la fuente del título
					},
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
					customClass: {
						container: "font-text", // Cambiar la fuente del título
					},
				}).then((result) => {
					let respuestasCorrectas = 0;
					for (let i = 0; i < 5; i++) {
						localStorage.setItem(`republicaOpcion${i}`, JSON.stringify(checkedOptions[i]));
						if (checkedOptions[i] === INFORMATION[i].respuesta) {
							respuestasCorrectas++;
						}
					}
					localStorage.setItem("republicaAciertos", JSON.stringify(respuestasCorrectas));
					localStorage.setItem("republicaResuelto", JSON.stringify(true));

					//Objeto para enviar respuestas al backend
					const formData = {
						id_quiz: JSON.parse("2"), //El id_quiz=2 pertence a republica
						respuesta0: JSON.parse(localStorage.getItem("republicaOpcion0")),
						respuesta1: JSON.parse(localStorage.getItem("republicaOpcion1")),
						respuesta2: JSON.parse(localStorage.getItem("republicaOpcion2")),
						respuesta3: JSON.parse(localStorage.getItem("republicaOpcion3")),
						respuesta4: JSON.parse(localStorage.getItem("republicaOpcion4")),
						calificacion: JSON.parse(localStorage.getItem("republicaAciertos")),
					};

					console.log(formData);

					console.log("el token es:", token);

					if (token) {
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
					} else {
						// Manejar el caso en el que no haya token disponible, usuario sin logear
						console.log("El usuario no esta logeado, calificaciones no guardadas en base de datos");
					}

					/* Leer más sobre isConfirmed, isDenied a continuación `Tu puntaje fue ${respuestasCorrectas}/5`*/
					if (result.isConfirmed) {













						Swal.fire({
							title: `Tu puntaje fue ${respuestasCorrectas}/5`,
							showDenyButton: true,
							confirmButtonText: "Revisar respuestas",
							denyButtonText: `Volver a home`,
							denyButtonColor: "#3085d6",
							customClass: {
								container: "font-text", // Cambiar la fuente del título
							},
						}).then(async (result) => {
							//logro se da si y solo si se completa un quiz en 5 respuestas correctas
							if ((respuestasCorrectas >= 3) && (result.isConfirmed || result.isDenied)) {//CAMBIAR EL TRUE, POR: respuestasCorrectas == 5
								//aumentar el localStorage en requests y no aqui
								//en localStorage aumentar la exp y el nivel
								//aumentar experiencia (aumentar nivel de una vez)
								//se usa el valor de la experiencia en el localstorage
								const updateRes = await updateUserBecauseOfNewAchivement('logro_republica', token);
								Swal.fire({
									title: 'Vaya! Has aumentado tu experiencia en 500xp!!',
									width: 600,
									padding: '3em',
									color: '#716add',
									html: `<div class="swal2-content-container">
												  <img src="${gifrepublica}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 100%;" />
												  <p style="text-align: left; font-family: 'Merryweather', sans-serif; font-size: 12px; color: #000000; margin-top: 10px;margin-left: 30px;">Logro: Who better to rule us, than you.</p>
											   </div>`,
									customClass: {
										container: "font-text",
									},
									backdrop: `
										  rgba(0,0,123,0.4)
										  url("${gifNyanCat}")
										  left top
										  no-repeat
										`,
									timer: 20000 // Cerrar automáticamente después de 20 segundos (20000 milisegundos)
								}).then((result) => {

									//if (updateRes === "Se produjo un cambio de nivel correctamente") {
									const nuevoNivel = JSON.parse(localStorage.getItem("nivel"))
									Swal.fire({
										title: `WoW! Has llegado al nivel ${nuevoNivel}!!`,
										width: 600,
										padding: '3em',
										color: '#716add',
										customClass: {
											container: "font-text",
										},
										backdrop: `
											  rgba(0,0,123,0.4)
											  url("${gifNyanCat}")
											  left top
											  no-repeat
											`
									}).then((result) => {

									});
									//}
								});

							}
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

			<Navbar inQuiz={true}/>
			<QuizQuestion 
				question={INFORMATION[questionNumber].title} 

				preguntaSeleccionada={questionNumber}
				quiz={2}
				quizResuelto={JSON.parse(localStorage.getItem("republicaResuelto"))}
				respuesta1={checkedOptions[0]}
				respuesta2={checkedOptions[1]}
				respuesta3={checkedOptions[2]}
				respuesta4={checkedOptions[3]}
				respuesta5={checkedOptions[4]}
			/>
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
