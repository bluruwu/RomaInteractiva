import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const LessonFinalMonarquia = () => {
	const paragraphs = [
		`La finalización de la monarquía en la antigua Roma marcó un momento crucial en su historia política y sentó las bases para el desarrollo de la República Romana. 
                Según la tradición, la monarquía romana fue abolida en el año 509 a.C. después de más de dos siglos de gobierno monárquico. El último rey romano, Lucio Tarquinio el Soberbio,
                 fue depuesto debido a su gobierno autoritario y cruel.`,
		`El colapso de la monarquía fue impulsado por una combinación de factores, incluida la insatisfacción generalizada de los patricios y los plebeyos con el gobierno de Tarquinio 
				 y la lucha por el poder entre las diferentes facciones aristocráticas. Además, la influencia de la cultura griega en la ciudad de Roma contribuyó a la creación de un ambiente 
				 más propicio para la instauración de un sistema político republicano.`,
		` Tras la caída de la monarquía, Roma experimentó un período de transición hacia la República. 
				 Se estableció un nuevo sistema político en el que el poder se dividió entre dos cónsules elegidos anualmente, quienes compartían el poder ejecutivo y 
				 representaban a los intereses tanto de los patricios como de los plebeyos. La creación de las instituciones republicanas, como el Senado y las asambleas populares, 
				 permitió una mayor participación política de la sociedad romana y sentó las bases para la posterior expansión y consolidación del poder de Roma`,
	];

	return (
		<div className="font-text flex flex-col min-h-screen">
			{" "}
			{/* Div principal */}
			{/* Barra de navegación */}
			<Navbar />
			<div className="flex flex-grow flex-col md:flex-row relative">
				{" "}
				{/* Div del contenido + modelo */}
				{/* Componente de texto de la lección */}
				<LessonText title="Finalización de la monarquía" paragraphs={paragraphs} />
				{/* Componente del modelo 3D */}
				<LessonModel
					description="Recreación de la ultima construcción hecha en la monarquia por Tarquinius el soberbio"
					titleModel="Jupiter Óptimo Máximo Capitolino"
					source="https://sketchfab.com/models/52851fd49e994a3e9f4e1df9ab681756/embed?dnt=1"
				/>
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav
				urlbef="/Reyes_de_Roma"
				mediabef="monarquia2.png"
				titlebef="REYES DE ROMA"
				urlnxt="/Quiz_monarquia_1"
				medianxt="quiz.jpg"
				titlenxt="QUIZ (MONARQUIA)"
				last={true}
				quiz={"monarquia"}
			/>
		</div>
	);
};

export default LessonFinalMonarquia;
