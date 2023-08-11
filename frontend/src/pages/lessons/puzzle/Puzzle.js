import React, { useState, useEffect } from "react";
import Board from "./Board";
import "./index.css";
import Image1 from "./imagenes/coliseo.jpg";
import Image2 from "./imagenes/augusto.jpg";
import Image3 from "./imagenes/constantino.png";
import Image4 from "./imagenes/panteon.jpg";

//Rompecabezas deslizante
function Puzzle() {
	//Imagenes que se van a mostrar en el juego y la descripcion de la imagen que se mestra cuando gana el juego
	const images = [
		{ url: Image1, name: "Coliseo Romano" },
		{ url: Image2, name: "Estatua del Emperador Augusto" },
		{ url: Image3, name: "Busto del Emperador Constantino" },
		{ url: Image4, name: "Panteón de Agripa" },
	];
	const [selectedImage, setSelectedImage] = useState(null);

	//Escoger una de las imagenes al azar
	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * images.length);
		setSelectedImage(images[randomIndex]);
	}, []);

	return (
		<div className="">
			{/* Mostrar tablero con la imagen seleccionada*/}
			{selectedImage && <Board imageUrl={selectedImage.url} imageName={selectedImage.name} />}
		</div>
	);
}

export default Puzzle;
