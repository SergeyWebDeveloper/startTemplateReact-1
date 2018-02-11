import React from 'react';
import {Field, reduxForm} from 'redux-form';

let FormSignIn = props => {
	const { handleSubmit } = props;
	return(
		<form onSubmit={handleSubmit}>
			<div className="row">
				<label htmlFor="firstName">Логин</label>
				<Field name="login" component="input" type="text" />
			</div>
			<div className="row">
				<label htmlFor="firstName">Пароль</label>
				<Field name="password" component="input" type="password" />
			</div>
			<button className="waves-effect waves-light btn">Войти</button>
		</form>
	)
};

FormSignIn = reduxForm({
	form: 'signin'
})(FormSignIn);

export default FormSignIn;