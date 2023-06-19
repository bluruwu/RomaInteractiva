import React from "react";
import logo from "../media/logos/logo.png";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import BusquedaAleatoria from "./randomSearch";

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
			<div className="flex justify-between mx-4 md:mx-20">
				<div className="flex items-center -space-x-3">
					<button onClick={() => navigate("/home")}>
						<img src={logo} alt="Logo" className="w-20 md:w-32 md:h-auto h-auto min-h-[40px] min-w-[70px]"></img>
					</button>
					<button onClick={() => navigate("/home")}>
						<span className="text-base md:text-xl ml-2 font-text font-regular text-custom-doradonormal whitespace-nowrap">
							Roma Interactiva
						</span>
					</button>
				</div>

				<ul className="flex space-x-4 items-center">
					<BusquedaAleatoria/>
					<li className="ml-20 mr-20 hidden md:block">
						<SearchBar />
					</li>
					<li>
						<a
							id="iniciarsesion"
							onClick={handleNavigation}
							className="font-text font-regular text-custom-doradonormal hover:text-white hidden md:block sm:hidden"
						>
							{nickname ? nickname : "Iniciar sesión"}
						</a>
					</li>
					<li>
						<div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-200 hidden md:block sm:hidden">
							{idAvatar ? (
								<img
									alt="Avatar del usuario"
									src={process.env.PUBLIC_URL + `/avatars/avatar${idAvatar}.svg`}
									className="inline border-4 border-custom-doradodark object-cover rounded-full"
								/>
							) : (
								<img
									alt="Avatar del usuario"
									src={process.env.PUBLIC_URL + `/avatars/usericon.png`}
									className="inline object-cover rounded-full"
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
