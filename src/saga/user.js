import {call, put} from 'redux-saga/effects';
import {USER_LOGIN_ERROR, USER_LOGIN_SUCCESS} from "../reducers/user";

function getUser(login, password) {
	console.log('-----------------', login, password);
	return fetch('/api/user' + '?login=' + login + '&password=' + password)
		.then(res => res.json())
		.then(res => res)
		.catch(e => e)
}

export function* userWorker(action) {
	const {login, password} = action.payload;

	const result = yield call(getUser, login, password);
	if (result.user) {
		yield put({
			type: USER_LOGIN_SUCCESS,
			payload: {
				login: result.user.login,
				password: result.user.password,
				id: result.user._id
			}
		});
	}
	else {
		yield put({
			type: USER_LOGIN_ERROR,
			payload: {error: {status: true}, message: 'Данный пользователь не найден'}
		});
	}
}
