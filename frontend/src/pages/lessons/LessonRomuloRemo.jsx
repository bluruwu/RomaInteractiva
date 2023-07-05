import React, { useState } from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";
import DropdownMenu from "../../utilities/modelosMultiples";

const first = `Rómulo y Remo son figuras legendarias en la mitología romana y desempeñaron un papel crucial en la fundación de la antigua ciudad de Roma. Según la historia, eran hijos de Rea Silvia, una princesa descendiente de Eneas, y fueron abandonados en las orillas del río Tíber. Allí, fueron amamantados y cuidados por una loba, hasta que fueron encontrados por un pastor llamado Faustulo, quien se hizo cargo de su crianza.`;

const second = `A medida que Rómulo y Remo crecían, se convirtieron en hombres fuertes y valientes. Sin embargo, surgieron conflictos entre ellos sobre quién debería ser el fundador de la ciudad que deseaban establecer en la región. Para resolver la disputa, acordaron buscar un augurio divino. Rómulo observó una serie de aves de presa, mientras que Remo vio un grupo de aves más tarde. Interpretando esto como una señal de los dioses, Rómulo fue declarado como el elegido para fundar la ciudad.`;

const third = `Sin embargo, la rivalidad entre los hermanos no se resolvió fácilmente. En un acto impulsivo, Rómulo construyó los muros de la nueva ciudad y, en un momento de enojo, mató a Remo por saltar por encima de ellos. Aunque este episodio trágico ensombreció su relación, Rómulo siguió adelante y bautizó a la ciudad con su propio nombre: Roma, que se convertiría en el epicentro de un vasto imperio que duraría siglos.`;

const LessonRomuloRemo = () => {
	const paragraphs = [
		`Rómulo y Remo son figuras legendarias en la mitología romana y desempeñaron un papel crucial en la fundación de la antigua ciudad de Roma. Según la historia, eran hijos de Rea Silvia, una princesa descendiente de Eneas, y fueron abandonados en las orillas del río Tíber. Allí, fueron amamantados y cuidados por una loba, hasta que fueron encontrados por un pastor llamado Faustulo, quien se hizo cargo de su crianza.`,
		`A medida que Rómulo y Remo crecían, se convirtieron en hombres fuertes y valientes. Sin embargo, surgieron conflictos entre ellos sobre quién debería ser el fundador de la ciudad que deseaban establecer en la región. Para resolver la disputa, acordaron buscar un augurio divino. Rómulo observó una serie de aves de presa, mientras que Remo vio un grupo de aves más tarde. Interpretando esto como una señal de los dioses, Rómulo fue declarado como el elegido para fundar la ciudad.`,
		`Sin embargo, la rivalidad entre los hermanos no se resolvió fácilmente. En un acto impulsivo, Rómulo construyó los muros de la nueva ciudad y, en un momento de enojo, mató a Remo por saltar por encima de ellos. Aunque este episodio trágico ensombreció su relación, Rómulo siguió adelante y bautizó a la ciudad con su propio nombre: Roma, que se convertiría en el epicentro de un vasto imperio que duraría siglos.`,
	];

	// Si se va agregar mas modelos, agregar este array. Se pueden agregar los modelos que se deseen, pero la idea es hacerlo comodo para el usuario.
	// Tienen una descripcion, aquello que saldra junto al modelo. titleModel es aquello que saldrá en las opciones, y source es el url del modelo.
	const otrosModelos = [
		{
			description: "Rómulo y Remo de Pequeños",
			titleModel: "Rómulo y Remo",
			source: "https://sketchfab.com/models/23ad914573fe46c49b510a736715a377/embed",
		},
		{
			description: "Tiber con Rómulo, Remo y Luperca",
			titleModel: "Tiber con Rómulo, Remo y Luperca",
			source: "https://sketchfab.com/models/4b90b61d1ad94456b957844dbaccc0a2/embed",
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
				<LessonText title="Rómulo y Remo" paragraphs={paragraphs} />
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
				urlbef="/Final_Imperio"
				mediabef="finalimperio.jpg"
				titlebef="FINAL DEL IMPERIO ROMANO"
				urlnxt="/Julio_Cesar"
				medianxt="juliocesar.jpg"
				titlenxt="JULIO CESAR"
			/>
		</div>
	);
};

export default LessonRomuloRemo;
