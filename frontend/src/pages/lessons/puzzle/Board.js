import React, { useState } from "react";
import Tile from "./Tile";
import { TILE_COUNT, GRID_SIZE } from "./constants";
import { canSwap, shuffle, swap, isSolved } from "./helpers";
import Swal from "sweetalert2";

function Board({ imageUrl, imageName }) {
	const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
	const [isStarted, setIsStarted] = useState(false);
	console.log("is started:", isStarted);

	const shuffleTiles = () => {
		const shuffledTiles = shuffle(tiles);
		setTiles(shuffledTiles);
	};

	const swapTiles = (tileIndex) => {
		if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
			const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1));
			setTiles(swappedTiles);
		}
	};

	const handleTileClick = (index) => {
		swapTiles(index);
	};

	const handleShuffleClick = () => {
		shuffleTiles();
	};

	const handleStartClick = () => {
		shuffleTiles();
		setIsStarted(true);
	};
	const windowWidth = window.innerWidth; //Obtener el ancho de la pantalla
	const windowHeight = window.innerHeight - 305; //Obtener el alto de la pantalla

	let BOARD_SIZE;

	const minSize = Math.min(windowWidth, windowHeight); // Obtener el valor mas pequeno entre el alto y el ancho
	BOARD_SIZE = minSize * 0.913; //Segun el area maxima que puede tomar el rompecabezas, tomar el 91%

	//El rompecabezas debe tener un tamano maximo de 425
	if (BOARD_SIZE > 425) {
		BOARD_SIZE = 425;
	}

	const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
	const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
	const style = {
		width: BOARD_SIZE,
		height: BOARD_SIZE,
	};
	const hasWon = isSolved(tiles);

	//Swal que se muestra cuando gane el juego, se le muestra la descripcion de la imagen
	const showPuzzleSolvedNotification = () => {
		Swal.fire({
			title: "¡Rompecabezas resuelto! 🎉",
			text: `Has completado el rompecabezas "${imageName}"`,
			icon: "success",
			showConfirmButton: true,
			customClass: {
				container: "font-text", // Cambiar la fuente del título
			},
		});
	};

	//Mostrar el swal si ha ganado y el juego ha empezado
	if (hasWon && isStarted) {
		showPuzzleSolvedNotification();
	}

	return (
		<>
			<ul style={style} className="board">
				{tiles.map((tile, index) => (
					<Tile
						key={tile}
						index={index}
						imgUrl={imageUrl}
						tile={tile}
						width={pieceWidth}
						height={pieceHeight}
						handleTileClick={handleTileClick}
						BOARD_SIZE={BOARD_SIZE}
					/>
				))}
			</ul>

			{/* Si no ha iniciado el juego INICIAR JUEGO */}
			{!isStarted ? (
				<div className="flex justify-center items-center mt-8">
					<button
						onClick={() => handleStartClick()}
						className="bg-custom-doradodark hover:bg-custom-doradonormal text-white font-bold py-2 px-4 rounded-xl shadow-md transform transition duration-300 hover:scale-110"
					>
						Iniciar juego
					</button>
				</div>
			) : (
				// Si esta jugando REINICIAR JUEGO
				<div className="flex justify-center items-center mt-8">
					<button
						onClick={() => handleShuffleClick()}
						className="bg-custom-rojo hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl shadow-md transform transition duration-300 hover:scale-110"
					>
						Reiniciar juego
					</button>
				</div>
			)}
		</>
	);
}

export default Board;
