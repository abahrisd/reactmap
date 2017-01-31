import {WEB_SOCKET, START, SUCCESS, FAIL, RECEIVE, CLOSE, OPEN} from '../constants'

export function openSocket() {
	return (dispatch, store) => {
		dispatch({
			type: WEB_SOCKET + START
		});

		const socket = new WebSocket("ws://localhost:8081");

		socket.onmessage = function(event) {
			dispatch({
				type: WEB_SOCKET + RECEIVE,
				response: JSON.parse(event.data)
			});
		};

		socket.onopen = function() {
			dispatch({
				type: WEB_SOCKET + OPEN
			});
		};

		socket.onclose = function(event) {
			dispatch({
				type: WEB_SOCKET + CLOSE
			});
		};

		socket.onerror = function(error) {
			dispatch({
				type: WEB_SOCKET + FAIL,
				error: error
			});
		};
	}
}
