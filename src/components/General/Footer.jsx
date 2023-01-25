import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ReactComponent as Twitter } from "../../assets/img/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/img/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/img/instagram.svg";

const Footer = () =>  {
  return (
    <StContainer fluid >
      <Row>
        <Col className="text-center">
          <StImg>
            <Twitter/>
            <Facebook/>
            <Instagram/>
          </StImg>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <div>
            <StLink>Cookie Policy</StLink>
            <StLink>Privacy Policy</StLink>
            <StLink>Terms of Use</StLink>
            <StLink>Preferences</StLink>
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

const StImg = styled.div`
  svg{
    padding-left: 7px;
    padding-right: 7px;
    margin-bottom: 20px;
    width: 50px;
    height: auto;
  } 
`

const StLink = styled(Link)`
  text-decoration: none;
  all: unset;
  color: #6A013A;
  padding-left: 10px;
  padding-right: 10px;
`