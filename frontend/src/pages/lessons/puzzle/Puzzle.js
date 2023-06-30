import React, { useState, useEffect } from "react";
import Board from "./Board";
import "./index.css";
import Image1 from "./imagenes/coliseo.jpg";
import Image2 from "./imagenes/augusto.jpg";
import Image3 from "./imagenes/constantino.png";
import Image4 from "./imagenes/panteon.jpg";

function Puzzle() {
	const images = [Image1, Image2, Image3, Image4];
	const [imgUrl, setImgUrl] = useState("");

	//Se escoge una imagen al azar entre las 4 imagenes importadas
	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * images.length);
		setImgUrl(images[randomIndex]);
	}, []);

	return (
		<div>
			{/* Mostrar tablero */}
			<Board imgUrl={imgUrl} />
		</div>
	);
}

export default Puzzle;
