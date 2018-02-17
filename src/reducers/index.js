import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import article from './article';
import user from './user';

export default combineReducers({
	router: routerReducer,
	form: formReducer,
	article,
	user
});