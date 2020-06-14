import React from "react";
import { Container, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NowPlaying({ movie }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const containerStyle = {
    textAlign: "center",
    paddingLeft: "100px",
    paddingTop: "10px",
  };

  return (
    <Container style={containerStyle}>
      <div className="clearfix mt-5 mb-2">
        <h4 className="float-left">Now Playing</h4>
      </div>
      <Slider {...settings}>
        {movie.map(function (movie) {
          return (
            <React.Fragment>
              <Link to={`/movies/${movie.id}`}>
                <Col>
                  <Card
                    style={{
                      margin: "25px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      style={{
                        width: undefined,
                        height: "425px",
                      }}
                    />
                    <Card.Body>
                      <span>{movie.title}</span>
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
            </React.Fragment>
          );
        })}
      </Slider>
    </Container>
  );
}
