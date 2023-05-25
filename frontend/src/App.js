import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Quiz from "./components/quiz/Quiz";
import LessonFundacionRoma from "./pages/lessons/LessonFundacionRoma";
import LessonJulioCesar from "./pages/lessons/LessonJulioCesar";

const App = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<HomePage />} />
			<Route path="/quiz" element={<Quiz />} />
			<Route path="/Fundacion_de_Roma" element={<LessonFundacionRoma/>} />
			<Route path="/Julio_Cesar" element={<LessonJulioCesar/>} />
		</Routes>
	);
};

export default App;
