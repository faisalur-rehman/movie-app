import React, { useState } from "react";
import { Carousel, Image, Row, Col, Button, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./MovieList.css";
const MovieList = (props) => {
  const { movies, upComing } = props;
  const [movie, setMovie] = useState();
  const history = useHistory();
  const [clicked, setClicked] = useState(false);
  console.log(movie);
  return (
    <>
      <Container>
        <Row>
          {!upComing
            ? movies.map((movie, id) => (
                <Col
                  sm={4}
                  key={id}
                  className="movie"
                  onClick={() => setMovie(movie)}
                >
                  <Link to={`/movies/${id}`} className="link-color">
                    <Image src={movie.Poster} />
                    <h3 style={{ margin: "10px 5px " }}>{movie.Title}</h3>
                    <Button className="m-3" variant="outline-danger" href="/">
                      View Info
                    </Button>
                    <Button
                      disabled={upComing}
                      variant="outline-danger"
                      href="{}"
                    >
                      Book Ticket
                    </Button>
                  </Link>
                </Col>
              ))
            : movies.map((movie, id) => (
                <Col
                  sm={4}
                  key={id}
                  className="movie"
                  onClick={() => setMovie(movie)}
                >
                  <Link to={`/movies/info/${id}`} className="link-color">
                    <Image src={movie.Poster} />
                    <h3 style={{ margin: "10px 5px " }}>{movie.Title}</h3>
                    <Button className="m-3" variant="outline-danger" href="/">
                      View Info
                    </Button>
                    <Button
                      disabled={upComing}
                      variant="outline-danger"
                      href="{}"
                    >
                      Book Ticket
                    </Button>
                  </Link>
                </Col>
              ))}
        </Row>
      </Container>
      {/* {movie && history.push({ pathname: "/movies/info", state: { ...movie } })} */}
    </>
  );
};

export default MovieList;
