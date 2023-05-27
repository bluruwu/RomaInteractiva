import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = ``

const second = ``

const third = ``

const LessonExpRepublica = () => {

	return (
		<div className="font-text"> {/* Div principal */}
		{/* Barra de navegación */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				{/* Componente de texto de la lección */}
				<LessonText 
					title="Expansión de la Republica Romana" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				{/* Componente del modelo 3D */}
				<LessonModel description="" titleModel="" source=""/>
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav urlbef="/Fundacion_Republica" mediabef="republica.jpg" titlebef="FUNDACIÓN DE LA REPUBLICA ROMANA" 
			           urlnxt="/Colapso_Republica" medianxt="finalrepublica.jpg"  titlenxt="COLAPSO DE LA REPUBLICA ROMANA"/>
		</div>
	);
};

export default LessonExpRepublica;