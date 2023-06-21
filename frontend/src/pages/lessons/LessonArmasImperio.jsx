import React, {useState} from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";
import DropdownMenu from "../../utilities/modelosMultiples";

const first = `El Imperio Romano era conocido por su poderío militar y su sofisticado armamento, que 
				desempeñó un papel crucial en su expansión y dominio. A lo largo de los siglos, los romanos 
				desarrollaron una amplia variedad de armas y equipos que les permitieron mantener su 
				supremacía en el campo de batalla.`

const second = `En primer lugar, la legendaria espada romana, conocida como la gladius, era el arma principal 
				de los soldados romanos. Esta espada de doble filo y hoja corta era ágil y eficiente en el 
				combate cuerpo a cuerpo. La gladius permitía a los romanos realizar rápidos ataques y maniobras
				 en formación, lo que los hacía formidables en el campo de batalla. Además de la espada, 
				 los romanos también utilizaban una variedad de lanzas y jabalinas, como la pilum. El pilum 
				 era una lanza pesada con una punta afilada y un astil largo. Los soldados romanos arrojaban 
				 los pila a sus enemigos antes de cargar, causando estragos en las filas enemigas y 
				 desorganizando sus formaciones.`

const third = `Otro aspecto destacado del armamento romano era su habilidad en la ingeniería de asedio. Los 
				romanos desarrollaron máquinas de asedio como catapultas, balistas y torres de asalto para 
				conquistar ciudades y fortificaciones enemigas. Estas máquinas permitían a los romanos lanzar 
				proyectiles de gran tamaño, como piedras y flechas, a largas distancias, lo que les daba una 
				ventaja significativa en el asedio de fortalezas enemigas.`

const LessonArmasImperio = () => {

	//Modelos ofrecidos para esta leccion, junto a sus descripciones
	const otrosModelos = [
		{ description: "Gladius, la espada corta romana", titleModel: "Gladius romana", source: "https://sketchfab.com/models/45535e01a275448391be7377fb2c0611/embed" },
		{ description: "Pilum, lanza arrojadiza usada al comienzo de la batalla", titleModel: "Pilum romana", source: "https://sketchfab.com/models/86f390ec545e4529801d2f059cdfd982/embed" },
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
					title="Armamento en el Imperio Romano" 
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
			<LessonNav urlbef="/Cristianismo_Imperio" mediabef="cristianismo.jpg" titlebef="CRISTIANISMO EN EL IMPERIO ROMANO" 
			           urlnxt="/Final_Imperio" medianxt="finalimperio.jpg"  titlenxt="FINAL DEL IMPERIO ROMANO"/>
		</div>
	);
};

export default LessonArmasImperio;