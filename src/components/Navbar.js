import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
	return(
		<nav>
			<div className="nav-wrapper">
				<Link className="brand-logo right" to={'/admin'}>Админка</Link>
				<ul id="nav-mobile" className="left hide-on-med-and-down">
					<li><Link to={'/admin/info'}>Инфо</Link></li>
					<li><Link to={'/admin/posts'}>Посты</Link></li>
				</ul>
			</div>
		</nav>
	)
};
