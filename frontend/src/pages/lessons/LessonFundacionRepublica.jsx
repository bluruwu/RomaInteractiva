import React, {useState} from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";
import DropdownMenu from "../../utilities/modelosMultiples";

const LessonFundacionRepublica = () => {

	const paragraphs = [
		`La fundación de la República Romana marcó un importante hito en la historia de 
				la antigua Roma. Se estima que este suceso ocurrió en el año 509 a.C., cuando 
				el último rey de Roma, Lucio Tarquinio el Soberbio, fue expulsado del poder y 
				se instauró un sistema republicano de gobierno. Esta transformación política tuvo 
				lugar después de años de tensión entre la aristocracia romana y el monarca, quien 
				había abusado de su autoridad y mostrado desprecio por las instituciones republicanas.`,
				`La fundación de la República Romana implicó la creación de un nuevo sistema de gobierno 
				basado principalmente en la igualdad y la participación ciudadana. Se estableció un Senado compuesto por 
				miembros de la aristocracia, quienes tomaban decisiones políticas y administrativas. Además, 
				se eligieron dos cónsules para liderar el gobierno, los cuales eran elegidos anualmente, para 
				representar los intereses de la república. Estos cambios proporcionaron un equilibrio de poder
				y una distribución más justa de la autoridad política en Roma.`,
				`En términos sociales, la República Romana estaba estructurada en diferentes clases. 
				Los patricios, pertenecientes a la aristocracia, eran la élite gobernante y tenían privilegios 
				y derechos especiales. Por otro lado, los plebeyos, que constituían la mayoría de la población,
				luchaban por obtener más derechos y representación política. A lo largo del tiempo, los plebeyos
				lograron avances significativos en su lucha por la igualdad y la justicia social, 
				como la obtención del derecho a la participación política y la elección de sus propios 
				representantes en la Asamblea Popular.`,
	];

	//Información con los modelos que se ofrecerán en la lección del de la funcdación de la república romana
	const otrosModelos = [
		{ description: "Templo de Neptuno, construido durante la República Romana", titleModel: "Templo de Neptuno", source: "https://sketchfab.com/models/7a82e48e244445e69fd0a9c7b7c4b256/embed" },
		{ description: "El Foro de Roma, el centro de la República Romana", titleModel: "Foro romano", source: "https://sketchfab.com/models/8602b8f386b04a9d84e08b76d1fe0a29/embed" },
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
					title="Fundación de la República Romana" 
					paragraphs={paragraphs}
				/> 
				{/* Componente del modelo 3D */}
				<LessonModel description={modeloActual.description} titleModel={modeloActual.titleModel} source={modeloActual.source} />
			</div>
			<div className="flex justify-end">
				{/* Menu de opciones para modelos */}
				<DropdownMenu handleModelo={handleModelo} modelos={otrosModelos} /> {/* Se mandan dos parametros: La funcion handle y el array de los modelos */}
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav urlbef="/Final_Monarquia" mediabef="finalmonarquia.jpg" titlebef="FINALIZACIÓN DE LA MONARQUÍA" 
			           urlnxt="/Expansion_Republica" medianxt="expansion.jpg"  titlenxt="EXPANSIÓN DE LA REPÚBLICA ROMANA"/>
		</div>
	);
};

export default LessonFundacionRepublica;