/*import {WEB_SOCKET, START, SUCCESS, FAIL, RECEIVE, CLOSE} from '../constants'

export default store => next => action => {
	const { url, type, ...rest } = action
	if (!url) return next(action);

	next({...rest, type: type + START});

	const socket = new WebSocket(url);
	//const socket = new WebSocket("ws://localhost:8081");

	socket.onmessage = function(event) {
		next({...rest, type: type + RECEIVE,
			response: JSON.parse(event.data)});
	};

	socket.onopen = function() {
		next({...rest, type: type + SUCCESS});
	};

	socket.onclose = function(event) {
		next({...rest, type: type + CLOSE});
	};

	socket.onerror = function(error) {
		next({...rest, type: type + FAIL});
	};

}*/
