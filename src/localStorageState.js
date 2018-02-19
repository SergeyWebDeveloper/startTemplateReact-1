export const loadState = () => {
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
};

export const saveState = (data) => {
	try{
		const serializedState = JSON.stringify(data);
		localStorage.setItem('user',serializedState);
	} catch (err) {
		console.error(err);
	}
};
