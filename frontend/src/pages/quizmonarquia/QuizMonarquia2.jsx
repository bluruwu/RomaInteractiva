import React from "react";
import Navbar from "../../utilities/Navbar";
import QuizQuestion from "../../components/quiz/QuizQuestion";
import QuizAnswers from "../../components/quiz/QuizAnswers";
import QuizNav from "../../components/quiz/QuizNav";

const question = `¿Cuál fue el impacto duradero de la fundación de Roma como una monarquía?`;
const firstoption = `Establecimiento de la República`;
const secondoption = `Desarrollo de la cultura romana`;
const thirdoption = `Influencia en la concepción del poder político`;
const fourthoption = `Todas las anteriores`;
const buttonbef = "Volver a lección";
const buttonnxt = "Siguiente";
const urlbef = "/quiz_monarquia_1";
const urlnxt = "/quiz_monarquia_3";

const QuizMonarquia2 = () => {
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
export default QuizMonarquia2;
