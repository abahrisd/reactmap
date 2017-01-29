import {DATA_RECEIVED} from '../constants'

export function dataReceived(state, action) => {
	return {
		type: DATA_RECEIVED,
		data: [1, 2, 3]
	}
}