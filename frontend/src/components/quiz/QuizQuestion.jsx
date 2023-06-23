import React from "react";
import HomeButton from "../../utilities/HomeButton";
import { INFORMATION } from "../../utilities/monarquiaInfo";

const QuizQuestion = ({
  question,
  preguntaSeleccionada,
  quiz,
  quizResuelto,
  respuesta1,
  respuesta2,
  respuesta3,
  respuesta4,
  respuesta5,
}) => {
  const totalPreguntas = 5;

  const borde = (pregunta) =>{
    if(pregunta == preguntaSeleccionada + 1) {
        return " border-black border-[3px]"
      }
      else return " "
  }

  const textColor = () => {
    if (quizResuelto) {
      return "text-white"
    }
    else return "text-black"
  }

  const color = (pregunta) => {
    if (quizResuelto){
      if (quiz == 1){
        if (JSON.parse(localStorage.getItem(`monarquiaOpcion${pregunta-1}`)) == INFORMATION[pregunta-1].respuesta) {
          return " bg-green-400"
        }
        else return " bg-custom-rojo"
      }
      else if (quiz == 2) {
        if (JSON.parse(localStorage.getItem(`monarquiaOpcion${pregunta}`)) == JSON.parse(localStorage.getItem(`monarquiaOpcion${pregunta}`))) {
          return " bg-green-400"
        }
        else return " bg-custom-rojo"
      }
      else if (quiz == 3) {
        if (JSON.parse(localStorage.getItem(`monarquiaOpcion${pregunta}`)) == JSON.parse(localStorage.getItem(`monarquiaOpcion${pregunta}`))) {
          return " bg-green-400"
        }
        else return " bg-custom-rojo"
      }
      else if (quiz == 4){
        if (JSON.parse(localStorage.getItem(`monarquiaOpcion${pregunta}`)) == JSON.parse(localStorage.getItem(`monarquiaOpcion${pregunta}`))) {
          return " bg-green-400"
        }
        else return " bg-custom-rojo"
      }
      else if (quiz == 5){
        if (JSON.parse(localStorage.getItem(`monarquiaOpcion${pregunta}`)) == JSON.parse(localStorage.getItem(`monarquiaOpcion${pregunta}`))) {
          return " bg-green-400"
        }
        else return " bg-custom-rojo"
      }
    }
    else {
      if (pregunta == 1){
        if (respuesta1 != 0) {
          return " bg-[#e69200]"
        }
        else return " bg-white "
      }
      else if (pregunta == 2 ) {
        if (respuesta2 != 0 ) {
          return " bg-[#e69200]"
        }
        else return " bg-white"
      }
      else if (pregunta == 3 ) {
        if (respuesta3 != 0) {
          return " bg-[#e69200]"
        }
        else return " bg-white"
      }
      else if (pregunta == 4 ) {
        if (respuesta4 != 0) {
          return " bg-[#e69200]"
        }
        else return " bg-white"
      }
      else if (pregunta == 5 ) {
        if (respuesta5 != 0) {
          return " bg-[#e69200]"
        }
        else return " bg-white"
      }
    }
  }

  // Generar los círculos de pregunta
  const renderCirculos = () => {
    const circulos = [];

    for (let i = 1; i <= totalPreguntas; i++) {
      let styles = `rounded-full h-8 w-8 flex items-center justify-center text-base border ${borde(i)} ${color(i)} ${textColor()}`
      circulos.push(
        <div key={i} className={styles}>
          {i}
        </div>
      );
    }

    return circulos;
  };

  return (
    <div className="grid grid-cols-3 justify-center items-center">
      <div className="p-14">
        <HomeButton />
      </div>

      <div className="flex-grow text-3xl text-center">
        <p className="font-bold filter drop-shadow-lg">{question}</p>
      </div>

      <div className="flex gap-4 ml-40">{renderCirculos()}</div>
    </div>
  );
};

export default QuizQuestion;
