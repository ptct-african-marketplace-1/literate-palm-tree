import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form, Label, Input, FormGroup, Col } from 'reactstrap';
import { axiosWithAuth } from '../axiosWithAuth';
import axios from 'axios'


const Login = () => {
	const { history } = useHistory()

	const [form, setForm] = useState({
		name: '',
		password: '',
	})

	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		axios.post('http://localhost:3000/api/auth/login', form)
			.then(res => {
				console.log(res)
				localStorage.setItem("authtoken", res.data.payload);
				localStorage.setItem("name", res.data.name);
				localStorage.setItem("password", res.data.password);
				history.push('/protected');
			})
			.catch(err => {
				console.log(err);
			})
		e.preventDefault()
		setForm({
			...form,
			name: '',
			password: ''
		})
	}
	return (
		<div className="Form">
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label htmlFor="name">
						<Col>
							<Input
								type="text"
								name="name"
								value={form.name}
								placeholder="Username"
								onChange={handleChange}

							/>
						</Col>
					</Label>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="password">
						<Col>
							<Input
								type="password"
								name="password"
								value={form.password}
								placeholder="Password"
								onChange={handleChange}
							/>
						</Col>
					</Label>
				</FormGroup>
				<Button type="submit">Log in</Button>
			</Form>
		</div>
	)
}

export default Login