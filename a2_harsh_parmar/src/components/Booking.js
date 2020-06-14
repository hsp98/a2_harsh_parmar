import React from 'react';
import logo from '../Header/logo.png';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Bookings.css';
const mapStyles = {
	width: '150px',
	height: '150px',
	marginLeft: '24px',
  };

class Booking extends React.Component {

	render(){
		return (
			<div className="App">
				<img src={logo} alt="movieposter"/>
				<div className="booking-details">
					<h4>Movie: {this.props.movieName}</h4>
					<h6>Date: {this.props.date}</h6>
					<h6>Time: {this.props.time}</h6>
					<h6>Seats: {this.props.seat}</h6>
					<h6>Theatre Name:{this.props.theatreName}</h6>
					<h6>Location: {this.props.location}</h6>
					<h6>Transaction Id: {this.props.transactionId}</h6>
				</div>
				<div className="map">
					<Map
          				google={this.props.google}
          				zoom={14}
          				style={mapStyles}
          				initialCenter={{ lat: 44.635497458, lng: -63.58833098}}>
						<Marker position={{ lat: 44.635497458, lng: -63.58833098}} />
					</Map>
				</div>
      		</div>
     	);
 	}
  
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCHHazDxomKFsTi-j_BS_4DC7umHdPX0dU'
})(Booking);