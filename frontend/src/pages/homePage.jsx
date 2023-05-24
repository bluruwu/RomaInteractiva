import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../utilities/Navbar";
import Footbar from "../utilities/Footbar";
import Button from "../components/lessonButton";
import monarquiaImage from "../media/prev1.jpg";
import republicaImage from "../media/prev2.png";
import imperioImage from "../media/prev3.png";
import augustoImage from "../media/prev4.png";
import coliseoImage from "../media/prev5.png";
import domusImage from "../media/prev6.png";

const HomePage = () => {
	const Title = () => {
		return (
			<div className="relative h-80 font-text">
				<img
					className="absolute inset-0 w-full h-full object-cover brightness-50"
					src={process.env.PUBLIC_URL + "/images/fondo.jpg"}
					alt="Imagen de fondo"
				/>
				<div className="relative z-10 flex items-center justify-center h-full">
					<h1 className="font-bold text-4xl text-white">
						¡Bienvenido a nuestra página sobre la gloriosa cultura Romana!
					</h1>
				</div>
			</div>
		);
	};

	return (
		<div className="font-text">
			<Navbar />
			{Title()}

			<main className="flex flex-col gap-y-20 m-12">
				{/* Seccion ETAPAS */}
				<section>
					<h1 className="font-bold text-3xl text-black"> Etapas</h1>
					<div className="flex justify-center gap-x-24 mt-8">
						<Button
							image={"images/monarquia.jpeg"}
							hoverImage={monarquiaImage}
							onClick={console.log("jeje")}
							buttonText={"La Monarquía"}
							number={4}
						/>
						<Button
							image={"images/republica.jpg"}
							hoverImage={republicaImage}
							onClick={console.log("jeje")}
							buttonText={"La República"}
							number={2}
						/>
						<Button
							image={"images/imperio.jpg"}
							hoverImage={imperioImage}
							onClick={console.log("jeje")}
							buttonText={"El Imperio"}
							number={5}
						/>
					</div>
				</section>

				{/* Seccion LOS ROMANOS */}
				<section>
					<h1 className="font-bold text-3xl text-black"> Los Romanos</h1>
					<div className="flex justify-center gap-x-24 mt-8">
						<Button
							image={"images/julio.png"}
							onClick={console.log("jeje")}
							hoverImage={augustoImage}
							buttonText={"Personajes"}
							number={3}
						/>
						<Button
							image={"images/coliseo.jpg"}
							onClick={console.log("jeje")}
							hoverImage={coliseoImage}
							buttonText={"Arquitectura"}
							number={4}
						/>
						<Button
							image={"images/cultura.jpg"}
							hoverImage={domusImage}
							onClick={console.log("jeje")}
							buttonText={"Cultura"}
							number={1}
						/>
					</div>
				</section>
			</main>

			<footer>
				<Footbar />
			</footer>
		</div>
	);
};

export default HomePage;
