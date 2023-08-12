import React from "react";

//Pie de pagina
const Footbar = () => {
	return (
		<footer className="bg-black py-8 bottom-0 w-full">
			<div className="flex flex-col md:flex-row justify-between font-text text-center text-white md:mx-20 2xl:mx-[calc((100%-1400px)/2)]">
				{/* SOBRE NOSOTROS  */}
				<div className="pb-8 md:pb-0">
					<p className="font-bold"> Sobre nosotros </p>
					<a
						href="https://github.com/bluruwu/romainteractiva"
						className="text-sm md:text-base"
						target="_blank"
						rel="noopener noreferrer"
					>
						github.com/bluruwu/romainteractiva
					</a>
				</div>

				{/* CONTACTO */}
				<div>
					<p className="font-bold"> Contáctanos </p>
					<p className="text-sm md:text-base"> romainteractiva@gmail.com </p>
				</div>
			</div>
		</footer>
	);
};

export default Footbar;
