import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = ``

const second = ``

const third = ``

const LessonPanteon = () => {

	return (
		<div className="font-text"> {/* Div principal */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				<LessonText 
					title="Panteón de Agripa" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				<LessonModel description="" titleModel="" source=""/>
			</div>
			<LessonNav urlbef="/Coliseo_Romano" mediabef="coliseo.jpg" titlebef="COLISEO ROMANO" 
			           urlnxt="/Acueducto_Romano" medianxt="acueducto.jpg"  titlenxt="ACUEDUCTO DE LA ANTIGUA ROMA"/>
		</div>
	);
};

export default LessonPanteon;