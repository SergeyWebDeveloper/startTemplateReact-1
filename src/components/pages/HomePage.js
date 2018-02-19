import React, {Component} from 'react';
import {loadArticles} from "../../reducers/article";
import {signInUser} from "../../reducers/user";
import {store} from '../../index'
import ArticleList from "../../containers/ArticleList";

class HomePage extends Component {

	componentDidMount() {
		const userData = JSON.parse(localStorage.getItem('user'));
		store.dispatch(loadArticles());
		if (userData && userData.login && userData.password) {
			store.dispatch(signInUser({login: userData.login, password: userData.password}));
		}
	}

	render() {
		return (
			<div>
				<ArticleList/>
			</div>
		);
	}
}

HomePage.propTypes = {};

export default HomePage;
