import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers";
import "./index.css";
import Image1 from "./imagenes/coliseo.jpg"; // Ruta de la imagen
import Image2 from "./imagenes/augusto.jpg"; // Ruta de la imagen
import Image3 from "./imagenes/constantino.png"; // Ruta de la imagen
import Image4 from "./imagenes/panteon.jpg"; // Ruta de la imagen

function Puzzle() {
	const images = [Image1, Image2, Image3, Image4];
	const [imgUrl, setImgUrl] = useState("");

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * images.length);
		setImgUrl(images[randomIndex]);
	}, []);

	return (
		<div>
			<Board imgUrl={imgUrl} />
		</div>
	);
}

export default Puzzle;
