import React, {Component} from 'react';
import {connect} from "react-redux";
import Preload from "../components/Preload";
import Article from "../components/Article";

class ArticleList extends Component {
    render() {
        const {load, articles} = this.props.articles;
        const renderArticles = articles.length && articles.map(
            (article) => <Article
                key={article._id}
                title={article.title}
                author={article.author}
                url={article._id}
            />
        );
        return (
            <div className={'row'}>
                {
                    load && <Preload/>
                }
                {
                    articles.length > 0 && renderArticles
                }
            </div>
        );
    }
}

ArticleList.propTypes = {};

export default connect(state => ({articles: state.article}))(ArticleList);
