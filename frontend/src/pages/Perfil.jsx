import React, { useState } from "react";
import Navbar from "../utilities/Navbar";
import HomeButton from "../utilities/HomeButton";
import Modal from "../components/scores";
import ModalAvatar from "../components/chooseAvatar";
import { putActualizarPerfil, getAPI_URL } from "../conections/requests";
import Swal from "sweetalert2";
import "./css/perfil.css";
import { useNavigate, Navigate, json } from "react-router-dom";
import UploadTheImage from "../utilities/UploadTheImage";
import uploadImageToServer from "../utilities/start";

import imageNoLogro from "../media/logros/nologro.png";
import gifarquitectura from "../media/logros/gifarquitectura.gif";
import gifcultura from "../media/logros/gifcultura.gif";
import gifimperio from "../media/logros/gifimperio.gif";
import gifmonarquia from "../media/logros/gifmonarquia.gif";
import gifpersonajes from "../media/logros/gifpersonajes.gif";
import gifrepublica from "../media/logros/gifrepublica.gif";

//Pagina del PERFIL DEL USUARIO
const Perfil = () => {
	const API_URL = getAPI_URL();

	const [logrosParaMostrar, setLogrosParaMostrar] = useState({
		logroMonarquia: JSON.parse(localStorage.getItem("logro_monarquia")),
		logroRepublica: JSON.parse(localStorage.getItem("logro_republica")),
		logroImperio: JSON.parse(localStorage.getItem("logro_imperio")),
		logroPersonajes: JSON.parse(localStorage.getItem("logro_personajes")),
		logroArquitectura: JSON.parse(localStorage.getItem("logro_arquitectura")),
		logroCultura: JSON.parse(localStorage.getItem("logro_cultura")),
	});

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
				container: "font-text", // Cambiar la fuente del título
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
	const [nivel, setNivel] = useState(localStorage.getItem("nivel") || 1);
	const [experiencia, setExperiencia] = useState(localStorage.getItem("experiencia") || 0);
	const [idAvatar, setIdAvatar] = useState(initialAvatar());

	//Obtener la imagen del avatar
	const getAvatar = () => {
		//Si el usuario tiene un avatar_id se busca la imagen que le corresponde
		if (idAvatar != null) {
			return (
				<div>
					<img
						src={
							idAvatar < 7
								? process.env.PUBLIC_URL + `/avatars/avatar${idAvatar}.svg`
								: `${API_URL}/image/avatar${idAvatar}.jpg`
						}
						className="overlayed-image-1"
					/>
					<img
						src={process.env.PUBLIC_URL + `/avatars/smallcamera.png`}
						className="overlayed-image-2"
						onClick={(e) => updloadAvatar()}
					/>
				</div>
			);
		} else {
			//Si el usuario no tiene ningun avatar_id se pone el avatar generico
			return (
				<div>
					<img
						src={process.env.PUBLIC_URL + `/avatars/usericon.png`}
						className="inline  object-cover w-32 h-32 mb-2 rounded-full"
					/>
					<img
						src={process.env.PUBLIC_URL + `/avatars/smallcamera.png`}
						className="overlayed-image-2"
						onClick={(e) => updloadAvatar()}
					/>
				</div>
			);
		}
	};

	async function updloadAvatar() {
		async function waitServer() {
			//ask the user for an image, upload that image, and get an id
			const idFromServer = await uploadImageToServer(localStorage.getItem("token"));
			//revisar si el servidor respondio con un id
			if (idFromServer) {
				setIdAvatar(idFromServer);
				localStorage.setItem("avatar_id", JSON.stringify(idFromServer));
			}
		}
		waitServer();
	}

	return (
		<div id="perfil" className="font-text  h-screen">
			<Navbar />
			{/* Contenido de la leccion y modelo */}
			{/* <div className="mt-10 ml-10">
				<HomeButton />
			</div> */}

			<div className="p-10"></div>

			<div className="logrosyperfil">
				<img
					src={logrosParaMostrar.logroMonarquia == true ? gifmonarquia : imageNoLogro}
					className="imagesLeft"
				/>

				<img
					src={logrosParaMostrar.logroRepublica == true ? gifrepublica : imageNoLogro}
					className="imagesLeft"
				/>

				<img
					src={logrosParaMostrar.logroImperio == true ? gifimperio : imageNoLogro}
					className="imagesLeft"
				/>

				{getAvatar()}

				<img
					src={logrosParaMostrar.logroPersonajes == true ? gifpersonajes : imageNoLogro}
					className="imagesRight"
				/>

				<img
					src={logrosParaMostrar.logroArquitectura == true ? gifarquitectura : imageNoLogro}
					className="imagesRight"
				/>

				<img
					src={logrosParaMostrar.logroCultura == true ? gifcultura : imageNoLogro}
					className="imagesRight"
				/>
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
							style={{ WebkitTextSecurity: "disc" }}
							value={localStorage.getItem("token") ? contrasena : ""}
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
						<input type="text" className="inputClassName" value={nivel} disabled />
					</div>
				</div>
				<div>
					<p>Experiencia</p>
					<input type="text" className="inputClassName" value={experiencia} disabled />
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
