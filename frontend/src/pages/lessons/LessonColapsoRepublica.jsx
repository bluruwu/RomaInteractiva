import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = `A medida que Roma conquistaba nuevos territorios, surgieron tensiones sociales y económicas, ya que las élites romanas se beneficiaban de la expansión mientras que las clases bajas sufrían las consecuencias. Esto condujo a una creciente polarización social y a un aumento de la corrupción política.`

const second = `La crisis política también se vio exacerbada por líderes ambiciosos que aprovecharon las tensiones existentes para obtener más poder. Generales como Julio César y Pompeyo establecieron ejércitos privados y se involucraron en una serie de guerras civiles que socavaron aún más la estructura republicana. Finalmente, en el 27 a.C., Octavio, más tarde conocido como Augusto, se convirtió en el primer emperador romano, poniendo fin oficialmente a la República Romana y estableciendo el Imperio Romano.`

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
				/> 
				<LessonModel description="Ciudad Roma" titleModel="Roma" source="https://sketchfab.com/models/0304c6618b984328a6829d474b6e87b4/embed"/>
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav urlbef="/Expansion_Republica" mediabef="expansion.jpg" titlebef="EXPANSIÓN DE LA REPÚBLICA ROMANA" 
			           urlnxt="/Quiz_Republica" medianxt="quiz.jpg"  titlenxt="QUIZ (REPÚBLICA)"/>
		</div>
	);
};

export default LessonColapsoRepublica;