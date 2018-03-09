import React from 'react';
import {Field, reduxForm} from 'redux-form';

let FormSignUp = props => {
	const {handleSubmit} = props;
	return (
		<form onSubmit={handleSubmit}>
			<div className="row">
				<label htmlFor="firstName">Ваше имя</label>
				<Field name="name" component="input" type="text"/>
			</div>
			<div className="row">
				<label htmlFor="firstName">Ваша фамилия</label>
				<Field name="family" component="input" type="text"/>
			</div>
			<div className="row">
				<label>Ваш пол</label>
				<div>
					<Field style={{display: 'block'}} name="gender" component="select">
						<option></option>
						<option value="Мужской">Мужской</option>
						<option value="Женский">Женский</option>
					</Field>
				</div>
			</div>
			<div className="row">
				<label htmlFor="firstName">Логин</label>
				<Field required name="login" component="input" type="text"/>
			</div>
			<div className="row">
				<label htmlFor="Password">Пароль</label>
				<Field required name="password" component="input" type="password"/>
			</div>
			<div className="row">
				<button className="waves-effect waves-light btn">Зарегистрироваться</button>
			</div>
		</form>
	)
};

FormSignUp = reduxForm({
	form: 'signup'
})(FormSignUp);

export default FormSignUp;