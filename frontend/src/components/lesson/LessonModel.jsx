import React, { useState } from "react";

//Componente para mostrar el modelo en la parte derecha de las lecciones
const LessonModel = ({ description, titleModel, source }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	return (
		<div
			className="w-full lg:w-1/2 flex sketchfab-embed-wrapper"
			onMouseEnter={handleHover}
			onMouseLeave={handleMouseLeave}
		>
			{/* El iframe para mostrar el modelo 3D */}
			<iframe
				title={titleModel}
				frameborder="0"
				allowfullscreen
				mozallowfullscreen="true"
				webkitallowfullscreen="true"
				allow="autoplay; fullscreen; xr-spatial-tracking"
				xr-spatial-tracking
				execution-while-out-of-viewport
				execution-while-not-rendered
				web-share
				src={source}
				className="w-full"
			></iframe>
			{/* Descripcion del modelo 3D */}
			<div
				className={`flex font-bold items-end justify-end absolute bottom-16 right-8 p-3 bg-custom-doradonormal rounded-md shadow-xl lg:text-sm md:text-xs text-xs hover:hidden ${
					isHovered ? "opacity-0 transition-opacity duration-500" : "opacity-100"
				}`}
				style={{ transition: "opacity 0.5s" }}
			>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default LessonModel;
