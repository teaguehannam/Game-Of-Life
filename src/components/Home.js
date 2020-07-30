// Home component
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Grid from './Grid';
import Buttons from './Buttons'
const GridFunctions = require('../utils/GridFunctions');
const gridSize = {rows: 33, cols: 33}

const Home = () => {

	// --- State ---
	const [isPlaying, setIsPlaying] = useState(false);
	const [gameState, setGameState] = useState({
		gridFull: GridFunctions.initGrid(gridSize.rows, gridSize.cols),
		generation: 0
	})
	const [speed, setSpeed] = useState({speed: 500})

	// If isPlaying = true, useEffect will run oneStep()
	function togglePlaying() {
		setIsPlaying(!isPlaying);
	}

	useEffect(() => {
		let interval = null;
		if (isPlaying) {
			interval = setInterval(() => {
				let newGrid = GridFunctions.gameLogic(gameState.gridFull);
				setGameState({
					gridFull: newGrid,
					generation: gameState.generation + 1
				})
			}, speed.speed);
		}
		return () => clearInterval(interval);
	}, [isPlaying, gameState.gridFull, gameState.generation,speed.speed]);

	// --- Move forward one step ---
	const oneStep = () => {
		let newGrid = GridFunctions.gameLogic(gameState.gridFull);
		setGameState({
			gridFull: newGrid,
			generation: gameState.generation + 1
		})
	}

	// --- Click box on/off --- 
	const selectBox = (row, col) => {
		if(!isPlaying){
			let gridCopy = gameState.gridFull;
			gridCopy[row][col] = !gridCopy[row][col];
			setGameState({
				gridFull: gridCopy,
				generation: gameState.generation
			});
		}
	}

	// --- Clear grid ---
	const clear = () => {
		setGameState({
			gridFull: GridFunctions.initGrid(gridSize.cols,gridSize.rows, 1),
			generation: 0
		})
	}

	// --- Randomize grid ---
	const randomSeed = () => {
		setGameState({
			gridFull: GridFunctions.initGrid(gridSize.cols,gridSize.rows, 0.85),
			generation: 0
		})
	}

	const increaseSpeed = () => {
		if(speed.speed > 200){
			setSpeed({speed: speed.speed - 25})
		}
	}

	const decreaseSpeed = () => {
		setSpeed({speed: speed.speed + 25})
	}

	return (
		<div>
			<Header gameState={gameState} speed={speed} />
			<Grid gameState={gameState} selectBox={selectBox} gridSize={gridSize}/>
			<Buttons
				togglePlaying={togglePlaying}
				oneStep={oneStep}
				clear={clear}
				randomSeed={randomSeed}
				decreaseSpeed={decreaseSpeed}
				increaseSpeed={increaseSpeed}
			/>
		</div>
	);
};


export default Home;