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
			<Route path="/Julio_Cesar" element={<LessonJulioCesar />} />
			<Route path="/Final_Monarquia" element={<LessonFinalMonarquia/>} />
			<Route path="/Reyes_de_Roma" element={<LessonReyesDeRoma/>}/>
		</Routes>
	);
};

export default App;
