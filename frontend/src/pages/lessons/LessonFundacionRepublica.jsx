import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = ``

const second = ``

const third = ``

const LessonFundacionRepublica = () => {

	return (
		<div className="font-text"> {/* Div principal */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				<LessonText 
					title="Fundación de la Republica Romana" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				<LessonModel description="" titleModel="" source=""/>
			</div>
			<LessonNav urlbef="/Final_Monarquia" mediabef="finalmonarquia.jpg" titlebef="FINALIZACIÓN DE LA MONARQUÍA" 
			           urlnxt="/Expansion_Republica" medianxt="expansion.jpg"  titlenxt="EXPANSIÓN DE LA REPÚBLICA ROMANA"/>
		</div>
	);
};

export default LessonFundacionRepublica;