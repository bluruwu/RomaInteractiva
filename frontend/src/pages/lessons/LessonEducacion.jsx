import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const LessonEducacion = () => {
	const paragraphs = [];

	return (
		<div className="font-text flex flex-col min-h-screen">
			{" "}
			{/* Div principal */}
			{/* Barra de navegación */}
			<Navbar />
			<div className="flex flex-grow flex-col md:flex-row relative">
				{" "}
				{/* Div del contenido + modelo */}
				{/* Componente de texto de la lección */}
				<LessonText title="La educación en la Antigua Roma" paragraphs={paragraphs} />
				{/* Componente del modelo 3D */}
				<LessonModel description="" titleModel="" source="" />
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav
				urlbef="/Viviendas"
				mediabef="viviendas.jpg"
				titlebef="VIVIENDAS EN LA ANTIGUA ROMA"
				urlnxt="/Recreacion"
				medianxt="recreacion.jpg"
				titlenxt="RECREACIÓN EN LA ANTIGUA ROMA"
			/>
		</div>
	);
};

export default LessonEducacion;
