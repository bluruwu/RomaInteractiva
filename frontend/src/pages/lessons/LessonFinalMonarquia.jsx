import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = `La finalización de la monarquía en la antigua Roma marcó un momento crucial en su historia política y sentó las bases para el desarrollo de la República Romana. 
                Según la tradición, la monarquía romana fue abolida en el año 509 a.C. después de más de dos siglos de gobierno monárquico. El último rey romano, Lucio Tarquinio el Soberbio,
                 fue depuesto debido a su gobierno autoritario y cruel.`

const second = `El colapso de la monarquía fue impulsado por una combinación de factores, incluida la insatisfacción generalizada de los patricios y los plebeyos con el gobierno de Tarquinio 
                y la lucha por el poder entre las diferentes facciones aristocráticas. Además, la influencia de la cultura griega en la ciudad de Roma contribuyó a la creación de un ambiente 
                más propicio para la instauración de un sistema político republicano.`

const third = ` Tras la caída de la monarquía, Roma experimentó un período de transición hacia la República. 
                Se estableció un nuevo sistema político en el que el poder se dividió entre dos cónsules elegidos anualmente, quienes compartían el poder ejecutivo y 
                representaban a los intereses tanto de los patricios como de los plebeyos. La creación de las instituciones republicanas, como el Senado y las asambleas populares, 
                permitió una mayor participación política de la sociedad romana y sentó las bases para la posterior expansión y consolidación del poder de Roma`

const LessonFinalMonarquia = () => {

	return (
		<div className="font-text"> {/* Div principal */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				<LessonText 
					title="Finalización de la monarquía" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				<LessonModel description="Ultima construcción hecha en la monarquia por Tarquinius el soberbio" titleModel="Jupiter Óptimo Máximo Capitolino" source="https://sketchfab.com/models/52851fd49e994a3e9f4e1df9ab681756/embed?dnt=1"/>
			</div>
			<LessonNav urlbef="/Final_Monarquia" mediabef="monarquia2.png" titlebef="REYES DE LA MONARQUÍA" 
			           urlnxt="/Final_Monarquia" medianxt="republica.jpg"  titlenxt="LA REPÚBLICA"/>
		</div>
	);
};

export default LessonFinalMonarquia;
