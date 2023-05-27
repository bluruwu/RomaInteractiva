import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = ``

const second = ``

const third = ``

const LessonColapsoRepublica = () => {

	return (
		<div className="font-text"> {/* Div principal */}
		{/* Barra de navegación */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				{/* Componente de texto de la lección */}
				<LessonText 
					title="Colapso de la República Romana" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				<LessonModel description="" titleModel="" source=""/>
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav urlbef="/Expansion_Republica" mediabef="expansion.jpg" titlebef="EXPANSIÓN DE LA REPÚBLICA ROMANA" 
			           urlnxt="/Quiz_Republica" medianxt="quiz.jpg"  titlenxt="QUIZ (REPÚBLICA)"/>
		</div>
	);
};

export default LessonColapsoRepublica;