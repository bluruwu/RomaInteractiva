import React from 'react';
import logo from '../media/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-red-800 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-end">
          <img src={logo} alt="Logo" className="w-32 h-auto"></img>
          <span className="text-white text-lg ml-2">Roma Interactiva</span>
        </div>
        <ul className="flex space-x-4 ">
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