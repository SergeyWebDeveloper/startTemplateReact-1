import React, {Component} from 'react';
import {Redirect,Route} from 'react-router-dom';
import Admin from './pages/Admin';
import {connect} from 'react-redux';

class RouteAdmin extends Component{
	render(){
		return(
			<div>
				{this.props.user.loginStatus ?
					<Route exact path={'/admin'} component={Admin} />
					:
					<Redirect to={'/auth/signin'}/>
				}
			</div>
		)
	}
}

export default connect((state)=>{
	return {
		user: state.user
	}
},null)(RouteAdmin);