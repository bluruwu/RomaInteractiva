import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = `Julio César fue un líder militar y político romano que vivió durante el periodo de la República Romana. 
                Nació en el año 100 a.C. en una familia patricia y demostró desde temprana edad su talento para la oratoria y el liderazgo. 
                A lo largo de su vida, César se destacó como un brillante estratega militar, conquistando vastos territorios para Roma y estableciendo su reputación como uno de los generales 
                más exitosos de su tiempo.`

const second = `Su carrera política también es elogiada. Fue elegido cónsul en el año 59 a.C., lo que le otorgó una gran influencia en el Senado Romano. 
                Aprovechando su popularidad y habilidad política, consolidó aún más su poder a través de alianzas y reformas políticas. 
                Estableció importantes reformas sociales y económicas en Roma, buscando el apoyo de las clases más bajas y generando cierta controversia entre los poderosos aristócratas.`

const third = ` Su ascenso provocó tensiones en Roma y, finalmente, llevó al fin de la República Romana. 
                En el año 49 a.C., cruzó el río Rubicón con sus legiones, desafiando las órdenes del Senado y dando inicio a una guerra civil. 
                César emergió victorioso, convirtiéndose en el dictador perpetuo de Roma en el 45 a.C. 
                Sin embargo, su poder y popularidad generaron resentimiento entre algunos senadores, y fue asesinado en el año 44 a.C. por un grupo de conspiradores liderados por Bruto y Casio,
                lo que marcó el fin de una era en la historia de Roma.`

const LessonJulioCesar = () => {

	return (
		<div className="font-text"> {/* Div principal */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				<LessonText 
					title="Julio César" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				<LessonModel description="Estatua de Julio Cesar" titleModel="Julio Cesar" source="https://sketchfab.com/models/dcd1c9c12ab44b8daca06481f6cdc78f/embed?ui_infos=0"/>
			</div>
			<LessonNav urlbef="/Romulo_Remo" mediabef="Romulusandremus.jpg" titlebef="RÓMULO Y REMO" 
			           urlnxt="/Augusto" medianxt="augustus.jpg"  titlenxt="AUGUSTO"/>
		</div>
	);
};

export default LessonJulioCesar;
