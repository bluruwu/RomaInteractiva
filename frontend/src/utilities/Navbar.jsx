import React, { useState } from "react";
import logo from "../media/logos/logo.png";
import SearchBar from "./SearchBar";
import NavBarGames from "../components/navbar/NavBarGames";
import BusquedaAleatoria from "./randomSearch";
import Swal from "sweetalert2";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { getAPI_URL } from "../conections/requests";
import { useNavigate, Navigate, useLocation } from "react-router-dom";

const Navbar = ({ inQuiz }) => {
	const API_URL = getAPI_URL();
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
	const isHome = location.pathname === "/" || location.pathname === "/home";
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

	//Si no hay avatar, verificar si el usuario no esta logeado para redirigirlo a LOGIN
	const handleNavigationLoggedOut = () => {
		if (!nickname) {
			navigate("/login");
		}
	};

	//Redirigir a home
	if (goHome) {
		//Si esta en home, recargar la pagina
		if (isHome) {
			window.location.reload();
		} else {
			if (inQuiz) {
				Swal.fire({
					title: "¿Estás seguro que quieres salir?",
					showCancelButton: true,
					confirmButtonText: "Sí",
					confirmButtonColor: "#03ac13",
					customClass: {
						container: "font-text", // Cambiar la fuente del título
					},
				}).then((result) => {
					/* Read more about isConfirmed, isDenied below */
					if (result.isConfirmed) {
						navigate("/home");
					} else {
						setGoHome(false);
					}
				});
			} else return <Navigate to="/home" />;
		}
	}

	//Cerrar sesion
	if (cerrarSesion) {
		//Limpiar toda la informacion del usuario incluido el token
		localStorage.clear();
		window.localStorage.clear(); //try this to clear all local storage

		//Si esta en la pagina de perfil, redirigir al home
		if (onProfile) {
			return <Navigate to="/home" />;
		} else {
			//Si no, recargar la pagina
			window.location.reload();
		}
	}

	return (
		<nav className={`bg-custom-rojo ${isHome ? "sticky top-0 left-0 w-full z-50" : ""}`}>
			<div className="flex justify-between mx-4 md:mx-20 ">
				{/* Logo y titulo */}
				<div id="logo" className="flex items-center -space-x-3 cursor-pointer" onClick={setGoHome}>
					<button>
						<img
							src={logo}
							alt="Logo"
							className="w-20 md:w-32 py-2 md:py-1 md:h-auto h-auto min-h-[40px] min-w-[70px]"
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
					{/* Boton que redirige al menu con los diferentes juegos */}
					<div className="hidden xl:block">
						<NavBarGames text="Juegos" path="/games" />
					</div>

					{/* Barra de busqueda */}
					<div className="hidden xl:block">
						<BusquedaAleatoria />
					</div>

					<li className="ml-20 mr-20 hidden xl:block">
						<SearchBar />
					</li>

					{/* Texto que muestra "Iniciar sesion" o el nickname del usuario si esta logeado */}
					<li>
						<a
							id="iniciarsesion"
							onClick={handleNavigation}
							className="font-text font-regular text-custom-doradonormal hover:text-white hidden cursor-pointer xl:block"
						>
							{nickname ? nickname : "Iniciar sesión"}
						</a>
					</li>

					{/* MENU DE HAMBURGUESA */}
					<li className="relative block xl:hidden">
						<Popover position="relative">
							{({ open }) => (
								<>
									{/* Activar el popover */}
									<Popover.Button className="focus:outline-none cursor-pointer">
										<button className="text-white">
											<svg
												className="w-8 h-8"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M4 6h16M4 12h16M4 18h16"
												/>
											</svg>
										</button>
									</Popover.Button>
									{/* // Animacion del popover */}
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
											className="z-20 absolute bg-gray-100 shadow-xl p-4 w-screen sm:w-max mt-3 sm:right-0 -right-4 sm:mt-5 sm:rounded-xl bg-opacity-70 backdrop-blur-md"
										>
											{/* NOMBRE DE USUARIO (O LOGIN) Y AVATAR */}
											<div className="flex justify-end items-center ">
												<a
													id="iniciarsesion"
													onClick={handleNavigation}
													className="text-black cursor-pointer pr-3"
												>
													{nickname ? nickname : "Iniciar sesión"}
												</a>

												<div
													className="w-14 h-14 rounded-full bg-gray-200"
													onClick={handleNavigation}
												>
													{idAvatar ? (
														<img
															alt="Avatar del usuario"
															src={
																idAvatar < 7
																	? process.env.PUBLIC_URL + `/avatars/avatar${idAvatar}.svg`
																	: `${API_URL}/image/avatar${idAvatar}.jpg`
															}
															className="w-14 h-14 border-2 inline border border-custom-doradodark rounded-full"
														/>
													) : (
														<img
															alt="Avatar del usuario"
															src={process.env.PUBLIC_URL + `/avatars/usericon.png`}
															className="w-14 h-14 border-2 inline border-custom-doradodark rounded-full"
														/>
													)}
												</div>
											</div>

											<div>
												<SearchBar />
											</div>

											<div className="flex justify-end py-1">
												<BusquedaAleatoria />
											</div>

											{/* BOTON PARA IR A JUEGOS */}
											<div className="flex justify-end py-2">
												<NavBarGames text="Juegos" path="/games" />
											</div>

											{nickname && (
												<div className="flex justify-end">
													<button
														className="py-2 cursor-pointer whitespace-nowrap mt-2 z-20 font-bold"
														onClick={setCerrarSesion}
													>
														Cerrar sesión
													</button>
												</div>
											)}
										</Popover.Panel>
									</Transition>
								</>
							)}
						</Popover>
					</li>

					{/* /////////////////// */}
					{/* Avatar */}
					<li className="relative  hidden xl:block">
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
													src={
														idAvatar < 7
															? process.env.PUBLIC_URL + `/avatars/avatar${idAvatar}.svg`
															: `${API_URL}/image/avatar${idAvatar}.jpg`
													}
													className="w-14 h-14 border-2 inline border-custom-doradodark rounded-full"
												/>
											) : (
												<img
													alt="Avatar del usuario"
													src={process.env.PUBLIC_URL + `/avatars/usericon.png`}
													className="w-14 h-14 border-2 inline border-custom-doradodark rounded-full"
													//Si no hay avatar
													onClick={handleNavigationLoggedOut}
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
												className="z-20 absolute bg-white rounded border-2 shadow-xl w-48"
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
