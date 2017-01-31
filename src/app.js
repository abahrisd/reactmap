import React from 'react'
import { render } from 'react-dom'
import MapRoot from './containers/MapRoot'
import store from './store'
import {openSocket} from './AC/coordinates'

window.store = store

render(<MapRoot store = {store} />, document.getElementById('container'));