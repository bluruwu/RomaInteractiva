import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../utilities/Navbar";
import HomeButton from "../utilities/HomeButton";
import Modal from "../components/scores";
import ModalAvatar from "../components/chooseAvatar";
import { putActualizarPerfil } from "../conections/requests";
import Swal from "sweetalert2";
import "./css/perfil.css";

//Pagina del PERFIL DEL USUARIO
const Perfil = () => {
	// const navigate = useNavigate();
	//Logica de la actualizacion de campos del perfil del usuario
	const myPutPetition = async (myData, myToken) => {
		// LLamar al backend con los nuevos datos y el token del usuario
		const req_succesful = await putActualizarPerfil(myData, myToken);
		console.log(req_succesful);

		if (req_succesful === "Perfil actualizado correctamente") {
			// Si el registro es exitoso, mostrar una alerta de éxito "
			Swal.fire({
				title: "¡Datos actualizados correctamente!",
				confirmButtonText: "OK",
				confirmButtonColor: "#e69200", // Cambiar el color del botón
				customClass: {
					container: "font-text", // Cambiar la fuente del título
				},
			}).then(() => {
				window.location.reload();
			});
		} else if (req_succesful === "Las contraseña actual no es valida") {
			Swal.fire({
				title: "Contraseña incorrecta",
				confirmButtonText: "Aceptar",
				confirmButtonColor: "#e69200", // Cambiar el color del botón
				customClass: {
					container: "font-text", // Cambiar la fuente del título
				},
			}).then(() => {
				window.location.reload();
			});
		} else {
			// Si ocurre un error durante el registro, mostrar una alerta con un mensaje de error
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Sorry, Some of our services are not working",
				customClass: {
					container: "font-text", // Cambiar la fuente del título
				},
			}).then(() => {
				window.location.reload();
			});
			return;
		}
	};

	//Manejar cuando el usuario hace clic en "GUARDAR CAMBIOS"
	const handleButtonClick = () => {
		// Guardar los valores en el localStorage

		localStorage.setItem("nombre_usuario", JSON.stringify(nombreCompleto));
		localStorage.setItem("nickname", JSON.stringify(nickname));
		localStorage.setItem("email", JSON.stringify(email));
		localStorage.setItem("avatar_id", JSON.stringify(idAvatar));

		const myData = {
			nombre_usuario: nombreCompleto,
			nickname: nickname,
			avatar_id: idAvatar,
		};

		myPutPetition(myData, localStorage.getItem("token")); // Ejecutar la función asíncrona myresponse
	};

	const cambiarContraseñaDialogue = async (e) => {
		Swal.fire({
			title: "Cambiar Contraseña",

			html: `<div class="font-text text-sm"><input type="password" id="currentPassword" class="swal2-input font-text" placeholder="Contraseña actual">
			<input type="password" id="newPassword" class="swal2-input" placeholder="Nueva contraseña">
			<input type="password" id="newPasswordAgain" class="swal2-input" placeholder="Repetir nueva contraseña"></div>`,
			confirmButtonText: "Confirmar",
			confirmButtonColor: "#e69200",
			focusConfirm: false,
			customClass: {
				title: "font-text", // Cambiar la fuente del título
			},

			preConfirm: () => {
				const currentPassword = Swal.getPopup().querySelector("#currentPassword").value;
				const newPassword = Swal.getPopup().querySelector("#newPassword").value;
				const newPasswordAgain = Swal.getPopup().querySelector("#newPasswordAgain").value;

				if (!currentPassword || !newPassword || !newPasswordAgain) {
					Swal.showValidationMessage(`Por favor, llena todos los campos`);
				}
				if (newPassword != newPasswordAgain) {
					Swal.showValidationMessage(`No repetiste bien las contraseñas`);
				}
				if (newPassword.length < 6) {
					Swal.showValidationMessage(`La nueva contraseña debe ser de por lo menos 6 caracteres`);
				}
				return {
					currentPassword: currentPassword,
					newPassword: newPassword,
					newPasswordAgain: newPasswordAgain,
				};
			},
		}).then((result) => {
			if (result.value != undefined) {
				myPutPetition(
					{
						contrasena: result.value.currentPassword,
						nueva_contrasena: result.value.newPassword,
					},
					localStorage.getItem("token")
				);
			}
		});
	};

	//Obtener el avatar del usuario si tiene uno
	const initialAvatar = () => {
		if (localStorage.getItem("avatar_id")) {
			return JSON.parse(localStorage.getItem("avatar_id"));
		} else return null;
	};

	//Obtener el nombre del usuario
	const [nombreCompleto, setNombreCompleto] = useState(
		JSON.parse(localStorage.getItem("nombre_usuario")) || ""
	);

	//Obtener datos del usuario cuando ingresa a la pagina
	const [nickname, setNickname] = useState(JSON.parse(localStorage.getItem("nickname")) || "");
	const [contrasena, setContrasena] = useState("--------");
	const [email, setEmail] = useState(JSON.parse(localStorage.getItem("email")) || "");
	const [nivel, setNivel] = useState(localStorage.getItem("nivel") || "");
	const [experiencia, setExperiencia] = useState(localStorage.getItem("experiencia") || "");
	const [idAvatar, setIdAvatar] = useState(initialAvatar());

	//Obtener la imagen del avatar
	const getAvatar = () => {
		//Si el usuario tiene un avatar_id se busca la imagen que le corresponde
		if (idAvatar != null) {
			return (
				<img
					src={process.env.PUBLIC_URL + `/avatars/avatar${idAvatar}.svg`}
					className="inline border-4 border-custom-doradodark object-cover w-36 h-36 mb-2 rounded-full"
				/>
			);
		} else {
			//Si el usuario no tiene ningun avatar_id se pone el avatar generico
			return (
				<img
					src={process.env.PUBLIC_URL + `/avatars/usericon.png`}
					className="inline  object-cover w-32 h-32 mb-2 rounded-full"
				/>
			);
		}
	};

	return (
		<div id="perfil" className="font-text  h-screen">
			<Navbar />
			{/* Contenido de la leccion y modelo */}
			<div className="mt-10 ml-10">
				<HomeButton />
			</div>

			<div className="flex items-center justify-center">
				{/* Logros izquierda */}
				<div class=" flex-col items-center">
					<img
						src={require("../media/logros/logro-columna.png")}
						className="inline  object-cover w-16 h-16 mr-6 rounded-full"
					/>
					<img
						src={require("../media/logros/logro-helmet.png")}
						className="inline  object-cover w-16 h-16 mr-6 rounded-full"
					/>
					{getAvatar()}
					<img
						src={require("../media/logros/logro-medalla.png")}
						className="inline  object-cover w-16 h-16 ml-6 rounded-full"
					/>
					<img
						src={require("../media/logros/logro-toga.png")}
						className="inline  object-cover w-16 h-16 ml-6 rounded-full"
					/>
				</div>
			</div>

			{/* Modal para mostrar los avatares disponibles */}
			<div className="flex flex-col items-center justify-center mb-5">
				<ModalAvatar saveAvatar={setIdAvatar} />
				<Modal />
			</div>

			{/* Campos con la informacion del usuario */}
			<div class="grid">
				<div>
					<div className="first-column ">
						<p>Nombre completo</p>
						<input
							type="text"
							className="inputClassName"
							onChange={(e) => setNombreCompleto(e.target.value)}
							value={nombreCompleto}
						/>
					</div>
				</div>
				<div>
					<p>Apodo</p>
					<input
						type="text"
						className="inputClassName"
						onChange={(e) => setNickname(e.target.value)}
						value={nickname}
					/>
				</div>
				<div>
					<div className="first-column">
						<p>Contraseña</p>
						<input
							type="text"
							className="inputClassName"
							onChange={(e) => cambiarContraseñaDialogue(e.target.value)}
							onClick={(e) => cambiarContraseñaDialogue(e.target.value)}
							value={contrasena}
						/>
					</div>
				</div>
				<div>
					<p>Correo electrónico</p>
					<input
						type="text"
						className="inputClassName"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						disabled
					/>
				</div>
				<div>
					<div className="first-column">
						<p>Nivel</p>
						<input type="text" className="inputClassName" disabled />
					</div>
				</div>
				<div>
					<p>Experiencia</p>
					<input type="text" className="inputClassName" disabled />
				</div>
			</div>

			{/* Boton guardar cambios */}
			<div className="flex flex-col items-center pb-20">
				<button
					className="mb-4 md:mb-0 h-8 bg-custom-doradonormal rounded-xl font-bold drop-shadow-xl hover:bg-custom-doradodark shadow-md transform transition duration-300 hover:scale-110 "
					style={{ minWidth: "15rem" }}
					onClick={handleButtonClick}
				>
					Guardar cambios
				</button>
			</div>
		</div>
	);
};

export default Perfil;
