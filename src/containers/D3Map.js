import React, { Component, PropTypes } from 'react'
import {Map, MarkerGroup} from 'react-d3-map'
import { connect } from 'react-redux'
import {openSocket} from '../AC/coordinates'

class D3Map extends Component {

	componentDidMount() {
		this.props.openSocket()
	}

	getMapConfig(){
		return {
			data: this.props.websocket,
			width: 1200,
			height: 1200,
			scale: 1200,
			scaleExtent: [1 << 7.5, 1 << 10],
			center: [120, 23.5],
			popupContent: (d)=>{
				//return d.geometry.coordinates;
				return d.properties.text;
			},
			onMarkerMouseOut: (component, d, i) => {
				//console.log('out')

			},
			onMarkerMouseOver: (component, d, i) => {
				//console.log('over')

			},
			onMarkerClick: (component, d, i) => {
				component.showPopup();
				//console.log('click')

			},
			onMarkerCloseClick: (component, id) => {
				component.hidePopup();
				//console.log('close click')
			}
		}
	}

	render(){

		const {data, width, height, scale, scaleExtent, center, popupContent, onMarkerMouseOut, onMarkerMouseOver, onMarkerClick, onMarkerCloseClick} = this.getMapConfig();

		return (

			<Map
				width= {width}
				height= {height}
				scale= {scale}
				scaleExtent= {scaleExtent}
				center= {center}
			>
				<MarkerGroup
					key= {"polygon-test"}
					data= {data}
					popupContent= {popupContent}
					onClick= {onMarkerClick}
					onCloseClick= {onMarkerCloseClick}
					onMouseOver= {onMarkerMouseOver}
					onMouseOut= {onMarkerMouseOut}
					markerClass= {"your-marker-css-class"}
				/>
			</Map>
		)
	}
}


export default connect(state => {
	const {websocket} = state;
	return {websocket}
}, {
	openSocket
})(D3Map)