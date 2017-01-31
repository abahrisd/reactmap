'use strict';

const dataPoints  = require('./surfaceDataPoints');

const WebSocketServer = new require('ws');

// WebSocket-сервер на порту 8081
const webSocketServer = new WebSocketServer.Server({
	port: 8081
});

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function createRandomPoint(){
	return {
			"type": "Feature",
			"properties": {
			"text": "this is a Point!!!"
		},
			"geometry": {
			"type": "Point",
				"coordinates": [getRandomArbitrary(-180, 180), getRandomArbitrary(-84, 84)]
		}
	}
}

function createPseudorandomSurfacePoint(){
	return dataPoints[Math.floor(Math.random()*dataPoints.length)]
}

webSocketServer.on('connection', function(ws) {

	console.log('setting connection!');

	setInterval(()=>{
		let features = [];
		for (let i = 0; i < 100; i++){
			features.push(createPseudorandomSurfacePoint());
			//features.push(createRandomPoint());
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