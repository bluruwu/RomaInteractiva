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
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				<LessonText 
					title="Acueducto de la Antigua Roma" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				<LessonModel description="" titleModel="" source=""/>
			</div>
			<LessonNav urlbef="/Panteon_Agripa" mediabef="panteon.jpg" titlebef="PANTEÓN DE AGRIPA" 
			           urlnxt="/Quiz_Arquitectura" medianxt="quiz.jpg"  titlenxt="QUIZ (ARQUITECTURA)"/>
		</div>
	);
};

export default LessonAcueducto;
