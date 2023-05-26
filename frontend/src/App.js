import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";

import QuizMonarquia1 from "./pages/quizmonarquia/QuizMonarquia1";
import QuizMonarquia2 from "./pages/quizmonarquia/QuizMonarquia2";
import QuizMonarquia3 from "./pages/quizmonarquia/QuizMonarquia3";
import QuizMonarquia4 from "./pages/quizmonarquia/QuizMonarquia4";
import QuizMonarquia5 from "./pages/quizmonarquia/QuizMonarquia5";

import LessonFundacionRoma from "./pages/lessons/LessonFundacionRoma";
import LessonJulioCesar from "./pages/lessons/LessonJulioCesar";
import LessonFinalMonarquia from "./pages/lessons/LessonFinalMonarquia";
import LessonReyesDeRoma from "./pages/lessons/LessonReyesDeRoma";
import LessonAcueducto from "./pages/lessons/LessonAcueducto";
import LessonArmasImperio from "./pages/lessons/LessonArmasImperio";
import LessonAugusto from "./pages/lessons/LessonAugusto";
import LessonColapsoRepublica from "./pages/lessons/LessonColapsoRepublica";
import LessonColiseo from "./pages/lessons/LessonColiseo";

const App = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/" element={<HomePage />} />
			<Route path="/home" element={<HomePage />} />

			<Route path="Quiz_monarquia_1" element={<QuizMonarquia1 />} />
			<Route path="Quiz_monarquia_2" element={<QuizMonarquia2 />} />
			<Route path="Quiz_monarquia_3" element={<QuizMonarquia3 />} />
			<Route path="Quiz_monarquia_4" element={<QuizMonarquia4 />} />
			<Route path="Quiz_monarquia_5" element={<QuizMonarquia5 />} />

			<Route path="/Fundacion_de_Roma" element={<LessonFundacionRoma />} />
			<Route path="/Final_Monarquia" element={<LessonFinalMonarquia/>} />
			<Route path="/Reyes_de_Roma" element={<LessonReyesDeRoma/>}/>

			<Route path="/Colapso_Republica" element={<LessonColapsoRepublica/>} />



			<Route path="/Armas_Imperio" element={<LessonArmasImperio/>} />

			<Route path="/Julio_Cesar" element={<LessonJulioCesar />} />
			<Route path="/Augusto" element={<LessonAugusto />} />


			<Route path="/Coliseo_Romano" element={<LessonColiseo/>} />
			<Route path="/Acueducto_Romano" element={<LessonAcueducto/>} />
		</Routes>
	);
};

export default App;
