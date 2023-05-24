import React from 'react';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { Routes, Route } from 'react-router-dom'
import Lesson from "./components/lesson/Lesson";
import HomePage from './pages/homePage';

const App = () => {
  return <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/lesson" element={<Lesson />} />
          </Routes>
};

export default App;
