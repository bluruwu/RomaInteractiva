import React from "react";
import HomeButton from "../../utilities/HomeButton";

/* HomeButton y titulo pregunta. Se hace un grid de 3 columnas*/

const QuizQuestion = ({ question }) => {
	return (
		<div className="grid grid-cols-3 items-center">
			<div className="p-14">
				<HomeButton />
			</div>
			{/* Pregunta titulo */}
			<div className="flex-grow text-3xl text-center">
				<p className="font-bold filter drop-shadow-lg">{question}</p>
			</div>
			<div style={{ width: "200px", height: "100px" }}></div>
		</div>
	);
};

export default QuizQuestion;
