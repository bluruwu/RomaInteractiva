import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../utilities/Navbar";
import Footbar from "../utilities/Footbar";
import Timeline from "../utilities/Timeline";
import Button from "../components/lessonButton";
import monarquiaImage from "../media/previsualizaciones/prev1.jpg";
import republicaImage from "../media/previsualizaciones/prev2.png";
import imperioImage from "../media/previsualizaciones/prev3.png";
import augustoImage from "../media/previsualizaciones/prev4.png";
import coliseoImage from "../media/previsualizaciones/prev5.png";
import domusImage from "../media/previsualizaciones/prev6.png";
import { getCalificaciones } from "../conections/requests";

const HomePage = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const [scoreData, setScoreData] = useState([]);

	//Poner las calificaciones en la parte superior derecha de los botones
	useEffect(() => {
		//Obtener la calificacion de las lecciones del localstorage
		const getScoreDataFromLocalStorage = () => {
			return [
				{
					leccion: 1,
					nombre: "monarquia",
					nota: localStorage.getItem("monarquiaAciertos"),
				},
				{
					leccion: 2,
					nombre: "republica",
					nota: localStorage.getItem("republicaAciertos"),
				},

				{
					leccion: 3,
					nombre: "imperio",
					nota: localStorage.getItem("imperioAciertos"),
				},
				{
					leccion: 4,
					nombre: "personajes",
					nota: localStorage.getItem("personajesAciertos"),
				},
				{
					leccion: 5,
					nombre: "arquitectura",
					nota: localStorage.getItem("arquitecturaAciertos"),
				},
				{
					leccion: 6,
					nombre: "cultura",
					nota: localStorage.getItem("culturaAciertos"),
				},

				// Agregar más elementos según sea necesario para las demás lecciones
			];
		};

		//Si el usuario esta logeado, hacer la peticion de las calificaciones al backend
		if (token) {
			async function fetchCalificaciones() {
				const result = await getCalificaciones(token);
				if (result === "OK") {
					const calificaciones = getScoreDataFromLocalStorage();
					setScoreData(calificaciones);
				} else {
					console.log("No se pudo obtener las calificaciones");
				}
			}

			fetchCalificaciones();
		} else {
			//Si el usuario NO esta logeado, obtener las calificaciones del localstorage
			console.log("Usuario no autenticado");
			const calificaciones = getScoreDataFromLocalStorage();
			setScoreData(calificaciones);
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
		if (!localStorage.getItem("imperioResuelto")) {
			// Si no existe, agregarla al almacenamiento local
			localStorage.setItem("imperioResuelto", JSON.stringify(false));
		}
		if (!localStorage.getItem("arquitecturaResuelto")) {
			// Si no existe, agregarla al almacenamiento local
			localStorage.setItem("arquitecturaResuelto", JSON.stringify(false));
		}
		if (!localStorage.getItem("culturaResuelto")) {
			// Si no existe, agregarla al almacenamiento local
			localStorage.setItem("culturaResuelto", JSON.stringify(false));
		}
	}, []);

	// Componente de titulo que sale al principio, con una imagen de fondo y mensaje de bienvenida
	const Title = () => {
		return (
			<div className="relative h-80 font-text">
				<img
					className="absolute inset-0 w-full h-full object-cover brightness-50 z-0"
					src={process.env.PUBLIC_URL + "/images/fondo.jpg"}
					alt="Imagen de fondo"
				/>

				<div className="relative z-10 flex items-center justify-center h-full">
					<h1 className="font-bold text-4xl text-white text-center">
						¡Bienvenido a nuestra página sobre la gloriosa cultura Romana!
					</h1>
				</div>
			</div>
		);
	};

	const getScore = (leccion) => {
		const scoreDataItem = scoreData.find((item) => item.leccion === leccion);
		if (scoreDataItem) {
			return scoreDataItem.nota || "-";
		} else {
			return "-";
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
					<h1 className="xl:pl-[8vw] font-bold text-3xl text-black"> Etapas</h1>
					<div className="flex flex-col md:flex-row justify-center items-center gap-x-24 gap-y-12 mt-12">
						<Button
							id="monarquia"
							image={"images/monarquia.jpeg"}
							hoverImage={monarquiaImage}
							onClick={() => navigate("/fundacion_de_roma")}
							buttonText={"La Monarquía"}
							number={getScore(1)}
						/>
						<Button
							id="republica"
							image={"images/republica.jpg"}
							hoverImage={republicaImage}
							onClick={() => navigate("/Fundacion_Republica")}
							buttonText={"La República"}
							number={getScore(2)}
						/>
						<Button
							id="imperio"
							image={"images/imperio.jpg"}
							hoverImage={imperioImage}
							onClick={() => navigate("/Cristianismo_Imperio")}
							buttonText={"El Imperio"}
							number={getScore(3)}
						/>
					</div>
				</section>

				{/* Seccion LOS ROMANOS */}
				<section>
					<h1 className="xl:pl-[8vw] font-bold text-3xl text-black"> Los Romanos</h1>
					<div className="flex flex-col md:flex-row justify-center items-center gap-x-24 gap-y-12 mt-12">
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
							number={getScore(5)}
						/>
						<Button
							id="cultura"
							image={"images/cultura.jpg"}
							hoverImage={domusImage}
							onClick={() => navigate("/Viviendas")}
							buttonText={"Cultura"}
							number={getScore(6)}
						/>
					</div>
				</section>
				{/* Sección de LÍNEA DEL TIEMPO */}
				<section>
					<h1 className="xl:pl-[8vw] font-bold text-3xl text-black"> Línea del tiempo</h1>
					<div className="mt-12">
						<Timeline />
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
