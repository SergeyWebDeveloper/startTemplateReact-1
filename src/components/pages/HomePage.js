import React, {Component} from 'react';
import {loadArticles} from "../../reducers/article";
import {store} from '../../index'
import ArticleList from "../../containers/ArticleList";
import {ARTICLE_REQUESTING} from "../../reducers/article";

class HomePage extends Component {

    componentDidMount() {
        store.dispatch(loadArticles())
    }

    render() {
        return (
            <div>
                <ArticleList/>
            </div>
        );
    }
}

HomePage.propTypes = {};

export default HomePage;
