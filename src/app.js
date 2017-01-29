import React from 'react'
import { render } from 'react-dom'
//import Root from './containers/Root'
import MapRoot from './containers/MapRoot'
import store from './store'

//window.store = store

render(<MapRoot store = {store} />, document.getElementById('container'));