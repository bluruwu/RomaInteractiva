import React from "react";
import HomeButton from "../../utilities/HomeButton";

const LessonText = ({ title, firstparag, secondparag, thirdparag }) => {
	return (
		<div className=" w-full md:w-full lg:w-1/2 p-14">
			{/* Botón de inicio */}
			<div className="mb-10 text-3xl ">
				<p className=" font-bold text-center filter drop-shadow-lg">{title}</p>
			</div>

			{/* Párrafos de las lecciones */}
			<div>
				<p className="text-justify  mb-4">{firstparag}</p>
				{/* <p className="text-justify mb-4">{secondparag}</p> */}
				{/* <p className="text-justify mb-4">{thirdparag}</p> */}
			</div>
		</div>
	);
};

export default LessonText;
