import React, { Component } from 'react'
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom'
import './SignUp.css';

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
      redirect: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    
  }
  
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
  }
  
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('http://localhost:5000/users/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
        console.log(response)
        this.setState({redirect: '/home'});
				// if (!response.data.errmsg) {
				// 	console.log('successful signup')
				// 	this.setState({ //redirect to login page
				// 		redirectTo: '/login'
				// 	})
				// } else {
				// 	console.log('username already taken')
        // }
        
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
  if (this.state.redirect) {
    return <Redirect to={this.state.redirect} />
  }
	return (
		<div className="SignupForm">
			<h1 id="heading">Sign up</h1>
			<form className="form-horizontal" >
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Username: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group ">
					<div className=""></div>
					<button
						className="button"
						onClick={(this.handleSubmit)}
						type="submit"
					>Submit</button>
				</div>
			</form>
		</div>

	)
}
}

export default SignUp;