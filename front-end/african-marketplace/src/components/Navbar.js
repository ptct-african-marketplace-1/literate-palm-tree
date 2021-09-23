import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './Login'
const Navbar = () => {
	return(
		<Router>
			<h1>African Marketplace</h1>
			<Link to="/loggin">Log In</Link>
			<Link to="/about">About</Link>
			{/* the about page does not exist, it filler buttons */}
			<Switch>
				<Route path="login">
					<Login />
				</Route>
				<Route path="about">
					<About />
				</Route>
			</Switch>
        
		
        </Router>
	)
}

export default Navbar

