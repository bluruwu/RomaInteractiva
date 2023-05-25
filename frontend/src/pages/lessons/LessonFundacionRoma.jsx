import React from "react";
import Navbar from "../../utilities/Navbar";
import LessonText from "../../components/lesson/LessonText";
import LessonModel from "../../components/lesson/LessonModel";
import LessonNav from "../../components/lesson/LessonNav";

const first = `La fundación de Roma como una monarquía se remonta a la antigüedad y está envuelta en
				leyendas y mitos. Según la tradición, la ciudad de Roma fue fundada en el año 753 a.C.
				por Rómulo, quien se convirtió en el primer rey. La historia temprana de Roma se basa
				en gran medida en la obra "Ab urbe condita" escrita por Tito Livio. Aunque muchas de
				las historias anteriores a la República temprana son consideradas legendarias, se cree
				que Rómulo estableció las bases de la estructura política y social de la incipiente
				ciudad. Dividió la población en tribus y curias, y estableció un senado compuesto por
				líderes locales.`

const second = `	La leyenda cuenta que Rómulo y su hermano Remo fueron abandonados en el río Tíber y
				criados por una loba. Al crecer, decidieron fundar una ciudad en el lugar donde fueron
				encontrados. Sin embargo, surgieron disputas entre los hermanos sobre quién gobernaría
				la nueva ciudad. La disputa terminó trágicamente cuando Rómulo mató a Remo y se
				convirtió en el primer rey de Roma. Bajo su reinado, se estableció la monarquía y se
				sentaron las bases para el futuro desarrollo de la ciudad.`

const third = `Aunque la fundación de Roma como una monarquía se basa en la tradición y la mitología,
				ha dejado un impacto duradero en la historia y la cultura romanas. La monarquía romana
				sentó las bases de la futura República y posteriormente del Imperio, y su legado
				continúa influyendo en la concepción del poder y la organización política en el mundo
				antiguo y más allá.`

const LessonFundacionRoma = () => {

	return (
		<div className="font-text"> {/* Div principal */}
			<Navbar />
			<div className="mb-4 flex flex-col md:flex-row "> {/* Div del contenido + modelo */}
				<LessonText 
					title="Fundación de Roma" 
					firstparag = {first} 
					secondparag={second} 
					thirdparag={third}
				/> 
				<LessonModel description="Rómulo y Remo criados por una loba" titleModel="Romulus & Remus" source="https://sketchfab.com/models/3d839aadacb34322b1d1dd48dc2a818b/embed"/>
			</div>
			<LessonNav urlbef="/home" mediabef="plazaSanPedro.jpg" titlebef="VOLVER A INICIO" 
			           urlnxt="/Fundacion_de_Roma" medianxt="monarquia2.png"  titlenxt="REYES DE LA MONARQUÍA"/>
		</div>
	);
};

export default LessonFundacionRoma;
