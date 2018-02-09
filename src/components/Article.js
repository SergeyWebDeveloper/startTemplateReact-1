import React, {Component} from 'react';

class Article extends Component {
    render() {
        return (
            <div className="col s12 m4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{this.props.title}</span>
                        <p>{this.props.author}</p>
                    </div>
                    <div className="card-action">
                        <a href={this.props.url} target='_blank'>Open</a>
                    </div>
                </div>
            </div>
        );
    }
}

Article.propTypes = {};

export default Article;
