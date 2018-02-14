export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';


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


export const signInUser = (userInfo) => {
	return{
		type: USER_LOGIN_REQUEST,
		payload: userInfo
	}
};
