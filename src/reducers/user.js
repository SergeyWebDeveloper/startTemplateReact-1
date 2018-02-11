export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';


const initialState={
	login: null,
	email: null,
	password: null,
	error: {
		status: false,
		message: ''
	}
};

export default (state=initialState,{type,payload}) => {
	switch (type){
		case USER_LOGIN_SUCCESS:
			return Object.assign({},state,{login: payload.login,password: payload.password,email: payload.email});
		case USER_LOGIN_ERROR:
			return Object.assign({},state,{error: {status: true, message: payload.message}});
		default:
			return state;
	}
}

