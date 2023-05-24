import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../utilities/Navbar";

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
					<div className="mb-4 ">
						<img
							src={require("./homeicon.png")} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
							alt="Imagen de fondo"
							className="block  object-cover w-11 h-11 cursor-pointer"
							onClick={() => navigate("/home")}
						/>
						<p className=" font-bold cursor-pointer" onClick={() => navigate("/home")}>
							Home
						</p>
					</div>

					{/* Titulo de la leccion */}
					<div className="mb-10 text-3xl ">
						<p className=" font-bold text-center filter drop-shadow-lg">Fundación de Roma</p>
					</div>

					{/* Contenido - texto de la leccion */}
					<div>
						<p className="text-justify mb-4">
							La fundación de Roma como una monarquía es un tema enraizado en la mitología y la
							historia antigua. Según la tradición, la ciudad de Roma fue fundada en el año 753 a.C.
							por Rómulo, quien se convirtió en su primer rey.
						</p>
						<p className="text-justify mb-4">
							La historia temprana de Roma se describe en gran parte en la obra "Ab urbe condita"
							(Desde la fundación de la ciudad) escrita por Tito Livio, un historiador romano del
							siglo I a.C., aunque muchas de las historias y eventos anteriores a la República
							temprana son considerados legendarios.
						</p>
						<p className="text-justify mb-4">
							La disputa llegó a su fin cuando Rómulo mató a Remo y se convirtió en el primer rey de
							Roma. Rómulo gobernó como un monarca absoluto y estableció las bases de la estructura
							política y social de la incipiente ciudad. Según la tradición, Rómulo también fue
							responsable de dividir la población en tribus y curias, y estableció un senado
							compuesto por líderes locales.
						</p>
						<p className="text-justify">
							El reinado de Rómulo fue seguido por una serie de reyes, conocidos como los siete
							reyes de Roma. Cada uno de estos reyes gobernó durante un período de tiempo variable y
							se les atribuyeron diferentes logros en la historia temprana de Roma. Algunos de los
							reyes más conocidos incluyen a Numa Pompilio, quien se dice que introdujo las
							instituciones religiosas y legales, y Tarquinio el Soberbio, quien fue el último rey
							antes de la expulsión de la monarquía y el establecimiento de la República en el año
							509 a.C.
						</p>
					</div>
				</div>

				{/* Columna derecha que contiene el modelo 3D y la descripcion en el recuadro amarillo */}
				<div className="w-full md:w-1/2 flex relative">
					<img
						src={require("./plaza_san_pedro.jpg")} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
						alt="Imagen de fondo"
						className="block w-full h-full object-cover"
					/>
					{/* Descripcion del modelo 3D */}
					<div className="flex items-end justify-end absolute bottom-8 right-8 p-2 bg-custom-dorado rounded-md">
						<p>Descripción modelo 3D</p>
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
			</div>
		</div>
	);
};

export default Lesson;
