import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormSignIn from '../components/FormSignIn';

class SignIn extends Component {
	submit = values => {
		console.log(values)
	};
	render() {
		return (
			<div className='signin'>
				<h3>Войти в систему</h3>
				<FormSignIn onSubmit={this.submit} />
			</div>
		);
	}
}

SignIn.propTypes = {};


export default SignIn;
