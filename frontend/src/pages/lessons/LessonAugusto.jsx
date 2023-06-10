import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = ``

const second = ``

const third = ``

const LessonAugusto = () => {

	return (
		<div className="font-text"> {/* Div principal */}
			{/* Barra de navegación */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				{/* Componente de texto de la lección */}
				<LessonText 
					title="Augusto" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				{/* Componente del modelo 3D */}
				<LessonModel description="" titleModel="" source=""/>
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav urlbef="/Julio_Cesar" mediabef="juliocesar.jpg" titlebef="JULIO CÉSAR" 
			           urlnxt="/Quiz_Personajes" medianxt="quiz.jpg"  titlenxt="QUIZ (PERSONAJES)" last={true} quiz={'personajes'}/>
		</div>
	);
};

export default LessonAugusto;