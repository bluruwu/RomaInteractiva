import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../utilities/Navbar";
import Footbar from "../utilities/Footbar";
import Button from "../components/lessonButton";
import monarquiaImage from "../media/previsualizaciones/prev1.jpg";
import republicaImage from "../media/previsualizaciones/prev2.png";
import imperioImage from "../media/previsualizaciones/prev3.png";
import augustoImage from "../media/previsualizaciones/prev4.png";
import coliseoImage from "../media/previsualizaciones/prev5.png";
import domusImage from "../media/previsualizaciones/prev6.png";
import { getCalificaciones, getPrueba } from "../conections/requests";

const HomePage = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const [scoreData, setScoreData] = useState([]);

	useEffect(() => {
		if (token) {
			async function fetchCalificaciones() {
				const result = await getCalificaciones(token);
				if (result === "OK") {
					// Actualizar los valores de número utilizando el estado local
					setScoreData([
						{
							leccion: 0,
							nombre: "monarquia",
							nota: localStorage.getItem("monarquiaAciertos"),
						},
						{
							leccion: 1,
							nombre: "republica",
							nota: localStorage.getItem("republicaAciertos"),
						},
						{
							leccion: 4,
							nombre: "personajes",
							nota: localStorage.getItem("personajesAciertos"),
						},
						// Agregar más elementos según sea necesario para las demás lecciones
					]);
				} else {
					console.log("No se pudo obtener las calificaciones");
				}
			}

			fetchCalificaciones();
		} else {
			console.log("Usuario no autenticado");
		}

		// Verificar si la variable ya existe en el almacenamiento local
		if (!localStorage.getItem("monarquiaResuelto")) {
			// Si no existe, agregarla al almacenamiento local
			localStorage.setItem("monarquiaResuelto", JSON.stringify(false));
		}
		if (!localStorage.getItem("republicaResuelto")) {
			// Si no existe, agregarla al almacenamiento local
			localStorage.setItem("republicaResuelto", JSON.stringify(false));
		}
		if (!localStorage.getItem("personajesResuelto")) {
			// Si no existe, agregarla al almacenamiento local
			localStorage.setItem("personajesResuelto", JSON.stringify(false));
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
		const scoreDataItem = scoreData.find((item) => item.leccion === leccion);
		if (scoreDataItem) {
			return scoreDataItem.nota || 0;
		} else {
			return 0;
		}
	};

	return (
		// Render de la pagina, con el navbar, titulo y las categorias de las lecciones. Además del Footer al final
		<div className="font-text">
			<Navbar />
			{Title()}

			<main className="flex flex-col gap-y-20 m-12 mb-[160px]">
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
							number={getScore(4)}
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
