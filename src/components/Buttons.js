import React, { useState } from 'react';

const Buttons = (props) => {
	const [playButton, setPlayButton] = useState(true);

	const togglePlay = () => {
		props.togglePlaying();
		setPlayButton(!playButton)
	}

	return(
		<div className="BottomBar">
			<button onClick={togglePlay}>{playButton ? "Play" : "Pause"}</button>
			<button onClick={props.oneStep}>Single Step</button>
			<button onClick={props.clear}>Clear</button>
			<button onClick={props.randomSeed}>Random</button>
			<button onClick={props.decreaseSpeed}>Slower</button>
			<button onClick={props.increaseSpeed}>Faster!</button>
		</div>
	)

}

export default Buttons;