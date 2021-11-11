import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <Container bg='dark'>
        <Row>
          <Col className='text-center py-3'>
            Zaliczenie python
            <br />
            WSB React+Django
          </Col>
          <Col className='text-center py-3'>
            {' '}
            <FontAwesomeIcon icon={faFacebook} className={'socialsIcons'} />
            <FontAwesomeIcon icon={faInstagram} className={'socialsIcons'} />
            <FontAwesomeIcon icon={faGithub} className={'socialsIcons'} />
          </Col>
          <Col className='text-center py-3 '>
            Copyright &copy; 2021
            <br />
            Adam Hałdaś && Bartosz Korytowski
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
