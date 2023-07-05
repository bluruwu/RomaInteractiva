import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const LessonEducacion = () => {
	const paragraphs = [
		`En la antigua Roma, la educación era altamente valorada y desempeñaba un papel fundamental en la sociedad. Comenzaba en el hogar, donde los padres transmitían valores y principios morales a sus hijos desde temprana edad. Además, los niños de familias adineradas tenían la oportunidad de contratar tutores privados para recibir una educación más formal.`,
		`A medida que los niños romanos crecían, podían asistir a la escuela primaria conocida como "ludus litterarius". Allí aprendían a leer, escribir y realizar cálculos básicos. Los maestros, generalmente esclavos educados o libertos, enseñaban a través de la repetición y la memorización. El dominio del latín era el enfoque principal de la educación, ya que era la lengua de la élite romana.`,
		`Para aquellos que buscaban una educación más avanzada, existían las escuelas de gramática y retórica. Los estudiantes mayores estudiaban literatura, historia, filosofía y el arte de la retórica. Los maestros, conocidos como "grammatici" y "rhetorici", se enfocaban en desarrollar las habilidades de expresión oral y escrita. La educación en retórica era especialmente valorada, ya que permitía a los individuos destacarse en la política y en los tribunales romanos.`,
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
				<LessonText title="La educación en la Antigua Roma" paragraphs={paragraphs} />
				{/* Componente del modelo 3D */}
				<LessonModel description="Educación en la antigua Roma" titleModel="Video sobre la educación en Roma" source="https://www.youtube.com/embed/ZdEpgLqKVzg" />
			</div>
			{/* Navegación entre lecciones */}
			<LessonNav
				urlbef="/Viviendas"
				mediabef="viviendas.jpg"
				titlebef="VIVIENDAS EN LA ANTIGUA ROMA"
				urlnxt="/Recreacion"
				medianxt="recreacion.jpg"
				titlenxt="RECREACIÓN EN LA ANTIGUA ROMA"
			/>
		</div>
	);
};

export default LessonEducacion;
