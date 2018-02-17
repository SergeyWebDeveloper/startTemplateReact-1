import React from 'react';
import {Field, reduxForm} from 'redux-form';

let FormSignUp = props => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <label htmlFor="firstName">Логин</label>
                <Field name="login" component="input" type="text"/>
            </div>
            <div className="row">
                <label htmlFor="Password">Пароль</label>
                <Field name="password" component="input" type="password"/>
            </div>
            <div className="row">
                <button className="waves-effect waves-light btn">Зарегистрироваться</button>
            </div>
            <div className="row">
            </div>
        </form>
    )
};

FormSignUp = reduxForm({
    form: 'signup'
})(FormSignUp);

export default FormSignUp;