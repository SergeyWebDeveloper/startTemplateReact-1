import articlesMock from '../mock/articles';

export const ARTICLE_REQUESTING = 'ARTICLE_REQUESTING';
export const ARTICLE_SUCCESS = 'ARTICLE_SUCCESS';
export const ARTICLE_FAILED = 'ARTICLE_FAILED';

export function getArticles() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([...articlesMock])
        }, 5000);
    })
}

const initialState = {
    load: false,
    success: false,
    error: false,
    articles: []
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ARTICLE_REQUESTING:
            return Object.assign({}, state, {load: true});

        case ARTICLE_SUCCESS:
            return Object.assign({}, state, {load: false, articles: payload.data});

        case ARTICLE_FAILED:
            return Object.assign({}, state, {load: false, error: true})
    }
    return state;
}

export const loadArticles = () => {
	return {
		type: ARTICLE_REQUESTING
	}
};
