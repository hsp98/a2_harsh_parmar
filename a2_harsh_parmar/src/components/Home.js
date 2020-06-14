import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Axios from "axios";
import NowPlaying from "./NowPlaying";
import { HomeWrapper } from "./style";
import UpComing from "./UpComing";
import DatePicker from 'react-date-picker';
import {Button} from 'react-bootstrap';
import Filter from './Filter';

export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			date: new Date(),
			nowPlaying: [],
			upComing: [],
			filterShow: false,
		  };
	}

async componentDidMount() {
		let apiKey = "d8bcf125fed775e8aa6239f8a8b1e3e6";
		const allMovies = await Axios.all([
		  Axios.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
		  ),
		  Axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
		  )
		]);
		this.setState({nowPlaying:allMovies[0].data.results});
		console.log(allMovies[0].data.results);
		this.setState({upComing:allMovies[1].data.results});
	  
  	}

  	onChange = date => this.setState({ date })
  
  	render(){
	  	let filterClose =() => {this.setState({filterShow:false})};
		return (
			<div className="App">
				<div className="row">
					<div className="col mt-4">
						<input type="text" id="location" placeholder="Enter City Name" />
						<button id="searchLocation">Select</button>
					</div>
					<br/>
					<div className="col mt-4">
						<DatePicker
							onChange={this.onChange}
							value={this.state.date}
						/>
					</div>
					<br/>
					<div className="col mt-4">
						
							<Button 
								variant='primary'
								onClick={()=> this.setState({filterShow:true})}
								>
								Filter
								</Button>
								<Filter
									show={this.state.filterShow}
									onHide={filterClose}
								/>
					</div>
					<hr/>
				</div>
				<HomeWrapper>
					<NowPlaying movie={this.state.nowPlaying} />
				</HomeWrapper>
				<hr/>
				<HomeWrapper>
					<UpComing movie={this.state.upComing} />
				</HomeWrapper>
			</div>
		);
	}
}
