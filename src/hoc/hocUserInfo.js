import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function hocUserInfo(Component) {
	class UserInfoComponent extends Component {
		render() {
			return (
				<Component {...this.props.user} />
			)
		}
	}
	return connect((state) => {
		return {
			user: state.user
		}
	}, null)(UserInfoComponent);
}