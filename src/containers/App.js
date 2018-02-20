import React, {Component} from 'react';
import Navigation from "../components/Navigation";
import HomePage from "../components/pages/HomePage";
// import RouteAdmin from "../components/RouteAdmin";
import Authpage from '../components/Authpage';
import Admin from '../components/pages/Admin';
import NotFound from '../components/pages/NotFound';
import requireAuthentication from '../components/RouteAdmin';
import {Route, Switch} from "react-router-dom";



class App extends Component {
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
						<Route path={'*'} component={NotFound} />
					</Switch>
				</main>
			</div>
		)
	}
}

export default App;
