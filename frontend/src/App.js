import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Perfil from "./pages/Perfil";
import Recover from "./pages/Recover";
//Quizes
import QuizMonarquia from "./pages/quizes/QuizMonarquia";
import QuizRepublica from "./pages/quizes/QuizRepublica";
import QuizPersonajes from "./pages/quizes/QuizPersonajes";
import QuizImperio from "./pages/quizes/QuizImperio";
import QuizArquitectura from "./pages/quizes/QuizArquitectura";
import QuizCultura from "./pages/quizes/QuizCultura";
//Lecciones
import LessonFundacionRoma from "./pages/lessons/LessonFundacionRoma";
import LessonJulioCesar from "./pages/lessons/LessonJulioCesar";
import LessonFinalMonarquia from "./pages/lessons/LessonFinalMonarquia";
import LessonReyesDeRoma from "./pages/lessons/LessonReyesDeRoma";
import LessonAcueducto from "./pages/lessons/LessonAcueducto";
import LessonArmasImperio from "./pages/lessons/LessonArmasImperio";
import LessonAugusto from "./pages/lessons/LessonAugusto";
import LessonColapsoRepublica from "./pages/lessons/LessonColapsoRepublica";
import LessonColiseo from "./pages/lessons/LessonColiseo";
import LessonCristianismoImp from "./pages/lessons/LessonCristianismoImp";
import LessonEducacion from "./pages/lessons/LessonEducacion";
import LessonFinalImperio from "./pages/lessons/LessonFinalImperio";
import LessonFundacionRepublica from "./pages/lessons/LessonFundacionRepublica";
import LessonPanteon from "./pages/lessons/LessonPanteon";
import LessonRecreacion from "./pages/lessons/LessonRecreacion";
import LessonViviendas from "./pages/lessons/LessonViviendas";
import LessonExpRepublica from "./pages/lessons/LessonExpRepublica";
import LessonRomuloRemo from "./pages/lessons/LessonRomuloRemo";

import UploadTheImage from "./utilities/UploadTheImage";
import LessonPuzzle from "./pages/lessons/LessonPuzzle";
import LessonCrossword from "./pages/lessons/LessonCrossword";
import Games from "./pages/Games";

//Rutas de la aplicacion. Con el path y el elemento que debe ser renderizado importado previamente
const App = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/" element={<HomePage />} />
			<Route path="/home" element={<HomePage />} />
			<Route path="perfil" element={<Perfil />} />
			<Route path="/recoverpassword" element={<Recover/>}/>

			<Route path="Quiz_monarquia_1" element={<QuizMonarquia />} />
			<Route path="Quiz_Republica" element={<QuizRepublica />} />
			<Route path="Quiz_Personajes" element={<QuizPersonajes />} />
			<Route path="Quiz_Imperio" element={<QuizImperio />} />
			<Route path="Quiz_Arquitectura" element={<QuizArquitectura />} />
			<Route path="Quiz_Cultura" element={<QuizCultura />} />

			{/* Lecciones Monarquia */}
			<Route path="/Fundacion_de_Roma" element={<LessonFundacionRoma />} />
			<Route path="/Reyes_de_Roma" element={<LessonReyesDeRoma />} />
			<Route path="/Final_Monarquia" element={<LessonFinalMonarquia />} />

			{/* Lecciones Republica */}
			<Route path="/Fundacion_Republica" element={<LessonFundacionRepublica />} />
			<Route path="/Expansion_Republica" element={<LessonExpRepublica />} />
			<Route path="/Colapso_Republica" element={<LessonColapsoRepublica />} />

			{/* Lecciones Imperio */}
			<Route path="/Cristianismo_Imperio" element={<LessonCristianismoImp />} />
			<Route path="/Armas_Imperio" element={<LessonArmasImperio />} />
			<Route path="/Final_Imperio" element={<LessonFinalImperio />} />

			{/* Lecciones Personajes */}
			<Route path="/Romulo_Remo" element={<LessonRomuloRemo />} />
			<Route path="/Julio_Cesar" element={<LessonJulioCesar />} />
			<Route path="/Augusto" element={<LessonAugusto />} />

			{/* Lecciones Arquitectura */}
			<Route path="/Coliseo_Romano" element={<LessonColiseo />} />
			<Route path="/Panteon_Agripa" element={<LessonPanteon />} />
			<Route path="/Acueducto_Romano" element={<LessonAcueducto />} />

			{/* Lecciones Cultura */}
			<Route path="/Educacion" element={<LessonEducacion />} />
			<Route path="/Recreacion" element={<LessonRecreacion />} />
			<Route path="/Viviendas" element={<LessonViviendas />} />

			{/* Manejo Imagen */}
			<Route path="/UploadTheImage" element={<UploadTheImage />} />

			{/* Juegos */}
			<Route path="/Puzzle" element={<LessonPuzzle />} />
			<Route path="/Crossword" element={<LessonCrossword />} />
			<Route path="/Games" element={<Games />} />
		</Routes>
	);
};

export default App;
