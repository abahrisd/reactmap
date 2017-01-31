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

	setInterval(()=>{
		let features = [];
		for (let i = 0; i < 100; i++){

			const featureObj = {
				"type": "Feature",
				"properties": {
					"text": "this is a Point!!!"
				},
				"geometry": {
					"type": "Point",
					"coordinates": [getRandomArbitrary(-180, 180), getRandomArbitrary(-84, 84)]
				}
			};

			features.push(featureObj);
		}

		let response = {
			features,
			"type": "FeatureCollection"
		};

		ws.send(JSON.stringify(response));
	}, 600);

	ws.on('close', function() {
		console.log('connection closed');
	});

});