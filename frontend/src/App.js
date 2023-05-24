import React from "react";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Lesson from "./components/lesson/Lesson";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

const App = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<Home />} />
			<Route path="/lesson" element={<Lesson />} />
		</Routes>
	);
};

export default App;
