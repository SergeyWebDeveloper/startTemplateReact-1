import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormSignIn from '../components/FormSignIn';
import {signInUser} from '../reducers/user';
import {connect} from 'react-redux';

class SignIn extends Component {
	submit = values => {
		this.props.signInUser(values);
	};
	render() {
		const {error} = this.props.user;
		return (
			<div className='signin'>
				<h3>Войти в систему</h3>
				{error.status && error.message}
				<FormSignIn error={error} onSubmit={this.submit} />
			</div>
		);
	}
}

SignIn.propTypes = {};

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
};

export default connect(mapStateToProps,{signInUser})(SignIn);
