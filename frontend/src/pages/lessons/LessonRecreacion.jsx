import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const LessonRecreacion = () => {
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
				<LessonText title="Recreación en la Antigua Roma" paragraphs={paragraphs} />
				{/* Componente del modelo 3D */}
				<LessonModel description="" titleModel="" source="" />
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav
				urlbef="/Educacion"
				mediabef="educacion.png"
				titlebef="LA EDUCACIÓN EN LA ANTIGUA ROMA"
				urlnxt="/Quiz_Cultura"
				medianxt="quiz.jpg"
				titlenxt="QUIZ (CULTURA)"
			/>
		</div>
	);
};

export default LessonRecreacion;
