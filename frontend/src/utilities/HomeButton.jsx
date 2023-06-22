import React from "react";
import { useNavigate } from "react-router-dom";

//Componente del icono del panteon que lleva a /home
const HomeButton = () => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/home");
	};

	return (
		<div>
			<img
				src={require("../media/iconos/homeicon.png")}
				alt="Imagen de fondo"
				className="block object-cover w-12 h-12 cursor-pointer"
				onClick={handleButtonClick}
			/>
			<p className="font-bold cursor-pointer w-fit" onClick={handleButtonClick}>
				Home
			</p>
		</div>
	);
};

export default HomeButton;
