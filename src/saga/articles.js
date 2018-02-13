import {call, put, takeEvery} from "redux-saga/effects";
import {
	ARTICLE_REQUESTING,
	ARTICLE_SUCCESS,
	ARTICLE_FAILED,
	getArticles
} from '../reducers/article';

function* fetchLoadArticles() {
	try{
		const data = yield call(getArticles);
		yield put({type: ARTICLE_SUCCESS, payload: {data}});
	} catch (e) {
		yield put({type: ARTICLE_FAILED, payload: e});
	}
}


export function* finishSaga() {
	yield takeEvery(ARTICLE_REQUESTING,fetchLoadArticles);
}
