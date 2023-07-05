import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const LessonRecreacion = () => {
	const paragraphs = [
		`La recreación en la antigua Roma era una parte integral de la vida cotidiana y la cultura romana. Los romanos tenían una amplia variedad de actividades recreativas que abarcaban desde el entretenimiento en el hogar hasta los espectáculos masivos en los anfiteatros y teatros. Una de las formas más populares de recreación era la celebración de festivales religiosos y eventos deportivos. Estos eventos incluían carreras de carros, luchas de gladiadores, representaciones teatrales y competencias atléticas, que atraían a grandes multitudes y proporcionaban entretenimiento y emoción a los romanos.`,
		`Además de los eventos públicos, los romanos también disfrutaban de actividades recreativas más privadas. Pasaban tiempo en los baños públicos, donde podían socializar, relajarse y disfrutar de los beneficios para la salud de los baños termales. También se dedicaban a actividades deportivas como la caza, la equitación y el juego de pelota. Los romanos de todas las clases sociales tenían acceso a estos tipos de recreación, aunque los detalles y la magnitud de las actividades variaban según la posición social y la riqueza de cada individuo.`,
		`La recreación en Roma no solo se limitaba a los adultos, también se le daba importancia a la recreación de los niños. Los niños romanos tenían juguetes, como muñecas, animales de peluche y juegos de mesa, que les proporcionaban diversión y les enseñaban habilidades sociales y cognitivas. Además, participaban en actividades al aire libre, como juegos de pelota y carreras, que promovían el ejercicio físico y la socialización entre los jóvenes. La recreación infantil en la antigua Roma era considerada fundamental para el desarrollo integral de los niños y se veía como una preparación para su futuro papel en la sociedad romana.`,
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
				<LessonText title="Recreación en la Antigua Roma" paragraphs={paragraphs} />
				{/* Componente del modelo 3D */}
				<LessonModel description="Video sobre el entretenimiento en Roma" titleModel="Video sobre el entretenimiento en Roma" source="https://www.youtube.com/embed/IIE6fnRjLTQ" />
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav
				urlbef="/Educacion"
				mediabef="educacion.png"
				titlebef="LA EDUCACIÓN EN LA ANTIGUA ROMA"
				urlnxt="/Quiz_Cultura"
				medianxt="quiz.jpg"
				titlenxt="QUIZ (CULTURA)"
			/>
		</div>
	);
};

export default LessonRecreacion;
