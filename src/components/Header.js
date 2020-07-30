import React from 'react';

const Header = (props) => {

	return (
		<div className="Header">
			<div className="Box">
				<h2>Generation: {props.gameState.generation}</h2>
			</div>
			<div className="Box">
				<h3>{(1000 / props.speed.speed * 0.8417).toFixed(2)} FPS</h3>
			</div>	
		</div>
	)
}

export default Header;