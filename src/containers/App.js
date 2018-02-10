import React, {Component} from 'react';
import Navigation from "../components/Navigation";
import HomePage from "../components/pages/HomePage";
import {Route, Switch} from "react-router-dom";

import Authpage from '../components/Authpage';
import SignIn from './SignIn';
import SignUp from './SignUp';

class App extends Component {
	render(){
		return(
            <div>
                <header>
                    <Navigation/>
                </header>

                <main className={'container'}>
                    <Switch>
                        <Route exact path={'/'} component={HomePage}/>
												<Route path={'/auth'} component={Authpage} />
                    </Switch>
                </main>
            </div>
		)
	}
}

export default App;
