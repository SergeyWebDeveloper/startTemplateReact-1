import React, {Component} from 'react';
import Navigation from "../components/Navigation";
import HomePage from "../components/pages/HomePage";
import {Route, Switch} from "react-router-dom";

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
                    </Switch>
                </main>
            </div>
		)
	}
}

export default App;
