import React, { Component, PropTypes } from 'react'
//import MyMap from './MyMap'
import D3Map from './D3Map'
import DevTools from './DevTools'
import { Provider } from 'react-redux'

class MapRoot extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	};

	render(){
		return (
			<Provider store = {this.props.store}>
				<div>
					<D3Map/>
					<DevTools/>
				</div>
			</Provider>
		)
	}
}

export default MapRoot