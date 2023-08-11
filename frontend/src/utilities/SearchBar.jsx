import React, { useState } from "react";
import Fuse from "fuse.js";
import { Link } from "react-router-dom";
import lupa from "../media/iconos/lupa.png";
import lessons from "./lessonsPath";

const SearchBar = () => {
	// Las funciones de abajo son para la busqueda. Lessons son las lecciones que se añadiran en la busqueda, y keys es aquello que se va a buscar
	// Si se quiere colocar más keys, primero agrega a lessons aquello por lo que se va a buscar y luego lo incluyes en keys.

	const [searchTerm, setSearchTerm] = useState("");

	const fuse = new Fuse(lessons, {
		keys: ["title"],
		includeScore: true,
	});

	const searchResults = fuse.search(searchTerm.toLowerCase());

	const filteredLessons = searchResults.map((result) => result.item);

	return (
		<>
			<form>
				<div className="flex items-center justify-end pr-0">
					<input
						type="text"
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
						className=" my-4 xl:my-0 lg:px-4 lg:py-2 w-60 border-1 border-gray-300 rounded-l-full focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
						id="busqueda"
						aria-labelledby="search"
					/>
					<button
						type="submit"
						className="px-4 py-3 min-w-[52px] min-h-[41px] bg-white text-black rounded-r-full  border-gray-300"
					>
						<img src={lupa} alt="Lupa" className="w-5 min-w-[11px]"></img>
					</button>
				</div>
			</form>
			{searchTerm && (
				<div className="relative mt-1">
					<div className="border absolute z-20 w-60 right-10 bg-white rounded-md shadow-lg py-1">
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
};

export default SearchBar;
