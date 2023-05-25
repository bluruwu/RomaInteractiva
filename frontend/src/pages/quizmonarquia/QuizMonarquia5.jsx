import React from "react";
import Navbar from "../../utilities/Navbar";
import QuizQuestion from "../../components/quiz/QuizQuestion";
import QuizAnswers from "../../components/quiz/QuizAnswers";
import QuizNav from "../../components/quiz/QuizNav";

const question = `QUESTION5`;
const firstoption = `QUESTION`;
const secondoption = `QUESTION`;
const thirdoption = `QUESTION`;
const fourthoption = `QUESTION`;
const buttonbef = "Anterior pregunta";
const buttonnxt = "Terminar quiz";
const urlbef = "/quiz_monarquia_4";
const urlnxt = "/home";

const QuizMonarquia5 = () => {
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
export default QuizMonarquia5;
