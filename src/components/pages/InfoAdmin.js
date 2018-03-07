import React, {Component} from 'react';

class InfoAdmin extends Component {
	infoAdmin(){
		const {name,gender,family,articles} = this.props.info;
		const {login} = this.props;
		return(
			<ul className="collection">
				<li className="collection-item">Ваш логин - {login}</li>
				{name && <li className="collection-item">Ваше имя - {name}</li> }
				{family && <li className="collection-item">Ваша фамилия - {family}</li> }
				{gender && <li className="collection-item">Ваш пол - {gender}</li> }
				{articles && <li className="collection-item">Написано постов - {articles.length}</li> }
			</ul>
		)
	}
	render() {
		console.log(this.props);
		return (
			<div className='admin__info'>
				{this.infoAdmin()}
			</div>
		)
	}
}

export default InfoAdmin;