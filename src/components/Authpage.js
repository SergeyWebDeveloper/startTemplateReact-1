import React from 'react';
import {Route} from 'react-router-dom';
import SignIn from "../containers/SignIn";
import SignUp from "../containers/SignUp";

const Authpage = () => {
	return (
		<div>
			<Route path='/auth/signin' component={SignIn}/>
			<Route path='/auth/signup' component={SignUp}/>
		</div>
	);
};

Authpage.propTypes = {

};

export default Authpage;
