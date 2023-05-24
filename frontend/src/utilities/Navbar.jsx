import React from 'react';
import logo from '../media/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-red-800">
      <div className="flex justify-between mr-20">
        <div className="flex items-center -space-x-8">
          <img src={logo} alt="Logo" className="w-32 h-auto"></img>
          <span className="text-white text-lg ml-2">Roma Interactiva</span>
        </div>
        <ul className="flex space-x-4 items-center">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Inicio</a>
          </li>
          <li>
            <a href="/acerca" className="text-white hover:text-gray-300">Acerca</a>
          </li>
          <li>
            <a href="/contacto" className="text-white hover:text-gray-300">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar