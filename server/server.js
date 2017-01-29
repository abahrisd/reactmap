'use strict';

const WebSocketServer = new require('ws');

// WebSocket-сервер на порту 8081
const webSocketServer = new WebSocketServer.Server({
	port: 8081
});


function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

webSocketServer.on('connection', function(ws) {

	console.log('setting connection!');

	let id = 1;
	setInterval(()=>{
		for (let i = 0; i < 10/*00*/; i++){

			const coordObj = {
				lat: getRandomArbitrary(-90, 90),
				lng: getRandomArbitrary(-180, 180),
				key: id++
			}

			ws.send(coordObj);
		}
	}, 6000);

	ws.on('close', function() {
		console.log('connection closed');
	});

});