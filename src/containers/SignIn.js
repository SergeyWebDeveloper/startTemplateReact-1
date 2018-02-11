import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';

class SignIn extends Component {
	render() {
		return (
			<div className='signin'>
				<h3>Войти в систему</h3>
				<div className="row">
					<label htmlFor="firstName">Логин</label>
					<Field name="login" component="input" type="text" />
				</div>
				<div className="row">
					<label htmlFor="firstName">Пароль</label>
					<Field name="password" component="input" type="password" />
				</div>
				<button className="waves-effect waves-light btn">Войти</button>
			</div>
		);
	}
}

SignIn.propTypes = {};

SignIn = reduxForm({
	form: 'signin'
})(SignIn);

export default SignIn;
