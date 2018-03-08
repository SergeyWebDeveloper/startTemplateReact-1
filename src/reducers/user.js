import request from "superagent";

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGIN_REQUEST_EXIT = 'USER_LOGIN_REQUEST_EXIT';
export const USER_LOGIN_EXIT = 'USER_LOGIN_EXIT';
export const LOAD_ARTICLES_ADMIN_REQUEST = 'LOAD_ARTICLES_ADMIN_REQUEST';
export const LOAD_ARTICLES_ADMIN_SUCCESS = 'LOAD_ARTICLES_ADMIN_SUCCESS';

export async function getPostsAdmin(id) {
    const {body} = await request('/api/postadmin?id=' + id);
    return body;
}

const initialState = {
    login: null,
    password: null,
    loginStatus: false,
    adminPosts: {
        load: false,
        error: {
            status: false
        },
        posts: []
    },
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
            console.log('USER_LOGIN_SUCCESS')
            return Object.assign(
                {},
                state,
                {
                    id: payload.id,
                    login: payload.login,
                    password: payload.password,
                    info: payload.info,
                    adminPosts: [],
                    loginStatus: true,
                    error: {
                        status: false,
                        message: ''
                    }
                }
            );
        case USER_LOGIN_EXIT:
            console.log('USER_LOGIN_EXIT', state);
            return Object.assign({}, state, initialState);
        case USER_LOGIN_ERROR:
            console.log('USER_LOGIN_ERROR', state);
            return Object.assign({}, state, {error: {status: true, message: payload.message}});
        case LOAD_ARTICLES_ADMIN_SUCCESS:
            console.log('LOAD_ARTICLES_ADMIN_SUCCESS REDICER', payload);
            return Object.assign({}, state, {adminPosts: {load: true,
                    error: {
                        status: false
                    },
                    posts: payload}});
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


export const loadArticlesAdmin = (id) => {
    return {
        type: LOAD_ARTICLES_ADMIN_REQUEST,
        id
    }
};