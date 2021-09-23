import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './Login'
import About from './About'


const Navbar = () => {
	return(
		<Router>
			<div>
				<Link to="/">African Marketplace</Link>
				<Link to="/login">Log In</Link>
				<Link to="/about">About</Link>
				{/* the about page does not exist, it filler buttons */}
			</div>
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/"></Route>
			</Switch>
        </Router>
	)
}

export default Navbar

