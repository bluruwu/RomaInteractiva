import React from "react";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Quiz from "./components/quiz/Quiz";
import LessonFundacionRoma from "./pages/LessonFundacionRoma";

const App = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<HomePage />} />
			<Route path="/quiz" element={<Quiz />} />
			<Route path="/Fundacion_de_Roma" element={<LessonFundacionRoma/>} />
		</Routes>
	);
};

export default App;
