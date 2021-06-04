import { Carousel, Image, Row, Col, Button, Container } from "react-bootstrap";
import "./Banner.css";

const Banner = (props) => {
  const { movies } = props;

  return (
    <Carousel className="carousel" style={{ height: "110vh" }}>
      {movies.map((movie) => (
        <Carousel.Item>
          <Container>
            <Row>
              <Col sm={5} className="carousel-image-col">
                <div className="img-col">
                  <Image
                    src={movie.Poster}
                    className="movie-img"
                    style={{ width: "450px", height: "530px" }}
                  />
                  <h3 style={{ margin: "10px 5px" }}>{movie.Title}</h3>
                  <p>{movie.Plot}</p>
                </div>
                <div style={{ width: "90%", margin: "10px auto" }}>
                  <Button className="m-4" variant="outline-danger">
                    View Info
                  </Button>
                  <Button variant="outline-danger">Book Tickets</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
