import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = `Durante la República Romana, se produjo una expansión territorial sin precedentes 
				que llevó a Roma a convertirse en una de las potencias más grandes del mundo antiguo. 
				Esta expansión fue impulsada por diversos factores, como la necesidad de recursos, el 
				deseo de gloria militar y el afán de poder y dominio. A medida que Roma conquistaba nuevas 
				tierras, se establecían provincias y se incorporaban a su imperio, lo que generaba una 
				creciente influencia y control sobre vastas regiones.`

const second = `A medida que la República se expandía, también se enfrentaba a nuevos desafíos administrativos
				y políticos. Se establecieron gobernadores en las provincias conquistadas para administrar 
				y supervisar los territorios. Estos gobernadores, designados por el Senado romano, tenían 
				la responsabilidad de mantener el orden, recaudar impuestos y asegurar que las provincias 
				contribuyeran al crecimiento y prosperidad de Roma. Sin embargo, la corrupción y el abuso 
				de poder también eran problemas comunes en estas áreas, generando tensiones y conflictos 
				en la administración de la República.`

const third = `Una de las guerras más significativas durante la expansión de la República Romana fueron 
				las Guerras Púnicas. se caracterizaron por una intensa rivalidad y una serie de batallas 
				épicas. La Segunda Guerra Púnica, liderada por el famoso general cartaginés Aníbal, fue 
				especialmente memorable. Aníbal llevó a su ejército a través de los Alpes y derrotó a 
				varias legiones romanas en importantes batallas, como la Batalla de Cannas. Sin embargo, 
				a pesar de las derrotas iniciales, Roma logró reagruparse y finalmente prevalecer 
				en las Guerras Púnicas, infligiendo una derrota devastadora a Cartago y asegurando su 
				dominio sobre el Mediterráneo occidental.`

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
				<LessonModel description="Centurión del ejército romano " titleModel="Centurion" source="https://sketchfab.com/models/19b819d628f343aa98e521ded3d238ca/embed"/>
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav urlbef="/Fundacion_Republica" mediabef="republica.jpg" titlebef="FUNDACIÓN DE LA REPUBLICA ROMANA" 
			           urlnxt="/Colapso_Republica" medianxt="finalrepublica.jpg"  titlenxt="COLAPSO DE LA REPUBLICA ROMANA"/>
		</div>
	);
};

export default LessonExpRepublica;