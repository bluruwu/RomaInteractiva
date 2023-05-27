import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../conections/requests";
import { Alert } from "../components/alerts/alerts";
import Swal from 'sweetalert2'

const Login = () => {
  const navigate = useNavigate(); // Hook de navegación 
  const [showAlert, setShowAlert] = useState(false); // Estado para mostrar/ocultar la alerta

  const [formData, setFormData] = useState({
    nickname: "",
    contrasena: "",
  }); // Estado para almacenar los datos del formulario de inicio de sesión

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir comportamiento de envío predeterminado
    console.log(formData); // Imprimir los datos del formulario en la consola
    const myresponse = async () => {
      const req_succesful = await getLogin(formData); // Realizar solicitud de inicio de sesión utilizando los datos del formulario
      if (req_succesful === "Correct credentials") {
        // Si las credenciales son correctas, mostrar una alerta de éxito y navegar a la página de inicio ("/home")
        Swal.fire(
          'Welcome!',
          'You have succesfully been logged!',
          'success'
        )
        navigate("/home");
      } else {
        // Si las credenciales son incorrectas, mostrar una alerta de error con el mensaje de error devuelto por la solicitud
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: req_succesful,
        })
      }
    };
    myresponse(); // Ejecutar la función asíncrona myresponse
  };

  // Render de la pagina con sus componentes. Una imagen de fondo, un logo, y los campos necesarios para loguearse. Además del botón de submit y el botón que lleva a registro
  return (
    <div >
      {showAlert && <Alert />}
      <form onSubmit={handleSubmit}>
        <div className="flex ">
          <div className="flex-1.618 flex justify-center items-center">
            <img
              src={require("../media/plazaSanPedro.jpg")}
              alt="Imagen de fondo"
              className="block w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 p-40">
            <img
              src={require("../media/luperca.jpg")}
              alt="Imagen en el top right"
              className="max-w-200 max-h-200 object-cover h-auto max-w-prose"
            />
            <div className="mb-6">
              <input
                id="username"
                type="text"
                className="w-fit px-32 py-4 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
                placeholder="Username"
                onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
              />
            </div>
            <div className="mb-6">
              <input
                id="password"
                type="password"
                className="w-fit px-32 py-4 text-center text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400"
                placeholder="Password"
                onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
              />
            </div>
            <button
              id="submit"
              type="submit"
              className="px-6 py-4 text-xl text-white bg-red-500 rounded-full cursor-pointer hover:bg-red-600"
              onSubmit={(e) => e.preventDefault()}
            >
              Login
            </button>
            <br />
            <p
              id="recover"
              className="underline ... hover:underline-offset-4 hover:text-green-500"
              onClick={() => navigate("/recoverpassword")}
            >
              Recover password
            </p>
            <br />
            <p
              id="navregistro"
              className="underline ... hover:underline-offset-4 hover:text-green-500"
              onClick={() => navigate("/register")}
            >
              Don't have an account?
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;