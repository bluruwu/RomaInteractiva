import React from "react";
import Navbar from "../../utilities/Navbar";
import QuizQuestion from "../../components/quiz/QuizQuestion";
import QuizAnswers from "../../components/quiz/QuizAnswers";
import QuizNav from "../../components/quiz/QuizNav";

const question = `¿Quién fue el último rey de Roma?`;
const firstoption = `Numa Pompilio`;
const secondoption = `Remo`;
const thirdoption = `Tarquinio`;
const fourthoption = `Remo`;
const buttonbef = "Anterior pregunta";
const buttonnxt = "Siguiente pregunta";
const urlbef = "/quiz_monarquia_3";
const urlnxt = "/quiz_monarquia_5";

const QuizMonarquia4 = () => {
	return (
		<div className="font-text">
			<Navbar />
			<QuizQuestion question={question} />
			<QuizAnswers
				firstoption={firstoption}
				secondoption={secondoption}
				thirdoption={thirdoption}
				fourthoption={fourthoption}
			/>
			<QuizNav buttonbef={buttonbef} buttonnxt={buttonnxt} urlbef={urlbef} urlnxt={urlnxt} />
		</div>
	);
};
export default QuizMonarquia4;
