import React from "react";
import HomeButton from "../../utilities/HomeButton";
import { INFORMATION as MonarquiaInformation } from "../../utilities/monarquiaInfo";
import { INFORMATION as RepublicaInformation } from "../../utilities/republicaInfo";
import { INFORMATION as PersonajesInformation } from "../../utilities/personajesInfo";
import { INFORMATION as ImperioInformation } from "../../utilities/imperioInfo";
import { INFORMATION as arquitecturaInformation } from "../../utilities/arquitecturaInfo";
import { INFORMATION as culturaInformation } from "../../utilities/culturaInfo";

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

  // Determinar el estilo de borde para el círculo de pregunta seleccionado
  const borde = (pregunta) =>{
    if(pregunta == preguntaSeleccionada + 1) {
        return " border-black border-[3px]"
      }
      else return " "
  }

  // Determinar el color de texto según si el quiz está resuelto o no
  const textColor = () => {
    if (quizResuelto) {
      return "text-white"
    }
    else return "text-black"
  }

  // Determinar el color de fondo de los círculos de pregunta
  const color = (pregunta) => {
    if (quizResuelto){
      if (quiz == 1){
        if (JSON.parse(localStorage.getItem(`monarquiaOpcion${pregunta-1}`)) == MonarquiaInformation[pregunta-1].respuesta) {
          return " bg-green-400"
        }
        else return " bg-custom-rojo"
      }
      else if (quiz == 2) {
        if (JSON.parse(localStorage.getItem(`republicaOpcion${pregunta-1}`)) == RepublicaInformation[pregunta-1].respuesta) {
          return " bg-green-400"
        }
        else return " bg-custom-rojo"
      }
      else if (quiz == 3) {
        if (JSON.parse(localStorage.getItem(`personajesOpcion${pregunta-1}`)) == PersonajesInformation[pregunta-1].respuesta) {
          return " bg-green-400"
        }
        else return " bg-custom-rojo"
      }
      else if (quiz == 4){
        if (JSON.parse(localStorage.getItem(`imperioOpcion${pregunta-1}`)) == ImperioInformation[pregunta-1].respuesta) {
          return " bg-green-400"
        }
        else return " bg-custom-rojo"
      }
      else if (quiz == 5){
        if (JSON.parse(localStorage.getItem(`arquitecturaOpcion${pregunta-1}`)) == arquitecturaInformation[pregunta-1].respuesta) {
          return " bg-green-400"
        }
        else return " bg-custom-rojo"
      }
      else if (quiz == 6){
        if (JSON.parse(localStorage.getItem(`culturaOpcion${pregunta-1}`)) == culturaInformation[pregunta-1].respuesta) {
          return " bg-green-400"
        }
        else return " bg-custom-rojo"
      }
    }
    else {
      if (pregunta == 1){
        if (respuesta1 != 0 && respuesta1 != null) {
          return " bg-[#e69200]"
        }
        else return " bg-white "
      }
      else if (pregunta == 2 ) {
        if (respuesta2 != 0 && respuesta1 != null) {
          return " bg-[#e69200]"
        }
        else return " bg-white"
      }
      else if (pregunta == 3 ) {
        if (respuesta3 != 0 && respuesta1 != null) {
          return " bg-[#e69200]"
        }
        else return " bg-white"
      }
      else if (pregunta == 4 ) {
        if (respuesta4 != 0 && respuesta1 != null) {
          return " bg-[#e69200]"
        }
        else return " bg-white"
      }
      else if (pregunta == 5 ) {
        if (respuesta5 != 0 && respuesta1 != null) {
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
