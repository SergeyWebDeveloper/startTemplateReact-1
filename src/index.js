import React from 'react';
import {render} from 'react-dom';

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import App from './containers/App';
import reducer from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk,middleware))
);

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Router>
				<Switch>
					<Route exact path='/' component={App} />
					<Route path='*' component={()=>'Not Found'} />
				</Switch>
			</Router>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
