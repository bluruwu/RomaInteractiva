import React from "react";

//Componente para mostrar el modelo en la parte derecha de las lecciones
const LessonModel = ({ description, titleModel, source }) => {
	return (
		<div className="w-1/2 flex  sketchfab-embed-wrapper">
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
			<div className="flex font-bold items-end justify-end absolute bottom-36 right-8 p-3 bg-custom-doradonormal rounded-md shadow-xl">
				<p>{description}</p>
			</div>
		</div>
	);
};

export default LessonModel;
