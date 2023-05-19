import React from 'react';

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1.618 flex justify-center items-center">
        <img
          src={require('./plaza_san_pedro.jpg')} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
          alt="Imagen de fondo"
          className="block w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 p-40">
        <img
          src={require('./luperca.jpg')} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
          alt="Imagen en el top right"
          className="h-auto max-w-90 object-cover"
        />
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-4 py-2 text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="w-full px-4 py-2 text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Password"
          />
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;