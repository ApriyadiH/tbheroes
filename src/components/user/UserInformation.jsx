import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import UserInformationMap from "./UserInformationMap"

import styled from "styled-components";

const UserInformation = () => {
  const [radioValue, setRadioValue] = useState();

  const radios = [
    { name: 'A', value: 'A' },
    { name: 'B', value: 'B' },
    { name: 'O', value: 'O' },
    { name: 'AB', value: 'AB' },
  ];

  const [imageLink, setImageLink] = useState("https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg")
  
  return (
    <StContainer fluid>
      <StContainerForm>
        <StTextMiddle>
          <StTitle>Profile</StTitle>
        </StTextMiddle>
        <StForm>
          <StImageContainer><img src={imageLink} alt="" width="100%"/></StImageContainer>
          <StContainerLabel>Image</StContainerLabel>
          <StInput type="text" name="image" className="form-control" placeholder="Image Url" value={imageLink} onChange={(e) => setImageLink(e.currentTarget.value)}/>
          <StToggleContainer>
            <StContainerLabel>Active Status</StContainerLabel>
            <Form.Check type="switch" />
          </StToggleContainer>
          <StContainerLabel>Username</StContainerLabel>
          <StInput type="text" name="userame" className="form-control" placeholder="Username"/>
          <StContainerLabel>Email</StContainerLabel>
          <StInput type="text" name="email" className="form-control" placeholder="Email"/>
          <StContainerLabel>Blood Type</StContainerLabel>
          <StButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={'outline-danger'}
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </StButtonGroup>
          <StContainerLabel>Location</StContainerLabel>
              <UserInformationMap/>
          <StButton variant="danger">Save profile Information</StButton>
        </StForm>
      </StContainerForm>
    </StContainer>
  );
}


export default UserInformation;

const StContainer = styled(Container)`
  background-color: #FBA69B;
  padding: 24px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`

const StContainerForm = styled.div`
  background-color: #ffffff;
  width: 50%;
  padding: 24px 40px;
  border-radius: 16px;
`

const StTextMiddle = styled.div`
  display: flex;
  justify-content: center;
`

const StTitle = styled.div`
  font-family: "Inter";
  font-weight: 700;
  font-size: 46px;
  color: #DE0A2D;

  margin-bottom: 32px;
`

const StForm = styled(Form)`
  padding: 0px 10px;
`

const StImageContainer = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 20px;

  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
`

const StToggleContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  
  div{
    margin-top: auto;
    margin-bottom: auto;
  }

  .form-check-input{
    width: 60px;
    height: 30px;
  &:checked{
    background-color: #FBA69B;
    border-color: black;
    box-shadow:none ;
  }
  }
`

const StContainerLabel = styled.div`
  font-size: 16px;
  font-family: "Inter";
  font-weight: 700;
  margin-bottom: 8px;
`

const StInput = styled(Form.Control)`
  margin-bottom: 24px;
`

const StButtonGroup = styled(ButtonGroup)`
  width:100%;
  margin-bottom: 24px;
`

const StButton = styled(Button)`
  margin-top: 24px;
  background-color: #DE0A2D;
  width: 100%;
`
