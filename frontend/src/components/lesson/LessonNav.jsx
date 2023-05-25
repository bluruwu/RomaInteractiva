import React from "react";
import { useNavigate } from "react-router-dom";

const LessonNav = ({urlbef, urlnxt, mediabef, medianxt, titlebef, titlenxt}) => {
    const navigate = useNavigate();
    
	return (
        <div className="flex flex-col md:flex-row bg-red-100">
                {/* Leccion anterior */}
            	<div
					className="w-full md:w-1/2 h-32 relative cursor-pointer"
					onClick={() => navigate(urlbef)}
				>
					<img
						src={require(`../../media/${mediabef}`)} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
						alt="Anterior leccion"
						className="block w-full h-full object-cover"
					/>
					{/* Opacidad de la imagen */}
					<div className="absolute inset-0 bg-black opacity-50"></div>

					{/* Texto que aparece sobre la imagen */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
						<p className="text-lg font-bold text-white">Anterior</p>
						<p className="text-lg font-bold text-white">{titlebef}</p>
					</div>
				</div>

                {/* Leccion siguiente */}
				<div
					className="w-full md:w-1/2 h-32 relative cursor-pointer"
					onClick={() => navigate(urlnxt)}
				>
					<img
						src={require(`../../media/${medianxt}`)} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
						alt="Siguiente leccion"
						className="block w-full h-full object-cover"
					/>
					{/* Opacidad de la imagen */}
					<div className="absolute inset-0 bg-black opacity-50"></div>

					{/* Texto que aparece sobre la imagen */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
						<p className="text-lg font-bold text-white">Siguiente</p>
						<p className="text-lg font-bold text-white">{titlenxt}</p>
					</div>
				</div>
        </div>
    );
};

export default LessonNav;