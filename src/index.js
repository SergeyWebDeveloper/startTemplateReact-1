import React from 'react';
import {render} from 'react-dom';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter as Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import {loadState,saveState} from './localStorageState';

import './registerServiceWorker';

import App from './containers/App';
import reducer from './reducers';
import {rootSaga} from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const middleware = routerMiddleware(history);

const persistedState = loadState();
export const store = createStore(
	reducer,
	persistedState,
	composeWithDevTools(applyMiddleware(sagaMiddleware,middleware))
);

store.subscribe(()=>{
	const user=store.getState().user;
	if(user.loginStatus){
		saveState({
			userId: user.id
		});
	}
});

sagaMiddleware.run(rootSaga);


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
