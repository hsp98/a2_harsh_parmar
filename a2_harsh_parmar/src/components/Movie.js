import React from 'react';
import { Container, Row, Col, Button, Image} from 'react-bootstrap';
import Axios from 'axios';
import ReactPlayer from 'react-player';

export default class Movie extends React.Component {

    constructor(props){
        super(props);
        console.dir(props);
        this.state={
            id:props.match.params.id,
            movieData:[],
        }
    }

    async componentDidMount() {
        let apiKey = "d8bcf125fed775e8aa6239f8a8b1e3e6";
        const movie = await Axios.get(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${apiKey}&language=en-US`);
        this.setState({movieData:movie.data});
  	}

  render(){
      
    return (
        <Container>
            <Row>
                <Col>
                    <Row xs={5} md={2}>
                        <Image src={`https://image.tmdb.org/t/p/w500/${this.state.movieData.poster_path}`} thumbnail />
                    </Row>
                    <Row xs={5} md={2}>
                        <label>Movie: {this.state.movieData.title}</label>
                    </Row>
                    <Row xs={5} md={2}>
                    <label>Language: Lorem Ipsum</label>
                    </Row>
                    <Row xs={5} md={2}>
                        <label>Ratings: {this.state.movieData.vote_average}</label>
                    </Row>
                    <Row xs={5} md={2}>
                        <label>Genre: Lorem Ipsum</label>
                    </Row>
                    <Row xs={5} md={2}>
                        <label>Duration: {this.state.movieData.runtime} min</label>
                    </Row>
                    <Row xs={5} md={1}>
                        <label>Release Date: {this.state.movieData.release_date}</label>
                    </Row>
                    <Row xs={5} md={2}>
                    <Button 
								variant='primary'
								onClick={()=> this.setState({filterShow:true})}
								>
								Add to Watch List
								</Button>
                    </Row>
                    <br/>
                    <Row xs={5} md={2}>
                    <Button 
								variant='primary'
								onClick={()=> this.setState({filterShow:true})}
								>
								Book Tickets
								</Button>
                    </Row>
                </Col>
                <Col >
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row><h3>Summary</h3></Row>
                    <Row><h6>Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac.</h6></Row>
                    <Row><h3>Reviews</h3></Row>
                    <Row><h6>Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac.</h6></Row>
                </Col>
                <Col>
                    <Row><h3>Actors</h3></Row>
                    <Row><h6>Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac.</h6></Row>
                </Col>
            </Row>
        </Container>
        );
    }
    
    }

