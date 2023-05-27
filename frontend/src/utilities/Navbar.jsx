import React from "react";
import logo from "../media/logo.png";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<nav className="bg-custom-rojo">
			<div className="flex justify-between mx-20">
				<div className="flex items-center -space-x-3">
					<a onClick={() => navigate("/home")}>
						<img src={logo} alt="Logo" className="w-32 h-auto"></img>
					</a>
					<a onClick={() => navigate("/home")}>
						<span className="text-xl ml-2 font-text font-regular text-custom-doradonormal">
							Roma Interactiva
						</span>
					</a>
				</div>

				<ul className="flex space-x-4 items-center">
					<li className="ml-20 mr-20">
						<SearchBar />
					</li>
					<li>
						<a
							id="iniciarsesion"
							onClick={() => navigate("/login")}
							className="font-text font-regular text-custom-doradonormal hover:text-white"
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
