import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div style={{display: 'flex', justifyContent: 'flex-start'}}>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height : 155}}>
			      <div className="Tilt-inner pa3">
			        	<img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
			      </div>
    		</Tilt>
		</div>
	);
}

export default Logo;