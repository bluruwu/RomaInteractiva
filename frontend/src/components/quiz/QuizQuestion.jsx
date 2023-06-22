import React from "react";
import HomeButton from "../../utilities/HomeButton";

const QuizQuestion = ({ question, numeroDePregunta }) => {
  const totalPreguntas = 5;

  return (
    <div className="grid grid-cols-3 justify-center items-center">
      <div className="p-14">
        <HomeButton />
      </div>
      <div className="flex-grow text-3xl text-center">
        <p className="font-bold filter drop-shadow-lg">{question}</p>
      </div>
      <div className="w-48 h-24 flex justify-center items-center pl-60">
        <p className="text-center  font-bold text-2xl">
          {numeroDePregunta}/{totalPreguntas}
        </p>
      </div>
    </div>
  );
};

export default QuizQuestion;
