import React, { useState } from "react";
import logo from "../media/logos/logo.png";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import BusquedaAleatoria from "./randomSearch";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Navbar = () => {
	const navigate = useNavigate();

	// Obtener el valor del nickname del localStorage
	const nickname = JSON.parse(localStorage.getItem("nickname"));

	// Obtener el valor del id_avatar del localStorage
	const idAvatar = JSON.parse(localStorage.getItem("avatar_id"));

	//Redirigir al home
	const [goHome, setGoHome] = useState(false);
	//Cerrar sesion
	const [cerrarSesion, setCerrarSesion] = useState(false);
	//Obtener ruta de la pagina actual
	const location = useLocation();
	const isHome = location.pathname === "/home";
	const onProfile = location.pathname === "/perfil";

	// Redirigir al usuario según la existencia del nickname
	const handleNavigation = () => {
		//Si hay un nickname (esta logeado)
		if (nickname) {
			//Si esta en el perfil, recargar la pagina
			if (onProfile) {
				window.location.reload();
			} else {
				//Si no esta en el perfil, redirigir a perfil
				navigate("/perfil");
			}
		} else {
			//Si no esta logeado, llevar a login
			navigate("/login");
		}
	};

	//Redirigir a home
	if (goHome) {
		//Si esta en home, recargar la pagina
		if (isHome) {
			window.location.reload();
		} else {
			//Si no esta en home, redirigir a la pagina
			return <Navigate to="/home" />;
		}
	}

	//Cerrar sesion
	if (cerrarSesion) {
		//Limpiar toda la informacion del usuario incluido el token
		localStorage.clear();

		//Si esta en la pagina de perfil, redirigir al home
		if (onProfile) {
			return <Navigate to="/home" />;
		} else {
			//Si no, recargar la pagina
			window.location.reload();
		}
	}

	return (
		<nav className="bg-custom-rojo">
			<div className="flex justify-between mx-4 md:mx-20">
				<div className="flex items-center -space-x-3 cursor-pointer" onClick={setGoHome}>
					<button>
						<img
							src={logo}
							alt="Logo"
							className="w-20 md:w-32 md:h-auto h-auto min-h-[40px] min-w-[70px]"
						></img>
					</button>
					<button>
						<span className="text-base md:text-xl ml-2 font-text font-regular text-custom-doradonormal whitespace-nowrap">
							Roma Interactiva
						</span>
					</button>
				</div>

				{/* Barra de busqueda, texto y avatar */}
				<ul className="flex space-x-4 items-center">
					{/* Barra de busqueda */}
					<BusquedaAleatoria />
					<li className="ml-20 mr-20 hidden md:block">
						<SearchBar />
					</li>
					{/* Texto que muestra "Iniciar sesion" o el nickname del usuario si esta logeado */}
					<li>
						<a
							id="iniciarsesion"
							onClick={handleNavigation}
							className="font-text font-regular text-custom-doradonormal hover:text-white hidden md:block cursor-pointer sm:hidden"
						>
							{nickname ? nickname : "Iniciar sesión"}
						</a>
					</li>

					{/* Avatar */}
					<li className="relative">
						{/* Popover para mostrar el menu de "Mi Perfil" y "Cerrar sesion" usando liberia HEADLESSUI*/}
						<Popover position="relative">
							{({ open }) => (
								<>
									{/* Activar el popover */}
									<Popover.Button className="focus:outline-none cursor-pointer">
										{/* Si el usuario esta logeado, mostrar su avatar, si no mostrar el avatar generico */}
										<div className="w-14 h-14 rounded-full bg-gray-200">
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
													onClick={handleNavigation}
												/>
											)}
										</div>
									</Popover.Button>
									{/* Si esta logeado, mostrar el menu popover */}
									{nickname && (
										// Animacion del popover
										<Transition
											show={open}
											as={Fragment}
											enter="transition ease-out duration-200"
											enterFrom="opacity-0 scale-95"
											enterTo="opacity-100 scale-100"
											leave="transition ease-in duration-150"
											leaveFrom="opacity-100 scale-100"
											leaveTo="opacity-0 scale-95"
										>
											{/* Menu que se muestra al hacer clic */}
											<Popover.Panel
												static
												className="z-20 absolute bg-white rounded border-2 shadow-lg w-48"
												style={{ right: "0", marginTop: "1rem" }}
											>
												{/* Botones que se encuentran en el popover */}
												<div className="text-black text-left text-xs font-bold">
													<button
														className="hover:bg-custom-doradonormal py-3 px-4 rounded inline-block cursor-pointer text-xs whitespace-nowrap w-full text-left bg-white bg-opacity-75 backdrop-filter backdrop-blur-sm z-20"
														onClick={handleNavigation}
														style={{ backdropFilter: "blur(4px)" }}
													>
														Mi perfil
													</button>
													<button
														className="hover:bg-custom-doradonormal py-3 px-4 rounded inline-block cursor-pointer text-xs whitespace-nowrap w-full text-left bg-white bg-opacity-75 backdrop-filter backdrop-blur-sm mt-2 z-20"
														onClick={setCerrarSesion}
														style={{ backdropFilter: "blur(4px)" }}
													>
														Cerrar sesión
													</button>
												</div>
											</Popover.Panel>

										</Transition>
									)}
								</>
							)}
						</Popover>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
