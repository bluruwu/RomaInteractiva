import React from 'react';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';

const App = () => {
  return <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
};

export default App;