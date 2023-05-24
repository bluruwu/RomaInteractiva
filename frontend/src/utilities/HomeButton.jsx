import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/home");
	};

	return (
		<div className="mb-4">
			<img
				src={require("../media/homeicon.png")}
				alt="Imagen de fondo"
				className="block object-cover w-11 h-11 cursor-pointer"
				onClick={handleButtonClick}
			/>
			<p className="font-bold cursor-pointer" onClick={handleButtonClick}>
				Home
			</p>
		</div>
	);
};

export default HomeButton;
