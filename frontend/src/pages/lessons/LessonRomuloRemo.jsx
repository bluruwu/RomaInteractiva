import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = `Rómulo y Remo son figuras legendarias en la mitología romana y desempeñaron un papel crucial en la fundación de la antigua ciudad de Roma. Según la historia, eran hijos de Rea Silvia, una princesa descendiente de Eneas, y fueron abandonados en las orillas del río Tíber. Allí, fueron amamantados y cuidados por una loba, hasta que fueron encontrados por un pastor llamado Faustulo, quien se hizo cargo de su crianza.`

const second = `A medida que Rómulo y Remo crecían, se convirtieron en hombres fuertes y valientes. Sin embargo, surgieron conflictos entre ellos sobre quién debería ser el fundador de la ciudad que deseaban establecer en la región. Para resolver la disputa, acordaron buscar un augurio divino. Rómulo observó una serie de aves de presa, mientras que Remo vio un grupo de aves más tarde. Interpretando esto como una señal de los dioses, Rómulo fue declarado como el elegido para fundar la ciudad.`

const third = `Sin embargo, la rivalidad entre los hermanos no se resolvió fácilmente. En un acto impulsivo, Rómulo construyó los muros de la nueva ciudad y, en un momento de enojo, mató a Remo por saltar por encima de ellos. Aunque este episodio trágico ensombreció su relación, Rómulo siguió adelante y bautizó a la ciudad con su propio nombre: Roma, que se convertiría en el epicentro de un vasto imperio que duraría siglos.`

const LessonRomuloRemo = () => {

	return (
		<div className="font-text"> {/* Div principal */}
		{/* Barra de navegación */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				{/* Componente de texto de la lección */}
				<LessonText 
					title="Rómulo y Remo" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				{/* Componente del modelo 3D */}
				<LessonModel description="Rómulo y Remo de Pequeños" titleModel="Rómulo y Remo" source="https://sketchfab.com/models/23ad914573fe46c49b510a736715a377/embed"/>
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav urlbef="/Final_Imperio" mediabef="finalimperio.jpg" titlebef="FINAL DEL IMPERIO ROMANO" 
			           urlnxt="/Julio_Cesar" medianxt="juliocesar.jpg"  titlenxt="JULIO CESAR"/>
		</div>
	);
};

export default LessonRomuloRemo;