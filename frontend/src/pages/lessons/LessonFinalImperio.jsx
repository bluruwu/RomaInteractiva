import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = ``

const second = ``

const third = ``

const LessonFinalImperio = () => {

	return (
		<div className="font-text"> {/* Div principal */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				<LessonText 
					title="Final del Imperio Romano" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				<LessonModel description="" titleModel="" source=""/>
			</div>
			<LessonNav urlbef="/Armas_Imperio" mediabef="armas.jpg" titlebef="ARMAMENTO EN EL IMPERIO ROMANO" 
			           urlnxt="/Quiz_Imperio" medianxt="quiz.jpg"  titlenxt="QUIZ (IMPERIO)"/>
		</div>
	);
};

export default LessonFinalImperio;