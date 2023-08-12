import React from "react";
import { useNavigate } from "react-router-dom";

const NavBarGames = ({ text, path }) => {
	const navigate = useNavigate();

	return (
		<li className="xl:mr-12">
			<button
				className="xl:text-custom-doradonormal lg:hover:text-white font-text font-regular py-2"
				onClick={() => navigate(path)}
			>
				{text}
			</button>
		</li>
	);
};

export default NavBarGames;
