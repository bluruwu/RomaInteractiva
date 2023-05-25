import React from "react";
import Navbar from "../../utilities/Navbar";
import QuizQuestion from "../../components/quiz/QuizQuestion";
import QuizAnswers from "../../components/quiz/QuizAnswers";
import QuizNav from "../../components/quiz/QuizNav";

const question = `Según la tradición, ¿quién se convirtió en el primer rey de Roma?`;
const firstoption = `Remo`;
const secondoption = `Rómulo`;
const thirdoption = `Tito Livio`;
const fourthoption = `Un líder local`;
const buttonbef = "Volver a lección";
const buttonnxt = "Siguiente pregunta";
const urlbef = "/fundacion_de_roma";
const urlnxt = "/quiz_monarquia_2";

const QuizMonarquia1 = () => {
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
export default QuizMonarquia1;
