import React, {useState} from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";
import DropdownMenu from "../../utilities/modelosMultiples";

const first = `Augusto, cuyo nombre completo era Cayo Octavio Augusto, fue el primer emperador 
				del Imperio Romano. Nació el 23 de septiembre del año 63 a.C. y falleció el 19 de 
				agosto del año 14 d.C. Fue el sobrino e hijo adoptivo de Julio César, a quien sucedió 
				en el gobierno de Roma luego de su vil asesinato. Su ascenso al poder ocasionó varias luchas 
				internas que tuvo que enfrentar antes de asumir el completo control del gobierno
				Su reinado marcó el final de la República Romana y el comienzo de una nueva era en la 
				historia de Roma: El imperio. Augusto gobernó con habilidad y astucia, 
				consolidando su poder y estableciendo una paz duradera conocida como la "Pax Romana".`

const second = `Bajo el gobierno de Augusto, Roma experimentó un período de prosperidad y estabilidad. 
				Implementó una serie de reformas políticas, administrativas y militares que sentaron 
				las bases del sistema imperial romano. Además, Augusto impulsó una ambiciosa política 
				de construcción y embellecimiento de la ciudad, promoviendo la creación de obras 
				arquitectónicas y monumentos que aún hoy en día son admirados, como el Ara Pacis y 
				el Mausoleo de Augusto.`

const third = `Augusto también fue un líder carismático y habilidoso en la diplomacia. Supo forjar 
				alianzas y establecer acuerdos con otras naciones y líderes, lo que le permitió expandir 
				y consolidar el Imperio Romano. Su gobierno fue un punto de inflexión en la historia de 
				Roma, sentando las bases para los siglos de dominio romano que le siguieron. Augusto 
				dejó un legado duradero en la forma de un imperio fuerte y una Roma grandiosa, y su 
				figura es recordada como una de las más importantes de la antigüedad clásica.`

const LessonAugusto = () => {

	//Información con los modelos que se ofrecerán en la lección de Augusto
	const otrosModelos = [
		{ description: "Escultura de César Augusto", titleModel: "Augusto", source: "https://sketchfab.com/models/9d646a47625145cfa59ce2a56482af58/embed" },
		{ description: "Ruinas del Foro de Augusto, construido luego de su consagración", titleModel: "Foro de Augusto", source: "https://sketchfab.com/models/9f4e01f1ee75439ca53d5cbb982a790a/embed" },
	]

	// Funcion estado y funcion handle, son aquello que van cambiando el modelo mostrado. Por default el modelo que se muestra es el que esta de primero
	const [modeloActual, setmodeloActual] = useState(otrosModelos[0])
	const handleModelo = (model) => {
		setmodeloActual(model);
	}

	return (
		<div className="font-text"> {/* Div principal */}
			{/* Barra de navegación */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				{/* Componente de texto de la lección */}
				<LessonText 
					title="Augusto" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				{/* Componente del modelo 3D */}
				<LessonModel description={modeloActual.description} titleModel={modeloActual.titleModel} source={modeloActual.source} />
			</div>
			<div className="flex justify-end">
				{/* Menu de opciones para modelos */}
				<DropdownMenu handleModelo={handleModelo} modelos={otrosModelos} /> {/* Se mandan dos parametros: La funcion handle y el array de los modelos */}
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav urlbef="/Julio_Cesar" mediabef="juliocesar.jpg" titlebef="JULIO CÉSAR" 
			           urlnxt="/Quiz_Personajes" medianxt="quiz.jpg"  titlenxt="QUIZ (PERSONAJES)" last={true} quiz={'personajes'}/>
		</div>
	);
};

export default LessonAugusto;