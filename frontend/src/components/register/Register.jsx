import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate  = useNavigate();

  return (
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
          className="h-max max-w-200 object-cover h-auto max-w-prose"
        />
        <br/>
        <br/>
        <div className="mb-6">
          <input
            type="text"
            className="w-fit px-32 py-4 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            className="w-fit px-32 py-4 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
            placeholder="email"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            className="w-fit px-32 py-4 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
            placeholder="Password"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            className="w-fit px-32 py-4 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
            placeholder="Repeat Password"
          />
        </div>
        <button className="px-6 py-4 text-xl text-white bg-red-500 rounded-full cursor-pointer hover:bg-red-600">
          Register
        </button>
        <br/>
        <p className="underline ... hover:underline-offset-4 hover:text-green-500 " onClick={() => navigate("/login")}>Already have an account?</p>
      </div>
    </div>
  );
};

export default Login;