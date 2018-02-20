import React, {Component} from 'react';
import {Redirect,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Admin from './pages/Admin';

// class RouteAdmin extends Component{
// 	// messageAuth(){
// 	// 	return(
// 	// 		<div>
// 	// 			<p>Защищенная страница! Пожалуйста, зайдите под своими учетными данными</p>
// 	// 			<p><Link to={'/auth/signin'}>Войти</Link></p>
// 	// 		</div>
// 	// 	)
// 	// }
// 	render(){
// 		return(
// 			<div>
// 				{this.props.user.loginStatus?
// 					<Route path={'/admin'} component={Admin} />
// 					:
// 					<Redirect to={'/auth/signin'} />
// 					// this.messageAuth()
// 				}
// 			</div>
// 		)
// 	}
// }
//
// export default connect((state)=>{
// 	return {
// 		user: state.user
// 	}
// },null)(RouteAdmin);


export default function requireAuthentication(Component) {
	class AuthenticatedComponent extends Component {
		render() {
			return(
				<div>
					{this.props.user.loginStatus?
						<Component {...this.props} />
						:
						<Redirect to={'/auth/signin'} />
						// this.messageAuth()
					}
				</div>
			)
		}
	}
	function mapStateToProps(state) {
		return {
			user: state.user
		}
	}
	return connect(mapStateToProps,null)(AuthenticatedComponent);
}
