import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
  const product = products.find((product) => product._id == match.params.id);

  return (
    <>
      <Link to="/" className="btn my-2">
        Cofnij
      </Link>
      <Row>
        <Col lg="6" md="6" sm="1">
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} odsłon`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Cena: {Math.floor(product.price * 3.6)} PLN</Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <h4>Opis:</h4>
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Cena:</Col>
                  <Col>
                    <strong>{product.price} PLN</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "dostępny" : "niedostępny"}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroup.Item>
                <Button className="btn-block" type="button">
                  Dodaj do koszyka
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
