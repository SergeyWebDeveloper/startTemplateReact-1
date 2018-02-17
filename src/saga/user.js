import {call, put} from 'redux-saga/effects';
import {USER_LOGIN_ERROR, USER_LOGIN_SUCCESS} from "../reducers/user";

function getUser(login, password) {
    console.log('-----------------', login, password, window);
    return window.fetch('/api/user' + '?login=' + login + '&password=' + password)
        .then(res => res.json())
        .then(res => res)
        .catch(e => e)
}

export function* userWorker(action) {
    const {login, password} = action.payload;

    const result = yield call(getUser, login, password);

    if (result.user)
        yield put({
            type: USER_LOGIN_SUCCESS,
            payload: {login, password}
        });
    else {
        yield put({
            type: USER_LOGIN_ERROR,
            payload: {error: {status: true}, message: 'Не найдено записей в БД'}
        });
    }
}
