import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = `El Coliseo Romano, también conocido como Anfiteatro Flavio, es uno de los monumentos más emblemáticos y reconocibles de la antigua Roma. Construido en el siglo I d.C., este impresionante anfiteatro es una maravilla arquitectónica que ha perdurado a lo largo de los siglos. Con una capacidad para albergar a más de 50.000 espectadores, el Coliseo era el escenario principal para los juegos públicos romanos, incluyendo las famosas luchas de gladiadores.`

const second = `El Coliseo se caracteriza por su diseño innovador y su ingeniería avanzada. Construido principalmente de piedra y hormigón, el anfiteatro tiene una forma elíptica con una serie de niveles de asientos, divididos en secciones según la clase social. La estructura cuenta con numerosos arcos y columnas, lo que le da un aspecto grandioso y majestuoso. Además, el Coliseo cuenta con un intrincado sistema de pasillos y túneles subterráneos que permitían el acceso rápido de los gladiadores y animales a la arena.`

const third = `A lo largo de los siglos, el Coliseo ha sufrido daños causados por terremotos, saqueos y la acción del tiempo. Sin embargo, a pesar de las ruinas, sigue siendo un testimonio impresionante de la grandeza de la antigua Roma y su cultura. Hoy en día, el Coliseo es uno de los destinos turísticos más populares del mundo, y ha sido designado como Patrimonio de la Humanidad por la UNESCO. Es un símbolo perdurable de la historia romana y un recordatorio de la importancia de preservar y valorar nuestro legado cultural.`

const LessonColiseo = () => {

	return (
		<div className="font-text"> {/* Div principal */}
		{/* Barra de navegación */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				{/* Componente de texto de la lección */}
				<LessonText 
					title="Coliseo Romano" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				{/* Componente del modelo 3D */}
				<LessonModel description="Modelo 3D Coliseo Romano" titleModel="Coliseo Romano" source="https://sketchfab.com/models/544c64b6445e4899a17350c949b7766a/embed"/>
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav urlbef="/Augusto" mediabef="augustus.jpg" titlebef="AUGUSTO" 
			           urlnxt="/Panteon_Agripa" medianxt="panteon.jpg"  titlenxt="PANTEÓN DE AGRIPA"/>
		</div>
	);
};

export default LessonColiseo;