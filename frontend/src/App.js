import React from "react";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Routes, Route } from "react-router-dom";
import Lesson from "./components/lesson/Lesson";
import HomePage from "./pages/homePage";
import Quiz from "./components/quiz/Quiz";

const App = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<HomePage />} />
			<Route path="/lesson" element={<Lesson />} />
			<Route path="/quiz" element={<Quiz />} />
		</Routes>
	);
};

export default App;
