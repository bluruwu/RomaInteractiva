import React from "react";
import logo from "../media/logos/logo.png";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
	const navigate = useNavigate();

	// Obtener el valor del nickname del localStorage
	const nickname = JSON.parse(localStorage.getItem("nickname"));

	// Obtener el valor del id_avatar del localStorage
	const idAvatar = JSON.parse(localStorage.getItem("avatar_id"));

	// Redirigir al usuario según la existencia del nickname
	const handleNavigation = () => {
		if (nickname) {
			navigate("/perfil");
		} else {
			navigate("/login");
		}
	};

	return (
		<nav className="bg-custom-rojo">
			<div className="flex justify-between mx-20">
				<div className="flex items-center -space-x-3">
					<a onClick={() => navigate("/home")}>
						<img src={logo} alt="Logo" className="w-32 h-auto"></img>
					</a>
					<a onClick={() => navigate("/home")}>
						<span className="text-xl ml-2 font-text font-regular text-custom-doradonormal whitespace-nowrap">
							Roma Interactiva
						</span>
					</a>
				</div>

				<ul className="flex space-x-4 items-center">
					<li className="ml-20 mr-20 hidden md:block">
						<SearchBar />
					</li>
					<li>
						<a
							id="iniciarsesion"
							onClick={handleNavigation}
							className="font-text font-regular text-custom-doradonormal hover:text-white hidden md:block"
						>
							{nickname ? nickname : "Iniciar sesión"}
						</a>
					</li>
					<li>
						<div className="w-14 h-14 rounded-full bg-gray-300 hidden md:block">
							{idAvatar && (
								<img
									src={process.env.PUBLIC_URL + `/avatars/avatar${idAvatar}.svg`}
									className="inline border-4 border-custom-doradodark object-cover rounded-full"
								/>
							)}
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
