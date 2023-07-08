import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const LessonViviendas = () => {
	const paragraphs = [
		`En la antigua Roma, las viviendas eran un reflejo de la estructura social y la riqueza de sus habitantes. Las casas romanas variaban en tamaño y estilo, desde modestas viviendas de los plebeyos hasta lujosas villas de los aristócratas. Entre las residencias más destacadas se encontraban los domus, que eran las casas urbanas de las familias adineradas.`,
		`Las viviendas romanas, incluyendo los domus, se caracterizaban por su diseño centrado en un atrio central, un patio interior que solía tener un techo abierto para permitir la entrada de luz y la recolección de agua de lluvia en una piscina central llamada impluvium. Este espacio central era el corazón de la casa y se utilizaba para recibir visitas, realizar rituales religiosos y como lugar de reunión para la familia. Desde el atrio, se accedía a diferentes habitaciones y áreas especializadas.`,
		`Tanto las casas de los ricos y poderosos, como las viviendas de los plebeyos y los esclavos eran construidas con materiales como ladrillos y piedra. Sin embargo, mientras que los domus se destacaban por su amplitud, elegante arquitectura y rica decoración, las viviendas más modestas eran más pequeñas y sencillas en comparación. A menudo, varias familias vivían juntas en edificios de apartamentos conocidos como insulae, donde compartían espacios más reducidos.`,
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
				<LessonText title="Viviendas en la Antigua Roma" paragraphs={paragraphs} />
				{/* Componente del modelo 3D */}
				<LessonModel description="Video acerca de la Domus Romana" titleModel="Domus romana" source="https://www.youtube.com/embed/O4_2-qiWosE" />
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav
				urlbef="/Acueducto_Romano"
				mediabef="acueducto.jpg"
				titlebef="ACUEDUCTO DE LA ANTIGUA ROMA"
				urlnxt="/Educacion"
				medianxt="educacion.png"
				titlenxt="LA EDUCACIÓN EN LA ANTIGUA ROMA"
			/>
		</div>
	);
};

export default LessonViviendas;
