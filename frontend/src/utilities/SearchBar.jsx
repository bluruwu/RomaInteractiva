import React, { useState } from 'react';
import Fuse from 'fuse.js'
import { Link } from 'react-router-dom';
import lupa from '../media/lupa.png';

const SearchBar = () => {
  // Las funciones de abajo son para la busqueda. Lessons son las lecciones que se añadiran en la busqueda, y keys es aquello que se va a buscar
  // Si se quiere colocar más keys, primero agrega a lessons aquello por lo que se va a buscar y luego lo incluyes en keys.

    const [searchTerm, setSearchTerm] = useState('');
  
    const lessons = [
      { title: 'Fundación de Roma', path: '/Fundacion_de_Roma' },
      { title: 'Reyes de Roma', path: '/Reyes_de_Roma' },
      { title: 'Finalización de la monarquía', path: '/Final_Monarquia' },
      { title: 'Augusto', path: '/Augusto' },
      { title: 'Rómulo y Remo', path: '/Romulo_Remo' },
      { title: 'Fundación de la Republica Romana', path: '/Fundacion_Republica' },
      { title: 'Expansión de la Republica Romana', path: '/Expansion_Republica' },
      { title: 'Colapso de la República Romana', path: '/Colapso_Republica' },
    ];
  
    
    const fuse = new Fuse(lessons, {
      keys: ['title'],
      includeScore: true,
    });
  
    const searchResults = fuse.search(searchTerm.toLowerCase());
  
    const filteredLessons = searchResults.map(result => result.item);
    
    return (
      <>
        <form>
          <div className="flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              id="busqueda"
            />
            <button type="submit" className="px-4 py-3 bg-white text-black rounded-r-full">
              <img src={lupa} alt="Lupa" className="w-5 h-auto"></img>
            </button>
          </div>
        </form>
        {searchTerm && (
          <div className="relative mt-2">
            <div className="absolute z-20 w-full bg-white rounded-md shadow-lg py-1">
            {filteredLessons.length > 0 ? (
              filteredLessons.map((lesson, index) => (
                <Link
                  key={lesson.path}
                  to={lesson.path}
                  id={`search-result-${index}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {lesson.title}
                </Link>
              ))
            ) : (
              <span className="block px-4 py-2 text-sm text-gray-700">Sin resultados</span>
            )}
          </div>
          </div>
        )}
      </>
    );
  }
  
  export default SearchBar;
