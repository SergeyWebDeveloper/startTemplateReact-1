export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGIN_REQUEST_EXIT = 'USER_LOGIN_REQUEST_EXIT';
export const USER_LOGIN_EXIT = 'USER_LOGIN_EXIT';


const initialState = {
	login: null,
	password: null,
	loginStatus: false,
	id: null,
	info: {},
	error: {
		status: false,
		message: ''
	}
};

export default (state = initialState, {type, payload}) => {
	switch (type) {
		case USER_LOGIN_SUCCESS:
			return Object.assign(
				{},
				state,
				{
					id: payload.id,
					login: payload.login,
					password: payload.password,
					info: payload.info,
					loginStatus: true,
					error: {
						status: false,
						message: ''
					}
				}
			);
		case USER_LOGIN_EXIT:
			return Object.assign({},state, initialState);
		case USER_LOGIN_ERROR:
			return Object.assign({}, state, {error: {status: true, message: payload.message}});
		default:
			return state;
	}
}


export const signInUser = (userInfo) => {
	return {
		type: USER_LOGIN_REQUEST,
		payload: userInfo
	}
};

export const exitAccount = () => {
	return {
		type: USER_LOGIN_REQUEST_EXIT
	}
};
