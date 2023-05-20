import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <div className="flex-1.618 flex justify-center items-center">
        <img
          src={require("./coliseo.jpg")} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
          alt="Imagen de fondo"
          className="block w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 p-40">
        <img
          src={require("./spqr.png")} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
          alt="Imagen en el top right"
          className=" w-22 max-w-30 object-cover "
        />
        <br />
        <br />
        <div className="mb-4">
          <input
            type="text"
            className="w-fit px-32 py-3 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
            placeholder="Nombre completo"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="w-fit px-32 py-3 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
            placeholder="Apodo"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            className="w-fit px-32 py-3 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="w-fit px-32 py-3 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
            placeholder="Contraseña"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="w-fit px-32 py-3 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
            placeholder="Repite tu contraseña"
          />
        </div>
        <button
          className="px-6 py-3 w-full text-xl text-white bg-red-500 rounded-full cursor-pointer hover:bg-red-600"
          style={{ backgroundColor: "rgb(142, 0, 0)" }}
        >
          Registrarme
        </button>
        <br />
        <p
          className="underline ... hover:underline-offset-4 hover:text-green-500 "
          onClick={() => navigate("/login")}
        >
          Ya tengo una cuenta
        </p>
      </div>
    </div>
  );
};

export default Login;
