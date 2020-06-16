import React from 'react';
import Booking from './Booking';
import './Bookings.css';

export default class Bookings extends React.Component {

	constructor(props){
		super(props);
		this.bookings = [
			{ transactionId:1, movieName:"A", date:"01/01/2020", time:"08:00 PM", seats:"A2-A5", theatreName:"ABC", location:"AAA" },
			{ transactionId:2, movieName:"B", date:"02/01/2020", time:"09:00 PM", seats:"B2-B5", theatreName:"DEF", location:"BBB" },
			{ transactionId:3, movieName:"C", date:"03/01/2020", time:"10:00 PM", seats:"C2-C5", theatreName:"GHI", location:"CCC" },
		];
		this.state = {
			display: false,
		  };
	}

	renderSuggestions() {
		const bookings = this.bookings;
		if (bookings.length === 0) {
			console.log(bookings.length);
			this.setState({ display: false });
		  }
		return (
		  <ul id="myul">
			{bookings.map((item) => (
			  <li key={item.transactionId}>
			  <Booking transactionId={item.transactionId} date={item.date} time={item.time} movieName={item.movieName} theatreName={item.theatreName} location={item.location} seat={item.seat}></Booking>
			  </li>
			))}
		  </ul>
		);
	  }

	render(){
		return (
			<div className="container">
			{this.renderSuggestions()}
      		</div>
     	);
 	}
  
}
