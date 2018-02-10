import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import article from './article';
import user from './user';

export default combineReducers({
	router: routerReducer,
	article,
	user
});