import {createStore, compose} from 'redux'
import reducer from '../reducer'
import websocketConnect from '../middlewares/websocketConnect'
import {applyMiddleware} from 'redux'
import DevTools from '../containers/DevTools'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

const enhancer = compose(
	applyMiddleware(multi, thunk, websocketConnect),
	DevTools.instrument()
)
const store = createStore(reducer, {}, enhancer)

if (module.hot) {
	module.hot.accept('../reducer', () =>
		store.replaceReducer(require('../reducer').default)
	);
}

export default store