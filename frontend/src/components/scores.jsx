"use client";
import React from "react";
import { useState } from "react";
import Button from "./scoreQuizButton";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ExitButton from "../components/exitButton";

export default function Modal() {
	const navigate = useNavigate();

	const [showModal, setShowModal] = useState(false);

	const getText = (quiz) => {
		if (quiz == 0) {
			const quizResuelto = JSON.parse(localStorage.getItem("monarquiaResuelto"));
			if (quizResuelto) {
				return (
					<span className="flex items-center justify-between px-4">
						<strong>Monarquía:</strong>
						<span className="text-right">
							{JSON.parse(localStorage.getItem("monarquiaAciertos"))}/5 aciertos
						</span>
					</span>
				);
			} else
				return (
					<span className="flex items-center justify-between px-4">
						<strong>Monarquía:</strong>
						<span className="text-right">Sin resolver</span>
					</span>
				);
		} else if (quiz == 1) {
			const quizResuelto = JSON.parse(localStorage.getItem("republicaResuelto"));
			if (quizResuelto) {
				return (
					<span className="flex items-center justify-between px-4">
						<strong>República:</strong>
						<span className="text-right">
							{JSON.parse(localStorage.getItem("republicaAciertos"))}/5 aciertos
						</span>
					</span>
				);
			} else
				return (
					<span className="flex items-center justify-between px-4">
						<strong>República:</strong>
						<span className="text-right">Sin resolver</span>
					</span>
				);
		} else if (quiz == 2) {
			const quizResuelto = JSON.parse(localStorage.getItem("personajesResuelto"));
			if (quizResuelto) {
				return (
					<span className="flex items-center justify-between px-4">
						<strong>Personajes:</strong>
						<span className="text-right">
							{JSON.parse(localStorage.getItem("personajesAciertos"))}/5 aciertos
						</span>
					</span>
				);
			} else
				return (
					<span className="flex items-center justify-between px-4">
						<strong>Personajes:</strong>
						<span className="text-right">Sin resolver</span>
					</span>
				);
		} else if (quiz == 3) {
		} else if (quiz == 4) {
		} else if (quiz == 5) {
		} else return null;
	};

	const getMessage = (quizDone, urlQuiz = "", urlLeccion = "") => {
		if (quizDone) {
			Swal.fire({
				title: "¿Deseas hacer revisión del intento?",
				showCancelButton: true,
				cancelButtonText: "Cancelar",
				confirmButtonText: "Sí",
				customClass: {
					container: "font-text", // Cambiar la fuente del título
				},
			}).then((result) => {
				/* Read more about isConfirmed, isDenied below */
				if (result.isConfirmed) {
					navigate(urlQuiz);
				}
			});
		} else {
			Swal.fire({
				title: "¿Hacer Quiz?",
				showCancelButton: true,
				cancelButtonText: "Cancelar",
				confirmButtonText: "Sí",
				customClass: {
					container: "font-text", // Cambiar la fuente del título
				},
			}).then((result) => {
				/* Read more about isConfirmed, isDenied below */
				if (result.isConfirmed) {
					Swal.fire({
						title: "Solo tienes un intento, asegurate de haber visto la lección",
						icon: "warning",
						showDenyButton: true,
						showCancelButton: true,
						confirmButtonText: "Hacer quiz ahora",
						denyButtonText: `Ir a la lección`,
						cancelButtonText: "Cancelar",
						denyButtonColor: "#3085d6",
						customClass: {
							container: "font-text", // Cambiar la fuente del título
						},
					}).then((result) => {
						/* Read more about isConfirmed, isDenied below */
						if (result.isConfirmed) {
							navigate(urlQuiz);
						} else if (result.isDenied) {
							navigate(urlLeccion);
						}
					});
				}
			});
		}
	};

	const getScore = (quiz) => {
		if (quiz == 0) {
			//Monarquia
			const quizResuelto = JSON.parse(localStorage.getItem("monarquiaResuelto"));
			getMessage(quizResuelto, "/Quiz_monarquia_1", "fundacion_de_roma");
		} else if (quiz == 1) {
			const quizResuelto = JSON.parse(localStorage.getItem("republicaResuelto"));
			getMessage(quizResuelto, "/Quiz_Republica", "Fundacion_Republica");
		} else if (quiz == 2) {
			const quizResuelto = JSON.parse(localStorage.getItem("personajesResuelto"));
			getMessage(quizResuelto, "/Quiz_Personajes", "Romulo_Remo");
		} else if (quiz == 3) {
		} else if (quiz == 4) {
		} else if (quiz == 5) {
		} else return null;
	};

	const handleBackdropClick = (event) => {
		if (event.target === event.currentTarget) {
			setShowModal(false);
		}
	};

	return (
		<>
			{/*<ButtonBack texto='abrir' onClick={() => { setShowModal(true) }} />*/}
			<div className="text-sm mb-4 md:mb-0 h-8  rounded-xl transform transition duration-300 hover:scale-110 underline cursor-pointer">
				<a
					onClick={() => {
						setShowModal(true);
					}}
					className=""
				>
					Mis calificaciones
				</a>
			</div>
			{showModal ? (
				<>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
						onClick={handleBackdropClick}
						data-testid="modal"
					>
						<div className="border rounded-xl relative w-auto mx-auto max-w-3xl">
							<div className="border rounded-xl shadow-lg relative flex flex-col w-[32rem] bg-white outline-none focus:outline-none">
								<section className="bg-gray-50 border rounded-xl">
									<div className="border rounded-xl flex flex-col items-center justify-center px-6 ">
										<div className="w-full bg-white xl:p-0">
											<div className="flex justify-end mt-4">
												<ExitButton onClick={() => setShowModal(false)} />
											</div>
											<div className="pl-6 pr-6 pb-6 space-y-4 ">
												<h1 className="text-3xl font-bold leading-tight tracking-tight text-black text-center">
													Mis calificaciones
												</h1>
												<Button texto={getText(0)} onClick={() => getScore(0)} />

												<Button texto={getText(1)} onClick={() => getScore(1)} />

												<Button
													texto={
														<span className="flex items-center justify-between px-4">
															<strong>El Imperio:</strong>
															<span className="text-right">Sin resolver</span>
														</span>
													}
													onClick={() => console.log("jeje")}
												/>

												<Button texto={getText(2)} onClick={() => getScore(2)} />

												<Button
													texto={
														<span className="flex items-center justify-between px-4">
															<strong>Arquitectura:</strong>
															<span className="text-right">Sin resolver</span>
														</span>
													}
													onClick={() => console.log("jeje")}
												/>

												<Button
													texto={
														<span className="flex items-center justify-between px-4">
															<strong>Cultura:</strong>
															<span className="text-right">Sin resolver</span>
														</span>
													}
													onClick={() => console.log("jeje")}
												/>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
					<div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
