import {call, put} from "redux-saga/effects";
import {ARTICLE_FAILED, ARTICLE_SUCCESS, getArticles} from '../reducers/article';

export function* fetchLoadArticles() {
    try {
        const data = yield call(getArticles);
        yield put({type: ARTICLE_SUCCESS, payload: {data}});
    } catch (e) {
        yield put({type: ARTICLE_FAILED, payload: e});
    }
}

