// Home component
import React, { useState } from 'react';

function initGrid(rows, cols) {
	let arr = new Array(cols);
	for(let t = 0; t < arr.length; t++) {
		arr[t] = new Array(cols); // create row of columns
		for(let e = 0; e < arr[t].length; e++) {
			arr[t][e] = Math.random() >= 0.9; // set all to 90% chance of false
		}
	}
	return arr
}

const Box = (props) => {
	console.log("Box props", props);
	return (
		<div 
			className={props.boxClass}
			id={props.boxId}
			onClick={props.selectBox}
			col={props.col}
			row={props.row}
		/>
	)
}

const Grid = (props, selectBox) => {
	//console.log("Grid Props", props.state)
	let width = props.state.cols * 14;
	var rowsArr = [];
	var boxClass = "";

	for(let t = 0; t < props.state.rows; t++) {
		for(let e = 0; e < props.state.cols; e++) {
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
		<div className="Grid" style={{width: width}}>
			{rowsArr}
		</div>
	)
}

const Home = () => {
	const [state, setState] = useState({
		speed: 100,
		cols: 10,
		rows: 10,
		generations: 0,
		gridFull: initGrid(10, 10)
	})

	const selectBox = (row, col) => {
		let gridCopy = JSON.parse(JSON.stringify(state.gridFull));
		console.log("row",row.target.col);
		//gridCopy[row][col] = !gridCopy[row][col];
		setState({gridFull: gridCopy});
	}
	
	return (
		<div>
			<h2>~ Game of Life ~</h2>
			<Grid state={state} selectBox={selectBox}/>
		</div>
	);
};


export default Home;