import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import InfoAdmin from "./InfoAdmin";
import {Navbar} from '../Navbar';
import hocUserInfo from '../../hoc/hocUserInfo';
import AdminPosts from "./AdminPosts";

class Admin extends Component {
	render() {
		return (
			<div className='admin__page'>
				<Navbar />
				<Route path={'/admin/info'} component={hocUserInfo(InfoAdmin)} />
				<Route path={'/admin/posts'} component={hocUserInfo(AdminPosts)} />
			</div>
		);
	}
}
Admin.propTypes = {};

export default Admin;
