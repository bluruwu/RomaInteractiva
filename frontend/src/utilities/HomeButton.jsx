import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
	const navigate = useNavigate();
	return (
		<div className="mb-4 ">
			<img
				src={require("../media/homeicon.png")} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
				alt="Imagen de fondo"
				className="block  object-cover w-11 h-11 cursor-pointer"
				onClick={() => navigate("/home")}
			/>
			<p className=" font-bold cursor-pointer" onClick={() => navigate("/home")}>
				Home
			</p>
		</div>
	);
};

export default HomeButton;
