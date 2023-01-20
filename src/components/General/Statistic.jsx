import React from "react";
import styled from "styled-components";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Statistic = () =>  {
  return (
    <Container fluid>
      <Row>
        <Col>
          <StStatisticBox>
            <StNumber>25</StNumber>
            <StText>Recipients</StText>
          </StStatisticBox>
        </Col>
        <Col>
          <StStatisticBox>
            <StNumber>43</StNumber>
            <StText>Donors</StText>
          </StStatisticBox>
        </Col>
        <Col>
          <StStatisticBox>
            <StNumber>9</StNumber>
            <StText>A Blood Type</StText>
          </StStatisticBox>
        </Col>
        <Col>
          <StStatisticBox>
            <StNumber>11</StNumber>
            <StText>B Blood Type</StText>
          </StStatisticBox>
        </Col>
        <Col>
          <StStatisticBox>
            <StNumber>13</StNumber>
            <StText>O Blood Type</StText>
          </StStatisticBox>
        </Col>
        <Col>
          <StStatisticBox>
            <StNumber>11</StNumber>
            <StText>AB Blood Type</StText>
          </StStatisticBox>
        </Col>
        <Col className="text-center">
          <StText2>Be Heroes Now!</StText2>
          <Button variant="danger" className="mb-3">Fill Donor Form</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Statistic;

const StStatisticBox = styled.div`
  margin-top: 12px;
  margin-bottom: 40px;

  padding: 12px 16px;
  border-radius: 16px;
  box-shadow: 5px 15px 44px rgba(166, 166, 166, 0.25);
`

const StNumber = styled(Col)`
  font-family: 'Lora', serif;
  font-size: 32px;
  `

const StText = styled(Col)`
  font-family: 'Inter', sans-serif;
  font-size: 20p;
`

const StText2 = styled(Col)`
  margin-top: 12px;
  margin-bottom: 16px;

  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20p;
`