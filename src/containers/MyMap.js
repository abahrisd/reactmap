import React, { Component, PropTypes } from 'react'
import Map, {GoogleApiWrapper, Marker} from 'google-maps-react'
import mapData from '../fixtures/mapData'
//import { Provider } from 'react-redux'
const apiKey = 'AIzaSyBIcFclg3fn1feyJx1d5VHsMN1-XmFHrVU';

class MyMap extends Component {

	/*static propTypes = {
		store: PropTypes.object.isRequired,
		mapData: PropTypes.array.isRequired
	};*/

	render() {

		/*if (!this.props.loaded) {
			return <div>Loading...</div>
		}*/

		const style = {
			width: '100vw',
			height: '100vh'
		}

		const markers = mapData.map((marker) => <Marker key={marker.key} position={{lat: marker.lat, lng: marker.lng}} name={marker.key} />);

		return (
			<div style={style}>
				<Map google={this.props.google}
					 zoom={2}
					>
					{markers}
				</Map>
			</div>
		)
	}

}

export default GoogleApiWrapper({
	apiKey: apiKey
})(MyMap)