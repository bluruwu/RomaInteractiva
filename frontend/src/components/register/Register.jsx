import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    nombre_usuario: '',
    password: '',
    repeatPassword: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="flex h-screen">
        <div className="flex-1.618 flex justify-center items-center">
          <img
            src={require('./coliseo.jpg')} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
            alt="Imagen de fondo"
            className="block w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 p-40">
          <img
            src={require('./spqr.png')} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
            alt="Imagen en el top right"
            className="max-w-200 max-h-200 object-cover h-auto"
          />
          <br />
          <br />
          <div className="mb-6">
            <input
              type="text"
              className="w-fit px-32 py-4 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
              placeholder="Username"

              onChange={(e) => setFormData({ ...formData, nombre_usuario: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              className="w-fit px-32 py-4 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
              placeholder="email"

              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="w-fit px-32 py-4 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
              placeholder="Password"

              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="w-fit px-32 py-4 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
              placeholder="Repeat Password"

              onChange={(e) => setFormData({ ...formData, repeatPassword: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-4 text-xl text-white bg-red-500 rounded-full cursor-pointer hover:bg-red-600">
            Register
          </button>
          <br />
          <p className="underline ... hover:underline-offset-4 hover:text-green-500 " onClick={() => navigate("/login")}>Already have an account?</p>
        </div>
      </div>
    </form>
  );
};

export default Register;