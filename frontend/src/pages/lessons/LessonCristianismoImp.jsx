import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = ``

const second = ``

const third = ``

const LessonCristianismoImp = () => {

	return (
		<div className="font-text"> {/* Div principal */}
		{/* Barra de navegación */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				{/* Componente de texto de la lección */}
				<LessonText 
					title="Cristianismo en el Imperio Romano" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				{/* Componente del modelo 3D */}
				<LessonModel description="" titleModel="" source=""/>
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav urlbef="/Colapso_Republica" mediabef="finalrepublica.jpg" titlebef="COLAPSO DE LA REPÚBLICA ROMANA" 
			           urlnxt="/Armas_Imperio" medianxt="armas.jpg"  titlenxt="ARMAMENTO EN EL IMPERIO ROMANO"/>
		</div>
	);
};

export default LessonCristianismoImp;