import React from 'react';
import '../style/Intro.scss';

const Intro = (props) => {

	const playGame = () => {
		props.history.push('/game');
	}

	return (
		<div className="Intro">
			<div className="Title">
				<h2>Conway's Game of Life</h2>
			</div>
			<div className="Content">
				<p>Any live cell with two or three live neighbours survives.</p>
	    		<p>Any dead cell with three live neighbours becomes a live cell.</p>
	    		<p>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</p>
			</div>
			<button onClick={playGame}>Play Game</button>
		</div>
	)
}

export default Intro;