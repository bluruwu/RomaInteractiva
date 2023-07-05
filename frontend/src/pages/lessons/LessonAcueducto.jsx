import React, { useState } from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";
import DropdownMenu from "../../utilities/modelosMultiples";

const LessonAcueducto = () => {
	const paragraphs = [
		`Los acueductos de Roma son una maravilla de ingeniería que demuestra el avanzado conocimiento y habilidades de los antiguos romanos en la construcción de infraestructuras. Estos sistemas de canalización y distribución de agua permitieron a la ciudad de Roma abastecerse de agua fresca y limpia desde fuentes lejanas.`,
		`Los acueductos romanos consistían en una serie de canales elevados construidos con arcos y pilares de piedra, que transportaban el agua a través de largas distancias. Estos impresionantes monumentos no solo cumplían una función práctica, sino que también eran una demostración de poder y grandiosidad. Los acueductos de Roma se extendían a lo largo de cientos de kilómetros, atravesando montañas y valles para llevar el agua hasta los puntos de consumo.`,
		`El más famoso de todos los acueductos romanos es el Acueducto de Segovia, en España, que cuenta con arcos de piedra bien conservados que se elevan majestuosamente sobre el paisaje. Otro ejemplo destacado es el Acueducto de los Milagros en Mérida, España, que aún conserva una gran parte de su estructura original. Estos acueductos eran obras impresionantes de arquitectura y han dejado un legado duradero en la historia de la ingeniería civil.`,
	];

	//Información con los modelos que se ofrecerán en la lección del Acuedcuto
	const otrosModelos = [
		{
			description: "Acueducto de Segovia",
			titleModel: "Acueducto de Segovia, en España",
			source: "https://sketchfab.com/models/e50c7ed072e047f6999c30f61eda6243/embed",
		},
		{
			description: "Acueducto Pont du Gard",
			titleModel: "Acueducto de Pont du Gard, en Francia",
			source: "https://sketchfab.com/models/2d5a56605ef44251829659d0a975708d/embed",
		},
	];

	// Funcion estado y funcion handle, son aquello que van cambiando el modelo mostrado. Por default el modelo que se muestra es el que esta de primero
	const [modeloActual, setmodeloActual] = useState(otrosModelos[0]);
	const handleModelo = (model) => {
		setmodeloActual(model);
	};


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
				<LessonText title="Acueductos de la Antigua Roma" paragraphs={paragraphs} />
				{/* Componente del modelo 3D */}
				<LessonModel
					description={modeloActual.description}
					titleModel={modeloActual.titleModel}
					source={modeloActual.source}
				/>
			</div>
			<div className="flex justify-end">
				{/* Menu de opciones para modelos */}
				<DropdownMenu handleModelo={handleModelo} modelos={otrosModelos} />{" "}
				{/* Se mandan dos parametros: La funcion handle y el array de los modelos */}
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav
				urlbef="/Panteon_Agripa"
				mediabef="panteon.jpg"
				titlebef="PANTEÓN DE AGRIPA"
				urlnxt="/Quiz_Arquitectura"
				medianxt="quiz.jpg"
				titlenxt="QUIZ (ARQUITECTURA)"
			/>
		</div>
	);
};

export default LessonAcueducto;
