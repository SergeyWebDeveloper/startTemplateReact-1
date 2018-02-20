import React, {Component,Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import {Link,Redirect} from "react-router-dom";
import {connect} from 'react-redux';


class Navigation extends Component {
	constructor(){
		super();
		this.state={
			exit: false
		};
		this.exitAccount=this.exitAccount.bind(this);
		this.infoUser=this.infoUser.bind(this);
	}
	exitAccount(){
		localStorage.clear();
		this.setState({exit: true});
	}
	userSignIn(){
		return (
			<Fragment>
				<li><Link to={'/admin'}>Мой профиль</Link></li>
				<li><button onClick={this.exitAccount} className="btn waves-effect waves-light" type="submit" name="action">Выйти</button></li>
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
	infoUser(){
		const {login} = this.props.user;
		return(
			<div className="collection" style={{float: 'right',marginRight: '20px'}}>
				<a className="collection-item">Ваш логин - {login}</a>
			</div>
		)
	}
	render() {
		const {user} = this.props;
		return (
			<nav>
				<div className="nav-wrapper indigo">
					<ul id="nav-mobile" className="left hide-on-med-and-down">
						<li><Link to={'/'}>Домашняя страница</Link></li>
						{this.state.exit && <Redirect to={'/'}/>}
						{user.loginStatus? this.userSignIn() : this.userSignOut()}
					</ul>
					{user.loginStatus && this.infoUser()}
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
