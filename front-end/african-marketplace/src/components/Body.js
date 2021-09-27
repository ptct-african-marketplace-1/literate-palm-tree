import React from 'react'
import { Route, Switch, } from 'react-router-dom'
import Login from './Login'
import About from './About'
import CreateAccount from './CreateAccount'
import ProtectedComponent from './ProtectedComponent'
import PrivateRoute from './PrivateRoute'

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
			<Route path="/protected">
				<PrivateRoute component={ProtectedComponent} />
			</Route>
			<Route path="/"></Route>
		</Switch>
	)
}
export default Body