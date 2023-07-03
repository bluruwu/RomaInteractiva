import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const LessonCristianismoImp = () => {

	const paragraphs = [
		`El cristianismo desempeñó un papel fundamental en la antigua Roma, una sociedad profundamente arraigada en la religión y la adoración de múltiples dioses. Durante los primeros siglos de nuestra era, el cristianismo comenzó como un movimiento minoritario en Roma, pero rápidamente ganó seguidores y se convirtió en una fuerza influyente en la vida religiosa y social del Imperio Romano.`,
		`Inicialmente, el cristianismo enfrentó la persecución y el rechazo por parte de las autoridades romanas. Los primeros cristianos fueron considerados una amenaza para el orden establecido y fueron objeto de persecuciones periódicas. Sin embargo, a pesar de estos desafíos, la fe cristiana continuó extendiéndose, en parte debido a la valentía y el martirio de los creyentes que estaban dispuestos a sacrificar sus vidas por su fe.`,
		`El cambio más significativo para el cristianismo en Roma ocurrió en el siglo IV d.C., cuando el emperador Constantino se convirtió al cristianismo y promulgó el Edicto de Milán en el año 313. Este edicto estableció la tolerancia religiosa y puso fin a la persecución de los cristianos en todo el imperio. A partir de ese momento, el cristianismo experimentó un rápido crecimiento y se convirtió en la religión dominante en Roma y en todo el Imperio Romano. Se construyeron magníficas iglesias y basílicas, y los líderes cristianos desempeñaron un papel importante en la vida política y social de la ciudad.`,
	];

	return (
		<div className="font-text"> {/* Div principal */}
		{/* Barra de navegación */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				{/* Componente de texto de la lección */}
				<LessonText 
					title="Cristianismo en el Imperio Romano" 
					paragraphs={paragraphs}
				/> 
				{/* Componente del modelo 3D */}
				<LessonModel description="Constantino, primer Emperador Cristiano" titleModel="Flavio Valerio Constantino" source="https://sketchfab.com/models/a1775d29c84941288f5bfe7497889f92/embed"/>
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav urlbef="/Colapso_Republica" mediabef="finalrepublica.jpg" titlebef="COLAPSO DE LA REPÚBLICA ROMANA" 
			           urlnxt="/Armas_Imperio" medianxt="armas.jpg"  titlenxt="ARMAMENTO EN EL IMPERIO ROMANO"/>
		</div>
	);
};

export default LessonCristianismoImp;