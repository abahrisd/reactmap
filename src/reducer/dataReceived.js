import { DATA_RECEIVED } from '../constants'

const defaultState = {
	entities: []
}

export default (dataMap = defaultState, action) => {
	const { type, data, response } = action

	switch (type) {
		case DATA_RECEIVED: return {markers: response}
	}

	return dataMap
}