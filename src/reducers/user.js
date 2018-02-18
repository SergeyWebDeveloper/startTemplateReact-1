export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';


const initialState={
	login: null,
	password: null,
	loginStatus: false,
	id: null,
	error: {
		status: false,
		message: ''
	}
};

export default (state=initialState,{type,payload}) => {
	switch (type){
		case USER_LOGIN_SUCCESS:
			return Object.assign(
				{},
				state,
				{
					id: payload.id,
					login: payload.login,
					password: payload.password,
					loginStatus: true,
					error: {
						status: false,
						message: ''
					}
				}
			);
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
