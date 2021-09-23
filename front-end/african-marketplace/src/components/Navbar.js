import React from 'react';
import { Link } from 'react-router-dom'



const NavBar = () => {
	return(
		<div className="Navbar">
			<Link to="/">African Marketplace</Link>
			<Link to="/login">Log In</Link>
			<Link to="/about">About</Link>
			<Link to="/register">Create Acount</Link>	
		</div>
        
	)
}

export default NavBar

