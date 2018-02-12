import mockUser from '../mock/users';

export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';


const initialState={
	login: null,
	password: null,
	error: {
		status: false,
		message: ''
	}
};

export default (state=initialState,{type,payload}) => {
	switch (type){
		case USER_LOGIN_SUCCESS:
			return Object.assign({},state,{login: payload.login,password: payload.password});
		case USER_LOGIN_ERROR:
			return Object.assign({},state,{error: {status: true, message: payload.message}});
		default:
			return state;
	}
}


export const signInUser = (userInfo) => dispatch => {
	const result = mockUser.filter((user)=>{
		if ((user.login === userInfo.login) && (user.password === userInfo.password)){
			return true;
		}
	});

	if(result.length){
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: userInfo
		});
	} else {
		dispatch({
			type: USER_LOGIN_ERROR,
			payload: {error: {status: true},message: 'Не найдено записей в БД'}
		});
	}
};
