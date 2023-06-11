import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../utilities/Navbar";
import Footbar from "../utilities/Footbar";
import Button from "../components/lessonButton";
import monarquiaImage from "../media/prev1.jpg";
import republicaImage from "../media/prev2.png";
import imperioImage from "../media/prev3.png";
import augustoImage from "../media/prev4.png";
import coliseoImage from "../media/prev5.png";
import domusImage from "../media/prev6.png";

const HomePage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// Verificar si la variable ya existe en el almacenamiento local
		if (!localStorage.getItem('monarquiaResuelto')) {
			// Si no existe, agregarla al almacenamiento local
			localStorage.setItem('monarquiaResuelto', JSON.stringify(false));
		}
		if (!localStorage.getItem('republicaResuelto')) {
			// Si no existe, agregarla al almacenamiento local
			localStorage.setItem('republicaResuelto', JSON.stringify(false));
		}
		if (!localStorage.getItem('personajesResuelto')) {
			// Si no existe, agregarla al almacenamiento local
			localStorage.setItem('personajesResuelto', JSON.stringify(false));
		}
	}, []);

	// Componente de titulo que sale al principio, con una imagen de fondo y mensaje de bienvenida
	const Title = () => {
		return (
			<div className="relative h-80 font-text">
				<img
					className="absolute inset-0 w-full h-full object-cover brightness-50"
					src={process.env.PUBLIC_URL + "/images/fondo.jpg"}
					alt="Imagen de fondo"
				/>
				<div className="relative z-10 flex items-center justify-center h-full">
					<h1 className="font-bold text-4xl text-white">
						¡Bienvenido a nuestra página sobre la gloriosa cultura Romana!
					</h1>
				</div>
			</div>
		);
	};

	const getScore = (leccion) => {
		if (leccion == 0) {
			const quizResuelto = JSON.parse(localStorage.getItem('monarquiaResuelto'));
			if (quizResuelto) {
				return JSON.parse(localStorage.getItem('aciertosMonarquia'))
			}
			else return 0
		}
		else if (leccion == 1) {
			const quizResuelto = JSON.parse(localStorage.getItem('republicaResuelto'));
			if (quizResuelto) {
				return JSON.parse(localStorage.getItem('aciertosRepublica'))
			}
			else return 0
		}
		else if (leccion == 2) {
			
		}
		else if (leccion == 3) {
			const quizResuelto = JSON.parse(localStorage.getItem('personajesResuelto'));
			if (quizResuelto) {
				return JSON.parse(localStorage.getItem('aciertosPersonajes'))
			}
			else return 0
		}
		else if (leccion == 4) {
			
		}
		else return 0
	}

	return (
		// Render de la pagina, con el navbar, titulo y las categorias de las lecciones. Además del Footer al final
		<div className="font-text">
			<Navbar />
			{Title()}

			<main className="flex flex-col gap-y-20 m-12">
				{/* Seccion ETAPAS */}
				<section>
					<h1 className="font-bold text-3xl text-black"> Etapas</h1>
					<div className="flex justify-center gap-x-24 mt-8">
						<Button
							id="monarquia"
							image={"images/monarquia.jpeg"}
							hoverImage={monarquiaImage}
							onClick={() => navigate("/fundacion_de_roma")}
							buttonText={"La Monarquía"}
							number={getScore(0)}
						/>
						<Button
							id="republica"
							image={"images/republica.jpg"}
							hoverImage={republicaImage}
							onClick={() => navigate("/Fundacion_Republica")}
							buttonText={"La República"}
							number={getScore(1)}
						/>
						<Button
							id="imperio"
							image={"images/imperio.jpg"}
							hoverImage={imperioImage}
							onClick={() => navigate("/Cristianismo_Imperio")}
							buttonText={"El Imperio"}
							number={0}
						/>
					</div>
				</section>

				{/* Seccion LOS ROMANOS */}
				<section>
					<h1 className="font-bold text-3xl text-black"> Los Romanos</h1>
					<div className="flex justify-center gap-x-24 mt-8">
						<Button
							id="personajes"
							image={"images/Julio.png"}
							onClick={() => navigate("/Romulo_Remo")}
							hoverImage={augustoImage}
							buttonText={"Personajes"}
							number={getScore(3)}
						/>
						<Button
							id="arquitectura"
							image={"images/coliseo.jpg"}
							onClick={() => navigate("/Coliseo_Romano")}
							hoverImage={coliseoImage}
							buttonText={"Arquitectura"}
							number={0}
						/>
						<Button
							id="cultura"
							image={"images/cultura.jpg"}
							hoverImage={domusImage}
							onClick={() => navigate("/Viviendas")}
							buttonText={"Cultura"}
							number={0}
						/>
					</div>
				</section>
			</main>

			<footer>
				<Footbar />
			</footer>
		</div>
	);
};

export default HomePage;
