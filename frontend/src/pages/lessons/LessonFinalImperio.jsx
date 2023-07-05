import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const LessonFinalImperio = () => {
	const paragraphs = [
		`El fin del Imperio Romano marcó un período de profundos cambios y transformaciones en la 
				historia. Muchos factores contribuyeron a su colapso gradual a lo largo de varios siglos. Uno de los 
				factores clave fue la presión y los ataques constantes de los pueblos bárbaros. Durante 
				el siglo V, grupos como los visigodos, ostrogodos, vándalos y otros invadieron y saquearon 
				las provincias romanas. Estos pueblos germánicos encontraron debilidades en la estructura 
				militar y económica del imperio, y sus incursiones continuas socavaron la autoridad romana 
				y desestabilizaron las regiones.`,
		`Además de las invasiones bárbaras, el deterioro interno del imperio también fue un factor 
				determinante en su caída. La corrupción, la inestabilidad política, la economiá decayente y 
				la falta de liderazgo eficaz minaron las instituciones gubernamentales. Los emperadores 
				se sucedieron rápidamente, 
				a menudo a través de asesinatos o golpes de Estado, y la falta de estabilidad política 
				debilitó aún más la capacidad del imperio para hacer frente a las amenazas externas.`,
		`En conjunto, estos factores contribuyeron al colapso del Imperio Romano. Aunque el imperio 
				se dividió en dos partes en el siglo III (Imperio Romano de Occidente e Imperio Romano de 
				Oriente), el Occidente finalmente sucumbió a las presiones externas e internas, y el último 
				emperador romano de Occidente fue depuesto en el año 476 d.C. Este evento marcó el fin 
				simbólico del Imperio Romano de Occidente y el comienzo de una nueva era en Europa.`,
	];

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
				<LessonText title="Final del Imperio Romano" paragraphs={paragraphs} />
				{/* Componente del modelo 3D */}
				<LessonModel
					description="Video corto acerca de la caida del Imperio"
					titleModel="Caida del Imperio"
					source="https://www.youtube.com/embed/Lhko_AiDx2w"
				/>
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav
				urlbef="/Armas_Imperio"
				mediabef="armas.jpg"
				titlebef="ARMAMENTO EN EL IMPERIO ROMANO"
				urlnxt="/Quiz_Imperio"
				medianxt="quiz.jpg"
				titlenxt="QUIZ (IMPERIO)"
			/>
		</div>
	);
};

export default LessonFinalImperio;
