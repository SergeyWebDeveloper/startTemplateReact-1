import React, {Component} from 'react';
import FormSignUp from "../components/FormSignUp";
import {Redirect} from "react-router-dom";

class SignUp extends Component {

	state = {
		error: false,
		success: false
	};

	submit = values => {

		const data = {
			name: values.name,
			family: values.family,
			gender: values.gender,
			login: values.login,
			password: values.password
		};

		fetch('/api/user', {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(resp => {
				if (resp.hasOwnProperty('error'))
					this.setState({error: true});
				else if (resp.hasOwnProperty('success'))
					this.setState({success: true});
			}, (e) => this.setState({error: true}))
	};

	render() {
		return (
			<div className='signup'>
				<h3>Зарегистрироваться в системе</h3>
				<FormSignUp onSubmit={this.submit}/>
				{
					this.state.success && <Redirect to={'/auth/signin'}/>
				}
			</div>
		);
	}
}

SignUp.propTypes = {};

export default SignUp;
