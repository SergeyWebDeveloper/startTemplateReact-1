import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
	return(
		<div>
			<p>Страница не найдена.</p>
			<p>Вернуться на <Link to={'/'}>главную</Link></p>
		</div>
	)
};

export default NotFound;