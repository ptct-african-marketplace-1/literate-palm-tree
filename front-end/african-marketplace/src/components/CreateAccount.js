import React, { useState } from 'react'
import { Button, Form, Label, Input, Col, FormGroup } from 'reactstrap';
import axios from 'axios'


const CreateAccount = () => {

	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}
	const handleSubmit = e => {
		axios.post('http://localhost:3000/api/AfricanMarket/items/addItem', form)
			.then(res => console.log(res))
			.catch(err => console.log(err))
		e.preventDefault()
	}
	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label htmlFor="name">
						<Col lg={12}>
							<Input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
							/>
						</Col>
					</Label>
				</FormGroup>

				<FormGroup>
					<Label htmlFor="name">
						<Col lg={12}>

							<Input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
							/>
						</Col>
					</Label>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="name">Password:
						<Col lg={12}>
							<Input
								type="password"
								name="password"
								value={form.password}
								onChange={handleChange}
							/>
						</Col>
					</Label>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="name">Confirm Password
						<Col lg={12}>
							<Input
								type="password"
								name="confirmPassword"
								value={form.confirmPassword}
								onChange={handleChange}
							/>
						</Col>
					</Label>
				</FormGroup>
				<Button type="submit">Register</Button>
			</Form>
		</div>
	)
}

export default CreateAccount