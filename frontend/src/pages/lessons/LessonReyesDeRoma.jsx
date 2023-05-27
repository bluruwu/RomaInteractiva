import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = `Después de la misteriosa desaparición de Rómulo, el fundador de Roma, la ciudad fue gobernada 
                por una serie de reyes legendarios. Estos reyes, conocidos como los "reyes de Roma" o 
                "los siete reyes", gobernaron durante un período de casi dos siglos, desde aproximadamente 
                el siglo VIII a.C. hasta el año 509 a.C. Aunque la historia de estos reyes está envuelta en 
                mitos y leyendas, su legado ha dejado una profunda influencia en la posterior historia y 
                cultura romana.`

const second = `	El segundo rey, después de Rómulo, fue Numa Pompilio, quien se dice que fue elegido 
                por el senado y el pueblo para suceder al fundador de Roma. Numa fue conocido por su 
                sabiduría y piedad religiosa. Durante su reinado, estableció muchas de las instituciones 
                religiosas y culturales que se convirtieron en parte integral de la identidad romana, 
                incluyendo el calendario lunar y los colegios de sacerdotes. Además, Numa fue reconocido 
                por su énfasis en la paz y la justicia, estableciendo leyes y regulaciones para promover 
                la armonía dentro de la ciudad.`

const third = `El último de los reyes de Roma fue Tarquinio el Soberbio, un rey etrusco que llegó al poder 
                a través de la violencia y la opresión. A diferencia de sus predecesores, Tarquinio gobernó 
                como un tirano, sin respetar las tradiciones y las instituciones establecidas. Su gobierno 
                despótico y la brutalidad de su familia desencadenaron un sentimiento de resentimiento en 
                el pueblo romano, lo que finalmente condujo a la abolición de la monarquía y el 
                establecimiento de la República en el año 509 a.C.`

const LessonReyesDeRoma = () => {

	return (
		<div className="font-text"> {/* Div principal */}
        {/* Barra de navegación */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				{/* Componente de texto de la lección */}
                <LessonText 
					title="Reyes de Roma" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
                {/* Componente del modelo 3D */}
				<LessonModel description="Templo de Vesta, fundado por Numa Pompilio" titleModel="Temple of Vesta" source="https://sketchfab.com/models/8bdf295b9ff04e3a9fe0f62a0017c120/embed"/>
			</div>
            {/* Navegación entre lecciones */}
			<LessonNav urlbef="/Fundacion_de_Roma" mediabef="fundacionroma.jpg" titlebef="FUNDACIÓN DE ROMA" 
			           urlnxt="/Final_Monarquia" medianxt="finalmonarquia.jpg"  titlenxt="FINALIZACIÓN DE LA MONARQUÍA"/>
		</div>
	);
};

export default LessonReyesDeRoma;