import React, {Component} from 'react';
import FormSignIn from '../components/FormSignIn';
import {signInUser} from '../reducers/user';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

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
                {this.props.user && <Redirect to={'/'}/>}
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
