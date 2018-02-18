export const loadState = () => {
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
};

export const saveState = (id) => {
	try{
		const serializedState = JSON.stringify(id);
		localStorage.setItem('user',serializedState);
	} catch (err) {
		console.error(err);
	}
};
