import React, {Component} from 'react';
import FormNewPost from "../FormNewPost";
import {store} from '../../index';
import {loadArticlesAdmin} from '../../reducers/user';

class AdminPosts extends Component {
	state = {
		openForm: false,
		error: false,
		articles: []
	};
	handleOpenForm = () => {
		this.setState({openForm: !this.state.openForm})
	};
	errorMessage = () => {
		return (
			<p>К сожалению, возникла ошибка, попробуйте снова!</p>
		)
	};
	submit = values => {
		const {info} = this.props;
		const data = {
			body: values.body,
			title: values.theme,
			author: `${info.name} ${info.family}`,
			idAuthor: info._id,
			name: info.name,
			family: info.family
		};
		fetch('/api/articles/newpost', {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(req => {
				if (req.error) {
					this.setState({error: true})
				} else if (req.success) {
					this.setState({openForm: false});
				}
			});
	};

	componentWillMount() {
		if(this.props.id){
			store.dispatch(loadArticlesAdmin(this.props.id));
		}
	}

	renderWritePost() {
		const {articles} = this.state;
		return (
			<div className='row'>
				{articles.map(art => {
					return (
						<div className="col s12 m7">
							<div className="card">
								<div className="card-image">
									<span className="card-title">{art.title}</span>
								</div>
								<div className="card-content">
									<p>{art.body}</p>
								</div>
								<div className="card-action">
									<a href="#">This is a link</a>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		)
	}

	render() {
		return (
			<div className='admin__posts'>
				<ul className="collapsible" data-collapsible="accordion">
					<li>
						<div className={`collapsible-header${this.state.openForm ? ' active' : ''}`} onClick={this.handleOpenForm}>
							<i className="material-icons">fiber_new</i>
							Написать пост
						</div>
						<div className="collapsible-body"
								 style={this.state.openForm ? {display: 'block'} : {display: 'none'}}
						>
							<FormNewPost onSubmit={this.submit}/>
							{this.state.error && this.errorMessage()}
						</div>
					</li>
				</ul>
				{/*{this.state.articles.length ? this.renderWritePost() : 'Написанных постов пока нет'}*/}
			</div>
		)
	}
}

export default AdminPosts;