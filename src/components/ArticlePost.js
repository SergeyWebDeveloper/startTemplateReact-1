import React, {Component} from 'react';
import Preload from '../components/Preload';
import {Link} from 'react-router-dom';

class ArticlePost extends Component {
	state = {
		article: {}
	};

	componentWillMount() {
		fetch('/api/article-post?id=' + this.props.match.params.id)
			.then(res => res.json())
			.then(data => this.setState({article: data}))
	}

	renderArticle() {
		const {title, author, body, date, comments} = this.state.article;
		return (
			<div className="row">
				<div className="col s12 m6">
					<div className="card blue-grey darken-1">
						<div className="card-content white-text">
							<span className="card-title">{title}</span>
							<p>{body}</p>
							<p>Время написания: {date}</p>
							<p>Автор: {author}</p>
							<p>{comments.length ? `${comments.length} комментариев` : 'Комментариев нет'}</p>
						</div>
						<div className="card-action">
							<Link to={'/'}>Назад</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}

	render() {
		return (
			Object.keys(this.state.article).length ? this.renderArticle() : <Preload/>
		)
	}
}

export default ArticlePost;