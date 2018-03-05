import React, {Component} from 'react';
import Navigation from "../components/Navigation";
import HomePage from "../components/pages/HomePage";
import Authpage from '../components/Authpage';
import Admin from '../components/pages/Admin';
import NotFound from '../components/pages/NotFound';
import requireAuthentication from '../components/RouteAdmin';
import {Route, Switch} from "react-router-dom";
import ArticlePost from "../components/ArticlePost";
import {signInUser} from "../reducers/user";
import {store} from '../index'

class App extends Component {

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData && userData.login && userData.password) {
            store.dispatch(signInUser({login: userData.login, password: userData.password}));
        }
    }

	render() {
		return (
			<div>
				<header>
					<Navigation/>
				</header>
				<main className={'container'}>
					<Switch>
						<Route exact path={'/'} component={HomePage}/>
						<Route path={'/auth'} component={Authpage}/>
						<Route path={'/admin'} component={requireAuthentication(Admin)}/>
						<Route path={'/article-post/:id'} component={ArticlePost}/>
						<Route path={'*'} component={NotFound} />
					</Switch>
				</main>
			</div>
		)
	}
}

export default App;
