import React from 'react';
import {Field, reduxForm} from 'redux-form';

let FormNewPost = props => {
	const { handleSubmit } = props;
	return(
		<form onSubmit={handleSubmit}>
			<div className="row">
				<label htmlFor="title">Заголовок</label>
				<Field required name="theme" component="input" type="text" />
			</div>
			<div className="row">
				<label htmlFor="post">Пост</label>
				<Field required name="body" style={{height: '150px'}} className="materialize-textarea" component="textarea" />
			</div>
			<div className="row">
				<button className="waves-effect waves-light btn">Опубликовать</button>
			</div>
		</form>
	)
};

FormNewPost = reduxForm({
	form: 'newpost'
})(FormNewPost);

export default FormNewPost;