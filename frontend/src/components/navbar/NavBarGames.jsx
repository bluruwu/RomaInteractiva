import React from "react";
import { useNavigate } from "react-router-dom";

const NavBarGames = ({ text, path }) => {
	const navigate = useNavigate();

	return (
		<li className="lg:mr-12">
			<button
				className="text-custom-doradodark lg:text-custom-doradonormal lg:hover:text-white font-text font-regular"
				onClick={() => navigate(path)}
			>
				{text}
			</button>
		</li>
	);
};

export default NavBarGames;
