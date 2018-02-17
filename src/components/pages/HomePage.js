import React, {Component} from 'react';
import {loadArticles} from "../../reducers/article";
import {store} from '../../index'
import ArticleList from "../../containers/ArticleList";

class HomePage extends Component {

    componentWillMount() {
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
