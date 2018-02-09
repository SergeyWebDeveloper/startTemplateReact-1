import React, {Component} from 'react';
import {connect} from "react-redux";
import Preload from "../components/Preload";
import Article from "../components/Article";

class ArticleList extends Component {
    render() {
        const {load, articles} = this.props.articles;
        const renderArticles = articles.length && articles.map(
            (a) => <Article
                key={a.url}
                title={a.title}
                author={a.author}
                url={a.url}
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
