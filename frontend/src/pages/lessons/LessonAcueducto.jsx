import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = ``

const second = ``

const third = ``

const LessonAcueducto = () => {

	return (
		<div className="font-text"> {/* Div principal */}
			{/* Barra de navegación */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
			{/* Componente de texto de la lección */}
				<LessonText 
					title="Acueducto de la Antigua Roma" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				{/* Componente del modelo 3D */}
				<LessonModel description="" titleModel="" source=""/>
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav urlbef="/Panteon_Agripa" mediabef="panteon.jpg" titlebef="PANTEÓN DE AGRIPA" 
			           urlnxt="/Quiz_Arquitectura" medianxt="quiz.jpg"  titlenxt="QUIZ (ARQUITECTURA)"/>
		</div>
	);
};

export default LessonAcueducto;
