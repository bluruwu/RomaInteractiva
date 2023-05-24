import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../utilities/Navbar";
import HomeButton from "../../utilities/HomeButton";

const Lesson = () => {
	const navigate = useNavigate();

	return (
		<div className="font-text">
			<Navbar />
			{/* Contenido de la leccion y modelo */}
			<div className="mb-4 flex flex-col md:flex-row  ">
				{/* Contenido de la columna izquierda (Boton HOME, titulo y contenido de la leccion) */}
				<div className=" w-full md:w-1/2 p-14">
					{/* Icono y titulo de HOME */}

					<HomeButton />

					{/* Titulo de la leccion */}
					<div className="mb-10 text-3xl ">
						<p className=" font-bold text-center filter drop-shadow-lg">Fundación de Roma</p>
					</div>

					{/* Contenido - texto de la leccion */}
					<div>
						<p className="text-justify mb-4">
							La fundación de Roma como una monarquía se remonta a la antigüedad y está envuelta en
							leyendas y mitos. Según la tradición, la ciudad de Roma fue fundada en el año 753 a.C.
							por Rómulo, quien se convirtió en el primer rey. La historia temprana de Roma se basa
							en gran medida en la obra "Ab urbe condita" escrita por Tito Livio. Aunque muchas de
							las historias anteriores a la República temprana son consideradas legendarias, se cree
							que Rómulo estableció las bases de la estructura política y social de la incipiente
							ciudad. Dividió la población en tribus y curias, y estableció un senado compuesto por
							líderes locales.
						</p>
						<p className="text-justify mb-4">
							La leyenda cuenta que Rómulo y su hermano Remo fueron abandonados en el río Tíber y
							criados por una loba. Al crecer, decidieron fundar una ciudad en el lugar donde fueron
							encontrados. Sin embargo, surgieron disputas entre los hermanos sobre quién gobernaría
							la nueva ciudad. La disputa terminó trágicamente cuando Rómulo mató a Remo y se
							convirtió en el primer rey de Roma. Bajo su reinado, se estableció la monarquía y se
							sentaron las bases para el futuro desarrollo de la ciudad.
						</p>
						<p className="text-justify mb-4">
							Aunque la fundación de Roma como una monarquía se basa en la tradición y la mitología,
							ha dejado un impacto duradero en la historia y la cultura romanas. La monarquía romana
							sentó las bases de la futura República y posteriormente del Imperio, y su legado
							continúa influyendo en la concepción del poder y la organización política en el mundo
							antiguo y más allá.
						</p>
					</div>
				</div>

				{/* Columna derecha que contiene el modelo 3D y la descripcion en el recuadro amarillo */}
				<div className="w-full md:w-1/2 flex relative sketchfab-embed-wrapper">
					{" "}
					<iframe
						title="Romulus & Remus"
						frameborder="0"
						allowfullscreen
						mozallowfullscreen="true"
						webkitallowfullscreen="true"
						allow="autoplay; fullscreen; xr-spatial-tracking"
						xr-spatial-tracking
						execution-while-out-of-viewport
						execution-while-not-rendered
						web-share
						src="https://sketchfab.com/models/3d839aadacb34322b1d1dd48dc2a818b/embed"
						className="w-full"
					>
						{" "}
					</iframe>{" "}
					{/* <img
						src={require("./plaza_san_pedro.jpg")} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
						alt="Imagen de fondo"
						className="block w-full h-full object-cover"
					/> */}
					{/* Descripcion del modelo 3D */}
					<div className="flex font-bold items-end justify-end absolute bottom-14 right-8 p-3 bg-custom-dorado rounded-md shadow-xl ">
						<p>Rómulo y Remo criados por una loba</p>
					</div>
				</div>
			</div>

			{/* Parte inferior para el cambio de lecciones */}
			<div className="flex flex-col md:flex-row bg-red-100">
				{/* Leccion anterior */}
				<div
					className="w-full md:w-1/2 h-32 relative cursor-pointer"
					onClick={() => navigate("/home")}
				>
					<img
						src={require("./plaza_san_pedro.jpg")} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
						alt="Anterior leccion"
						className="block w-full h-full object-cover"
					/>
					{/* Opacidad de la imagen */}
					<div className="absolute inset-0 bg-black opacity-50"></div>

					{/* Texto que aparece sobre la imagen */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
						<p className="text-lg font-bold text-white">Anterior</p>
						<p className="text-lg font-bold text-white">VOLVER A INICIO</p>
					</div>
				</div>

				{/* Leccion siguiente */}
				<div
					className="w-full md:w-1/2 h-32 relative cursor-pointer"
					onClick={() => navigate("/lesson")}
				>
					<img
						src={require("./monarquia2.png")} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
						alt="Siguiente leccion"
						className="block w-full h-full object-cover"
					/>
					{/* Opacidad de la imagen */}
					<div className="absolute inset-0 bg-black opacity-50"></div>

					{/* Texto que aparece sobre la imagen */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
						<p className="text-lg font-bold text-white">Siguiente</p>
						<p className="text-lg font-bold text-white">REYES DE LA MONARQUÍA</p>
					</div>
				</div>

				{/* PRUEBA */}
				{/* <div class="sketchfab-embed-wrapper">
					{" "}
					<iframe
						title="Romulus & Remus"
						frameborder="0"
						allowfullscreen
						mozallowfullscreen="true"
						webkitallowfullscreen="true"
						allow="autoplay; fullscreen; xr-spatial-tracking"
						xr-spatial-tracking
						execution-while-out-of-viewport
						execution-while-not-rendered
						web-share
						src="https://sketchfab.com/models/3d839aadacb34322b1d1dd48dc2a818b/embed"
					>
						{" "}
					</iframe>{" "}
				</div> */}
				{/* AAA */}
			</div>
		</div>
	);
};

export default Lesson;
