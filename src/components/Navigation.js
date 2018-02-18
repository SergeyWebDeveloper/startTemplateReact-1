import React, {Component,Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';


class Navigation extends Component {
	userSignIn(){
		return (
			<Fragment>
				<li><Link to={'/admin'}>Мой профиль</Link></li>
				<li><button className="btn waves-effect waves-light" type="submit" name="action">Выйти</button></li>
			</Fragment>
		)
	}
	userSignOut(){
		return (
			<Fragment>
				<li><Link to={'/auth/signup'}>Регистрация</Link></li>
				<li><Link to={'/auth/signin'}>Войти</Link></li>
			</Fragment>
		)
	}
	render() {
		const {user} = this.props;
		return (
			<nav>
				<div className="nav-wrapper indigo">
					<ul id="nav-mobile" className="left hide-on-med-and-down">
						<li><Link to={'/'}>Домашняя страница</Link></li>
						{user.loginStatus? this.userSignIn() : this.userSignOut()}
					</ul>
				</div>
			</nav>
		);
	}
}

Navigation.propTypes = {};

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
};

export default connect(mapStateToProps,null)(Navigation);
