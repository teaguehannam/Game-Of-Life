import React from 'react';
import Box from './Box';

const Grid = (props) => {
	var rowsArr = [];
	var boxClass = "";
	const gridStyle = {gridTemplateColumns: `repeat(${props.gridSize.cols}, 1fr)`};

	for(let t = 0; t < props.gridSize.rows; t++) {
		for(let e = 0; e < props.gridSize.cols; e++) {
			let boxId = t + "_" + e;
			boxClass = props.gameState.gridFull[t][e] ? "Box on" : "Box off"
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
		<div className="Grid" style={gridStyle}>
			{rowsArr}
		</div>
	)
}

export default Grid;