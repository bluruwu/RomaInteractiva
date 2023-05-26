import React, { useState } from "react";
import Option from "../../components/quizOption";

//Div con los 4 botones de las opciones de respuesta

const QuizAnswers = ({ firstoption, secondoption, thirdoption, fourthoption }) => {

	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
	};

	return (
		<div className="flex flex-col  items-center mb-12">
			<Option
				option={firstoption}
				selectedOption={selectedOption}
				handleOptionSelect={handleOptionSelect}
				optionNumber={1}
			/>
			<Option
				option={secondoption}
				selectedOption={selectedOption}
				handleOptionSelect={handleOptionSelect}
				optionNumber={2}
			/>
			<Option
				option={thirdoption}
				selectedOption={selectedOption}
				handleOptionSelect={handleOptionSelect}
				optionNumber={3}
			/>
			<Option
				option={fourthoption}
				selectedOption={selectedOption}
				handleOptionSelect={handleOptionSelect}
				optionNumber={4}
			/>
		</div>
	);
};

export default QuizAnswers;
