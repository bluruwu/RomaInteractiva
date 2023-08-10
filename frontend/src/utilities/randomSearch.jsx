import React from "react";
import { useNavigate } from "react-router-dom";
import dado from "../media/iconos/dado.png";
import lessons from "./lessonsPath";

const BusquedaAleatoria = () => {
	const navigate = useNavigate();

	const HandleRandomPath = () => {
		const randomIndex = Math.floor(Math.random() * lessons.length);
		const selectedPath = lessons[randomIndex].path;
		navigate(selectedPath);
	};

	return (
		<button
			id="randomButton"
			onClick={HandleRandomPath}
			type="submit"
			className="px-1 py-3 bg-transparent rounded-r-full"
		>
			<img src={dado} alt="Dado - Busqueda al azar" className="w-8 min-w-[21px]"></img>
		</button>
	);
};

export default BusquedaAleatoria;
