import React from 'react'
import { Route, Switch, } from 'react-router-dom'
import Login from './Login'
import About from './About'
import CreateAccount from './CreateAccount'

const Body = () => {
	return (
		<Switch>
			<Route path="/login">
				<Login />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/register">
				<CreateAccount />
			</Route>
				<Route path="/"></Route>
		</Switch>
	)
}
export default Body