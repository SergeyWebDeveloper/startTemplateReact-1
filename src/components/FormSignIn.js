import React from 'react';
import {Field, reduxForm} from 'redux-form';

let FormSignIn = props => {
	const { handleSubmit } = props;
	return(
		<form onSubmit={handleSubmit}>
			<div className="row">
				<label htmlFor="firstName">Логин</label>
				<Field required name="login" component="input" type="text" />
			</div>
			<div className="row">
				<label htmlFor="Password">Пароль</label>
				<Field required name="password" component="input" type="password" />
			</div>
			<div className="row">
				<button className="waves-effect waves-light btn">Войти</button>
			</div>
		</form>
	)
};

FormSignIn = reduxForm({
	form: 'signin'
})(FormSignIn);

export default FormSignIn;