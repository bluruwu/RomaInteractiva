import React from 'react';
import Login from './components/login/Login';
import Register from './components/register/Register';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
  </Routes>
};

export default App;