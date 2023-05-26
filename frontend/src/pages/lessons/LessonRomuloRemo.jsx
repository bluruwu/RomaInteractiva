import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = ``

const second = ``

const third = ``

const LessonRomuloRemo = () => {

	return (
		<div className="font-text"> {/* Div principal */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				<LessonText 
					title="Rómulo y Remo" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				<LessonModel description="" titleModel="" source=""/>
			</div>
			<LessonNav urlbef="/Final_Imperio" mediabef="finalimperio.jpg" titlebef="FINAL DEL IMPERIO ROMANO" 
			           urlnxt="/Julio_Cesar" medianxt="juliocesar.jpg"  titlenxt="JULIO CESAR"/>
		</div>
	);
};

export default LessonRomuloRemo;