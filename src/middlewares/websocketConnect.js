export default store => next => action => {

	//goog connect to server
	console.log("before", store.getState());
	next(action);
	console.log("after", store.getState());

}
