import React from 'react';

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

export default Box;