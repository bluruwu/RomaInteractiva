import React, { useState } from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const LessonFundacionRoma = () => {
	const paragraphs = [
		`La fundación de Roma como una monarquía se remonta a la antigüedad y está envuelta en leyendas y mitos. Según la tradición, la ciudad de Roma fue fundada en el año 753 a.C. por Rómulo, quien se convirtió en el primer rey. La historia temprana de Roma se basa en gran medida en la obra 'Ab urbe condita' escrita por Tito Livio. Aunque muchas de las historias anteriores a la República temprana son consideradas legendarias, se cree que Rómulo estableció las bases de la estructura política y social de la incipiente ciudad. Dividió la población en tribus y curias, y estableció un senado compuesto por líderes locales.`,
		`La leyenda cuenta que Rómulo y su hermano Remo fueron abandonados en el río Tíber y criados por una loba. Al crecer, decidieron fundar una ciudad en el lugar donde fueron encontrados. Sin embargo, surgieron disputas entre los hermanos sobre quién gobernaría la nueva ciudad. La disputa terminó trágicamente cuando Rómulo mató a Remo y se convirtió en el primer rey de Roma. Bajo su reinado, se estableció la monarquía y se sentaron las bases para el futuro desarrollo de la ciudad.`,
		`Aunque la fundación de Roma como una monarquía se basa en la tradición y la mitología, ha dejado un impacto duradero en la historia y la cultura romanas. La monarquía romana sentó las bases de la futura República y posteriormente del Imperio, y su legado continúa influyendo en la concepción del poder y la organización política en el mundo antiguo y más allá.`,
	];

	return (
		<div className="font-text flex flex-col min-h-screen">
			{/* Barra de navegación */}
			<Navbar />

			<div className="flex lg:flex-grow flex-col lg:flex-row relative">
				<LessonText title="Fundación de Roma" paragraphs={paragraphs} />
				<LessonModel
					description="La leyenda de Rómulo y Remo, y la fundación de Roma"
					titleModel="La leyenda de Rómulo y Remo, y la fundación de Roma"
					source="https://www.youtube.com/embed/EX5pcki0DGw"
				/>
			</div>

			{/* Navegación entre lecciones */}
			<LessonNav
				urlbef="/home"
				mediabef="plazaSanPedro.jpg"
				titlebef="VOLVER A INICIO"
				urlnxt="/Reyes_de_Roma"
				medianxt="monarquia2.png"
				titlenxt="REYES DE ROMA"
				last={false}
				quiz={"monarquia"}
			/>
		</div>
	);
};

export default LessonFundacionRoma;
