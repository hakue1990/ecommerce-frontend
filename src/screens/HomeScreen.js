import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';
import styled from 'styled-components';

const H1 = styled.h1`
  color: #657ed4;
  text-decoration: underline;
  transition: color 0.3s, ease-in;

  :hover {
    cursor: pointer;
    color: #0a014f;
  }
`;

export const HomeScreen = () => {
  return (
    <>
      <Row>
        <H1>Najnowsze produkty:</H1>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomeScreen;
