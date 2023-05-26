import React from "react";
import Navbar from "../../utilities/Navbar";
import QuizQuestion from "../../components/quiz/QuizQuestion";
import QuizAnswers from "../../components/quiz/QuizAnswers";
import QuizNav from "../../components/quiz/QuizNav";

const question = `¿Qué características se atribuyen a Numa Pompilio durante su reinado?`;
const firstoption = `Sabiduría y piedad religiosa`;
const secondoption = `Violencia y opresión`;
const thirdoption = `Ambición y conquista militar`;
const fourthoption = `Comercio y prosperidad económica`;
const buttonbef = "Anterior pregunta";
const buttonnxt = "Siguiente pregunta";
const urlbef = "/quiz_monarquia_2";
const urlnxt = "/quiz_monarquia_4";

const QuizMonarquia3 = () => {
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
export default QuizMonarquia3;
