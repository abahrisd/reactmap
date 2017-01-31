import {WEB_SOCKET, START, CLOSE, RECEIVE } from '../constants'
import d3MapData from '../fixtures/d3MapData'
//import mapData from '../fixtures/mapData'

export default (markers = d3MapData, action) => {
	const { type, data, response } = action

	switch (type) {
		case WEB_SOCKET + RECEIVE: return response
	}

	return markers
}