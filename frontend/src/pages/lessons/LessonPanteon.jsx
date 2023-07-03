import React, { useState } from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";
import DropdownMenu from "../../utilities/modelosMultiples";

const first = `El Panteón de Agripa es un majestuoso edificio ubicado en la ciudad de Roma, Italia. Construido 
				durante el reinado del emperador romano Adriano en el año 126 d.C., el Panteón es considerado 
				como uno de los logros más destacados de la arquitectura romana. Su imponente cúpula y diseño 
				innovador han dejado una huella duradera en la historia de la arquitectura.`;

const second = `El interior del Panteón es igualmente impresionante. Al entrar, los visitantes son 
				recibidos por una amplia sala circular con una cúpula que se eleva majestuosamente sobre ellos.
				 La cúpula del Panteón es famosa por su apertura central, conocida como oculus, que permite la 
				 entrada de luz natural y crea un efecto visual sorprendente. Además, las paredes del interior 
				 están decoradas con hermosos mármoles y detalles arquitectónicos que reflejan la exquisitez 
				 del diseño romano.`;

const third = `A lo largo de los siglos, el Panteón de Agripa ha servido a diferentes propósitos y ha sido 
				testigo de numerosos eventos históricos. Hoy en día, se considera uno de los principales 
				atractivos turísticos de Roma y es un símbolo emblemático de la grandeza y la ingeniería 
				romana. Su durabilidad y belleza perduran como un tributo a la habilidad y visión de los 
				arquitectos de la antigua Roma.`;

const LessonPanteon = () => {
	const paragraphs = [
		`El Panteón de Agripa es un majestuoso edificio ubicado en la ciudad de Roma, Italia. Construido 
				durante el reinado del emperador romano Adriano en el año 126 d.C., el Panteón es considerado 
				como uno de los logros más destacados de la arquitectura romana. Su imponente cúpula y diseño 
				innovador han dejado una huella duradera en la historia de la arquitectura.`,
		`El interior del Panteón es igualmente impresionante. Al entrar, los visitantes son 
				recibidos por una amplia sala circular con una cúpula que se eleva majestuosamente sobre ellos.
				 La cúpula del Panteón es famosa por su apertura central, conocida como oculus, que permite la 
				 entrada de luz natural y crea un efecto visual sorprendente. Además, las paredes del interior 
				 están decoradas con hermosos mármoles y detalles arquitectónicos que reflejan la exquisitez 
				 del diseño romano.`,
		`A lo largo de los siglos, el Panteón de Agripa ha servido a diferentes propósitos y ha sido 
				 testigo de numerosos eventos históricos. Hoy en día, se considera uno de los principales 
				 atractivos turísticos de Roma y es un símbolo emblemático de la grandeza y la ingeniería 
				 romana. Su durabilidad y belleza perduran como un tributo a la habilidad y visión de los 
				 arquitectos de la antigua Roma.`,
	];

	//Información con los modelos que se ofrecerán en la lección del Panteon
	const otrosModelos = [
		{
			description: "El Panteón de Agripa",
			titleModel: "Exterior del Panteón",
			source: "https://sketchfab.com/models/074e9fe9154f41169cb2e79f5330e58f/embed",
		},
		{
			description: "Interior del Panteón",
			titleModel: "Interior del Panteón",
			source: "https://sketchfab.com/models/a5223378f80f4b87acb4491f1f4f920a/embed",
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
				<LessonText title="Panteón de Agripa" paragraphs={paragraphs} />
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
				urlbef="/Coliseo_Romano"
				mediabef="coliseo.jpg"
				titlebef="COLISEO ROMANO"
				urlnxt="/Acueducto_Romano"
				medianxt="acueducto.jpg"
				titlenxt="ACUEDUCTO DE LA ANTIGUA ROMA"
			/>
		</div>
	);
};

export default LessonPanteon;
