import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Article extends Component {

	render() {
		const {title,author,url,comments} = this.props;
		return (
			<div className="col s12 m4">
				<div className="card blue-grey darken-1">
					<div className="card-content white-text">
						<span className="card-title">{title}</span>
						<p>{author}</p>
					</div>
					<div className="card-content white-text">
						<p>{comments.length ? `${comments.length} комментариев` : 'Комментариев нет'}</p>
					</div>
					<div className="card-action">
						<Link to={`/article-post/${url}`}>Open</Link>
					</div>
				</div>
			</div>
		);
	}
}

Article.propTypes = {};

export default Article;
