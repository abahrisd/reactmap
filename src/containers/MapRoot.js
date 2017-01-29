import React, { Component, PropTypes } from 'react'
import MyMap from './MyMap'
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
					<MyMap/>
					<DevTools/>
				</div>
			</Provider>
		)
	}
}

export default MapRoot