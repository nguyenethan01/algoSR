import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
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
        console.log(response.data._id)
        const userID = response.data._id;
        if (response.status === 200) {
          this.setState({redirect: '/home/' + userID});
        }
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
        <div className="form-group" style={{margin:"0 auto 10px auto"}}>
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username" style={{color:"black"}}>Username: </label>
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
				<div className="form-group" style={{margin:"0 auto 10px auto"}}>
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password" style={{color:"black"}}>Password: </label>
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
				<div className="form-group" style={{margin:"10px auto"}}>
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