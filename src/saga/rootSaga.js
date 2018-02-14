import {takeEvery} from "redux-saga/effects";
import {ARTICLE_REQUESTING} from "../reducers/article";
import {fetchLoadArticles} from "./articles";
import {USER_LOGIN_REQUEST} from "../reducers/user";
import {userWorker} from "./user";


export function* rootSaga() {
	yield takeEvery(ARTICLE_REQUESTING,fetchLoadArticles);
	yield takeEvery(USER_LOGIN_REQUEST,userWorker)
}

