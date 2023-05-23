import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../../conections/requests";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nickname: "",
    contrasena: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(formData);

    const myresponse = async () => {
      const req_succesful = await getLogin(formData);
      if (req_succesful === "Correct credentials") {
        alert("Login succesful");
        navigate("/home");
      } else {
        alert(req_succesful);
      }
    };
    myresponse();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex h-screen">
        <div className="flex-1.618 flex justify-center items-center">
          <img
            src={require("./plaza_san_pedro.jpg")} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
            alt="Imagen de fondo"
            className="block w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 p-40">
          <img
            src={require("./luperca.jpg")} // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
            alt="Imagen en el top right"
            className="max-w-200 max-h-200 object-cover h-auto max-w-prose"
          />
          <div className="mb-6">
            <input
              type="text"
              className="w-fit px-32 py-4 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
              placeholder="Username"
              onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="w-fit px-32 py-4 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
              placeholder="Password"
              onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-4 text-xl text-white bg-red-500 rounded-full cursor-pointer hover:bg-red-600"
          >
            Login
          </button>
          <br />
          <p
            className="underline ... hover:underline-offset-4 hover:text-green-500 "
            onClick={() => navigate("/recoverpassword")}
          >
            Recover password
          </p>
          <br />
          <p
            className="underline ... hover:underline-offset-4 hover:text-green-500 "
            onClick={() => navigate("/register")}
          >
            Don't have an account?
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
