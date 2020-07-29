// Home component
import React, { useState } from 'react';

// ------ Temp settings ------
const rows = 25;
const cols = 25;

// ------ Functions ------
function initGrid(rows, cols, falsePercent = 0.9) {
	let arr = new Array(cols);
	for(let t = 0; t < arr.length; t++) {
		arr[t] = new Array(cols); // create row of columns
		for(let e = 0; e < arr[t].length; e++) {
			arr[t][e] = Math.random() >= falsePercent;
		}
	}
	return arr
}

// ------ Box ------
const Box = (props) => {
	//console.log("Box props", props);

	const selectBox = () => {
		props.selectBox(props.row, props.col)
	}

	return (
		<div 
			className={props.boxClass}
			id={props.boxId}
			onClick={selectBox}
		/>
	)
}

// ------ Grid ------
const Grid = (props, selectBox) => {
	//console.log("Grid Props", props.state)
	var rowsArr = [];
	var boxClass = "";

	for(let t = 0; t < rows; t++) {
		for(let e = 0; e < cols; e++) {
			let boxId = t + "_" + e;
			boxClass = props.state.gridFull[t][e] ? "Box on" : "Box off"
			rowsArr.push(
				<Box 
					boxClass={boxClass}
					key={boxId}
					boxId={boxId}
					row={t}
					col={e}
					selectBox={props.selectBox}
				/>
			)
		}
	}

	return (
		<div className="Grid">
			{rowsArr}
		</div>
	)
}

// ------ Buttons ------
const Buttons = (props) => {
	console.log(props);
	return(
		<div className="Buttons">
			<button onClick={props.playButton}>Play</button>
			<button onClick={props.clear}>Clear</button>
			<button onClick={props.randomSeed}>Random</button>
		</div>
	)

}

// ------ Home ------
const Home = () => {
	// --- State ---
	const [state, setState] = useState({
		gridFull: initGrid(rows, cols),
		generation: 0
	})

	// --- Click box on/off --- 
	const selectBox = (row, col) => {
		let gridCopy = state.gridFull;
		gridCopy[row][col] = !gridCopy[row][col];
		setState({
			gridFull: gridCopy,
			generation: state.generation
		});
	}

	// --- Game logic ---
	const playButton = () => {
		let mainGrid = state.gridFull;
		let secondGrid = JSON.parse(JSON.stringify(state.gridFull));
		// Game Logic
		for (let i = 0; i < rows; i++) {
		  for (let j = 0; j < cols; j++) {
		    let count = 0;
		    if (i > 0) if (mainGrid[i - 1][j]) count++;
		    if (i > 0 && j > 0) if (mainGrid[i - 1][j - 1]) count++;
		    if (i > 0 && j < cols - 1) if (mainGrid[i - 1][j + 1]) count++;
		    if (j < cols - 1) if (mainGrid[i][j + 1]) count++;
		    if (j > 0) if (mainGrid[i][j - 1]) count++;
		    if (i < rows - 1) if (mainGrid[i + 1][j]) count++;
		    if (i < rows - 1 && j > 0) if (mainGrid[i + 1][j - 1]) count++;
		    if (i < rows - 1 && j < cols - 1) if (mainGrid[i + 1][j + 1]) count++;
		    if (mainGrid[i][j] && (count < 2 || count > 3)) secondGrid[i][j] = false;
		    if (!mainGrid[i][j] && count === 3) secondGrid[i][j] = true;
		  }
		}
		setState({
			gridFull: secondGrid,
			generation: state.generation + 1
		})
	}

	// --- Clear grid ---
	const clear = () => {
		setState({
			gridFull: initGrid(cols,rows, 1),
			generation: 0
		})
	}

	// --- Randomize grid ---
	const randomSeed = () => {
		setState({
			gridFull: initGrid(cols,rows, 0.8),
			generation: 0
		})
	}

	return (
		<div>
			<h2>~ Game of Life ~</h2>
			<Buttons
				playButton={playButton}
				clear={clear}
				randomSeed={randomSeed}
			/>
			<Grid state={state} selectBox={selectBox}/>
			<h3>Generation: {state.generation}</h3>
		</div>
	);
};


export default Home;