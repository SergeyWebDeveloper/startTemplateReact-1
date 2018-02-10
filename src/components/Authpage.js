import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import SignIn from "../containers/SignIn";
import SignUp from "../containers/SignUp";

const Authpage = props => {
	return (
		<div>
			<p>Родительский компонент Authpage</p>
			<Route path='/auth/signin' component={SignIn}/>
			<Route path='/auth/signup' component={SignUp}/>
		</div>
	);
};

Authpage.propTypes = {

};

export default Authpage;
