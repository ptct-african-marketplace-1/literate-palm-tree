import React, { useState } from 'react'

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
			[e.target.name] : e.target.value
		})
	}
	const handleSubmit = e => {
		e.preventDefault()
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="name">Email
					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="name">Password
					<input
						type="password"
						name="password"
						value={form.password}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="name">Confirm Password
					<input
						type="password"
						name="confirmPassword"
						value={form.confirmPassword}
						onChange={handleChange}
					/>
				</label>
				<button type="submit">Register</button>
			</form>
		</div>
	)
}

export default CreateAccount