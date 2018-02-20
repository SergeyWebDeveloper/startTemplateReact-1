import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Admin extends Component {
	infoAdmin(){
		const {name,gender,family} = this.props.user.info;
		const {login} = this.props.user;
		return(
			<ul className="collection">
				<li className="collection-item">Ваш логин - {login}</li>
				{name && <li className="collection-item">Ваше имя - {name}</li> }
				{family && <li className="collection-item">Ваша фамилия - {family}</li> }
				{gender && <li className="collection-item">Ваш пол - {gender}</li> }
			</ul>
		)
	}
	render() {
		return (
			<div className='admin__page'>
				{this.infoAdmin()}
			</div>
		);
	}
}
Admin.propTypes = {};

export default Admin;
