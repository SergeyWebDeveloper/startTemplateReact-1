import {call, put} from 'redux-saga/effects';
import {
	USER_LOGIN_ERROR,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_EXIT,
	LOAD_ARTICLES_ADMIN_SUCCESS,
	getPostsAdmin
} from "../reducers/user";


function getUser(login, password) {
	return fetch('/api/user' + '?login=' + login + '&password=' + password)
		.then(res => res.json())
		.then(res => res)
		.catch(e => e)
}

export function* userWorker(action) {
	const {login, password} = action.payload;

	const result = yield call(getUser, login, password);
	if (result.user) {
		const {login,password,...data} = result.user;
		const serializedState = JSON.stringify({login,password});
		yield put({
			type: USER_LOGIN_SUCCESS,
			payload: {
				login,
				password,
				id: result.user._id,
				info: data
			}
		});
		localStorage.setItem('user',serializedState);
	}
	else {
		yield put({
			type: USER_LOGIN_ERROR,
			payload: {error: {status: true}, message: 'Данный пользователь не найден'}
		});
	}
}

export function* exitUserAccount() {
	localStorage.clear();
	yield put({
		type: USER_LOGIN_EXIT
	});
}


export function* fetchLoadAdminPosts({id}) {
	try{
		const data = yield call(getPostsAdmin,id);
		yield put({type: LOAD_ARTICLES_ADMIN_SUCCESS,payload: data})
	} catch (e) {
		console.error(e);
	}
}