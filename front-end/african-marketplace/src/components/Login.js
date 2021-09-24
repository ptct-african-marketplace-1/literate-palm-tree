import React, { useState } from 'react'
import { Button, Form,  Label, Input, FormGroup, Col } from 'reactstrap';


const Login = () => {

	const [form, setForm] = useState({
		name: '',
		password:'',
	})

	const handleChange = e => {
		setForm({
			...form,
			[e.target.name] : e.target.value
	})
	}
	const handleSubmit = e => {
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