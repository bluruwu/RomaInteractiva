import React, { useState } from "react";

const Button = ({ image, hoverImage, onClick, buttonText, number, id }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<button
			id= {id}
			className="bg-cover bg-center bg-no-repeat border-4 border-red-800 w-72 h-44 rounded-3xl relative overflow-hidden hover:scale-110 transition-transform duration-300"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
					process.env.PUBLIC_URL + (isHovered ? hoverImage : image)
				})`,
			}}
			onClick={onClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<span className="absolute top-2 right-2 flex items-center space-x-1">
				<img
					src={process.env.PUBLIC_URL + "icons/achievement.svg"}
					alt="Icono"
					className="h-4 w-4 text-white"
				/>
				<span className="text-white text-xs">{number}/5</span>
			</span>
			<span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
				{buttonText}
			</span>
		</button>
	);
};

export default Button;
