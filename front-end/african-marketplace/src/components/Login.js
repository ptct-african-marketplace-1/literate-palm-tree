import React, { useState } from 'react'

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
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">username
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="password">username
					<input
						type="password"
						name="password"
						value={form.password}
						onChange={handleChange}
					/>
				</label>
				<button type="submit">Log in</button>
			</form>
		</div>
	)
}

export default Login