import React from 'react';
import {render} from 'react-dom';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter as Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import {ConnectedRouter, routerMiddleware} from 'react-router-redux';

import './registerServiceWorker';

import App from './containers/App';
import reducer from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk,middleware))
);

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Router>
                <App/>
			</Router>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
