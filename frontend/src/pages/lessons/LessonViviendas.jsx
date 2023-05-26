import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = ``

const second = ``

const third = ``

const LessonViviendas = () => {

	return (
		<div className="font-text"> {/* Div principal */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				<LessonText 
					title="Viviendas en la Antigua Roma" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				<LessonModel description="" titleModel="" source=""/>
			</div>
			<LessonNav urlbef="/Acueducto_Romano" mediabef="acueducto.jpg" titlebef="ACUEDUCTO DE LA ANTIGUA ROMA" 
			           urlnxt="/Educacion" medianxt="educacion.png"  titlenxt="LA EDUCACIÓN EN LA ANTIGUA ROMA"/>
		</div>
	);
};

export default LessonViviendas;