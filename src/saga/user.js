import {put} from 'redux-saga/effects';
import mockUser from "../mock/users";
import {USER_LOGIN_ERROR, USER_LOGIN_SUCCESS} from "../reducers/user";


export function* userWorker(action) {
	const {login,password} = action.payload;
	const result = yield mockUser.filter((user)=>{
		if ((user.login === login) && (user.password === password)){
			return true;
		}
	});

	if(result.length){
		yield put({
			type: USER_LOGIN_SUCCESS,
			payload: {login,password}
		})
	} else {
		yield put({
			type: USER_LOGIN_ERROR,
			payload: {error: {status: true},message: 'Не найдено записей в БД'}
		});
	}
}
