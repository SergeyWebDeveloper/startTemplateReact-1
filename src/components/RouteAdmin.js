import React, {Component} from 'react';
import {Redirect,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Admin from './pages/Admin';

class RouteAdmin extends Component{
	// messageAuth(){
	// 	return(
	// 		<div>
	// 			<p>Защищенная страница! Пожалуйста, зайдите под своими учетными данными</p>
	// 			<p><Link to={'/auth/signin'}>Войти</Link></p>
	// 		</div>
	// 	)
	// }
	render(){
		return(
			<div>
				{this.props.user.loginStatus?
					<Route exact path={'/admin'} component={Admin} />
					:
					<Redirect to={'/auth/signin'} />
					// this.messageAuth()
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