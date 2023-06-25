import React, { useState } from "react";
import Tile from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants";
import { canSwap, shuffle, swap, isSolved } from "./helpers";

function Board({ imgUrl }) {
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

	const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
	const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
	const style = {
		width: BOARD_SIZE,
		height: BOARD_SIZE,
	};
	const hasWon = isSolved(tiles);

	return (
		<>
			<ul style={style} className="board">
				{tiles.map((tile, index) => (
					<Tile
						key={tile}
						index={index}
						imgUrl={imgUrl}
						tile={tile}
						width={pieceWidth}
						height={pieceHeight}
						handleTileClick={handleTileClick}
					/>
				))}
			</ul>

			{hasWon && isStarted && <div>Puzzle solved 🧠 🎉</div>}
			{!isStarted ? (
				<div className="flex justify-center items-center mt-8">
					<button
						onClick={() => handleStartClick()}
						className="bg-custom-doradodark hover:bg-custom-doradonormal text-white font-bold py-2 px-4 rounded shadow-md transform transition duration-300 hover:scale-110"
					>
						Iniciar juego
					</button>
				</div>
			) : (
				<div className="flex justify-center items-center mt-8">
					<button
						onClick={() => handleShuffleClick()}
						className="bg-custom-rojo hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md transform transition duration-300 hover:scale-110"
					>
						Reiniciar juego
					</button>
				</div>
			)}
		</>
	);
}

export default Board;
