import React from "react";
import logo from "../media/logo.png";

const Navbar = () => {
	return (
		<nav className="bg-custom-rojo">
			<div className="flex justify-between mx-20">
				<div className="flex items-center -space-x-3">
					<img src={logo} alt="Logo" className="w-32 h-auto"></img>
					<span className="text-xl ml-2 font-text font-regular text-custom-dorado">
						Roma Interactiva
					</span>
				</div>

				<ul className="flex space-x-4 items-center">
					<li>
						<a
							href="/login"
							className="font-text font-regular text-custom-dorado hover:text-gray-300"
						>
							Iniciar sesión
						</a>
					</li>
					<li>
						<div className="w-14 h-14 rounded-full bg-gray-300"></div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
