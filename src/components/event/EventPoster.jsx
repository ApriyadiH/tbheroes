import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from "styled-components";

const EventPoster = () =>  {

// LATER THE DATA WILL BE COLLECTED THROUGH AXIOS
  let event = [
    {
      eventId: "63c7b6603d7f7fb33abd4107",
      userId: "63c786e0db5d8948ac152a1a",
      image: "http://4.bp.blogspot.com/-WlyS2PAFrOY/UsUiWBMnQYI/AAAAAAAAAPQ/QagyVh9ODPQ/s1600/donor+darah.png",
      date: "2023-01-18T09:05:36.572Z",
      name: "Donor darah 1",
      location: "aasd",
    },
    {
      eventId: "63c7b6603d7f7fb33abd4120",
      userId: "63c786e0db5d8948ac152a1a",
      image: "https://i.pinimg.com/originals/ec/5e/03/ec5e031eea4a5f395f81ad4d243ba4fd.jpg",
      date: "2023-01-18T09:05:36.572Z",
      name: "Donor darah 2",
      location: "aasdasdasd",
    },
  ]


  return (
    <StContainer fluid className="text-center">
      <StText>Event List</StText>
      <StText2>CHECK OUT THESE EVENTS!</StText2>
        <Row className="row-cols-4">
          {event?.map(({eventId, userId, image, date, name, location}) => (
            <StCol key={ eventId }>
              <StImage src={image} alt="event"/>
              <StDate>{date}</StDate>
              <StName>{name}</StName> 
              <div>{location}</div>
            </StCol>
          ))}
        </Row>
    </StContainer>
  );
};

export default EventPoster;

const StContainer = styled(Container)`
  margin-top: 64px;
  margin-bottom: 
`

const StText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 20px;

  margin-bottom: 16px;
`

const StText2 = styled.div`
  font-family: 'Inter', sans-serif;
  color: #DE0A2D;
  font-weight: 700;
  font-size: 46px;

  margin-bottom: 40px;
`

const StCol = styled(Col)`
  display: flex;
  flex-direction: column;
  text-align: left;
`

const StImage = styled.img`
  margin-bottom: 20px;
  border-radius: 16px;
  width: 100%;
  height: 330px;
  object-fit: cover;
`

const StDate = styled.div`
  padding: 4px 10px;
  width: fit-content;
  border-radius: 16px;
  background-color: #FBA69B;
  color: #6A013A;
`

const StName = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 24px;
`