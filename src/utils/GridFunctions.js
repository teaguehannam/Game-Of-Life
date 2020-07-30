module.exports = {
	initGrid,
	gameLogic
}

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

function gameLogic(mainGrid) {
	const rows = mainGrid.length;
	const cols = mainGrid[0].length;
	let secondGrid = JSON.parse(JSON.stringify(mainGrid));

	// For each column in each row, count neighbors.
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			let count = 0; 
			if (i > 0) {
				if (mainGrid[i - 1][j]) count++;
			} 
			if (i > 0 && j > 0) {
				if (mainGrid[i - 1][j - 1]) count++;
			} 
			if (i > 0 && j < cols - 1) {
				if (mainGrid[i - 1][j + 1]) count++;
			}
			if (j < cols - 1) {
				if (mainGrid[i][j + 1]) count++;
			} 
			if (j > 0) {
				if (mainGrid[i][j - 1]) count++;
			}
			if (i < rows - 1) {
				if (mainGrid[i + 1][j]) count++;
			} 
			if (i < rows - 1 && j > 0){ 
				if (mainGrid[i + 1][j - 1]) count++;
			}
			if (i < rows - 1 && j < cols - 1) {
				if (mainGrid[i + 1][j + 1]) count++;
			}
			// Dead if not 2 or 3 neighbors
			if (mainGrid[i][j] && (count < 2 || count > 3)) {
				secondGrid[i][j] = false;
			} 
			// Alive if 3 neighbors
			if (!mainGrid[i][j] && count === 3) {
				secondGrid[i][j] = true;
			}
		}
	}
	return secondGrid
}

