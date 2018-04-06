import React, {Component} from 'react';
import FormNewPost from "../FormNewPost";
import {loadArticlesAdmin} from '../../reducers/user';
import {connect} from "react-redux";

class AdminPosts extends Component {
	state = {
		openForm: false,
		error: false
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
					this.props.dispatch(loadArticlesAdmin(this.props.id));
					this.setState({openForm: false});
				}
			});
	};

	componentDidMount() {
		if (!this.props.user.adminPosts.load) {
			this.props.dispatch(loadArticlesAdmin(this.props.id));
		}
	}

	deletePost=(id)=>{
		fetch('/api/delete-post?id='+id)
			.then(res=>res.json())
			.then(data=>this.props.dispatch(loadArticlesAdmin(this.props.id)));
	}

	renderWritePost() {
		return (
			<div className="row">
				{this.props.user.adminPosts.posts.map(post=>{
					return(
						<div key={post._id} className="col s12 m6">
							<div className="card blue-grey darken-1">
								<div className="card-content white-text">
									<span className="card-title">{post.title}</span>
									<p>{post.body}</p>
									<p>Дата написания - {post.date}</p>
								</div>
								<div className="card-action">
									<p>
										<button className='waves-effect waves-light btn' onClick={this.deletePost.bind(null,post._id)}>Удалить пост</button>
									</p>
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
				{this.props.adminPosts.posts.length ? this.renderWritePost() : 'Написанных постов нет'}
			</div>
		)
	}
}

export default connect(state => ({user: state.user}))(AdminPosts);