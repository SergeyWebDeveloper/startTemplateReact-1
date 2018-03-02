import {takeEvery} from "redux-saga/effects";
import {ARTICLE_REQUESTING} from "../reducers/article";
import {fetchLoadArticles} from "./articles";
import {USER_LOGIN_REQUEST,USER_LOGIN_REQUEST_EXIT} from "../reducers/user";
import {userWorker,exitUserAccount} from "./user";


export function* rootSaga() {
	yield takeEvery(ARTICLE_REQUESTING,fetchLoadArticles);
	yield takeEvery(USER_LOGIN_REQUEST,userWorker);
	yield takeEvery(USER_LOGIN_REQUEST_EXIT,exitUserAccount);
}

