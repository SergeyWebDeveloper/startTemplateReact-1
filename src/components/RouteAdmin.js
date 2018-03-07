import React, {Component} from 'react';
import {Redirect,Route} from 'react-router-dom';
import {connect} from 'react-redux';

export default function requireAuthentication(Component) {
	class AuthenticatedComponent extends Component {
		render() {
			return(
				<div>
					{this.props.user.loginStatus?
						<Component {...this.props} />
						:
						<Redirect to={'/auth/signin'} />
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
