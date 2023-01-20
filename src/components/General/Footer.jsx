import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () =>  {
  return (
    <StContainer fluid >
      <Row>
        <Col className="text-center">
          <div>
            <StImg src="assets/img/twitter.svg" alt="twitter"/>
            <StImg src="assets/img/facebook.svg" alt="facebook"/>
            <StImg src="assets/img/instagram.svg" alt="instagram"/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <div>
            <StLink>Link</StLink>
            <StLink>Link</StLink>
            <StLink>Link</StLink>
            <StLink>Link</StLink>
          </div>
        </Col>
      </Row>

    </StContainer>
  );
};

export default Footer;

const StContainer = styled(Container)`
  padding-bottom: 72px;
`

const StImg = styled.img`
  padding-left: 7px;
  padding-right: 7px;
  margin-bottom: 20px;
`

const StLink = styled(Link)`
  text-decoration: none;
  all: unset;
  color: 6A013A;
  padding-left: 10px;
  padding-right: 10px;
`