import React from "react";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styled from "styled-components";

import { ReactComponent as House } from "../../assets/img/house.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <StContainer fluid>
      <StContainerForm>
        <Link to="/"><StHouseContainer><House /></StHouseContainer></Link>
        <StTextMiddle>
          <StSignUpForm>Sign Up Form</StSignUpForm>
        </StTextMiddle>
        <StTextMiddle>
          <StReady>Ready to get started?</StReady>
        </StTextMiddle>
        <StForm>
          <StContainerLabel>Username</StContainerLabel>
          <StInput type="text" name="username" class="form-control" placeholder="Enter Username"/>
          <StContainerLabel>Email</StContainerLabel>
          <StInput type="text" name="email" class="form-control" placeholder="Emailhere@email.com"/>
          <StContainerLabel>Password</StContainerLabel>
          <StInput type="text" name="password" class="form-control" placeholder="Enter Password"/>
          <StContainerLabel>Confirm Password</StContainerLabel>
          <StInput type="password" name="confirmpassword" class="form-control" placeholder="Re-enter Password"/>
          <StButton variant="danger">Sign Up</StButton>
        </StForm>
        <StBottomText>
          Already have an account?
          <Link to="/login" type="button" > Login </Link>   
        </StBottomText>
        {/* <StBottomText>Or Login Using</StBottomText>   
          <input type="Submit" value="Google Account" class="btn btn-outline-danger d-grid gap-2 mx-auto" /> */}
      </StContainerForm>
    </StContainer>
  );
}

export default Register;

const StContainer = styled(Container)`
  overflow-y: auto;
  padding: 24px 40px;

  height: 100%;
  background-color: #FBA69B;
  position: fixed;
  bottom: 0;


  display: flex;
  justify-content: center;
`

const StContainerForm = styled(Container)`
  background-color: #ffffff;
  width: 50%;
  height: max-content;
  padding: 24px 40px;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 16px;
`

const StHouseContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #DE0A2D;
  border-radius: 50%;
`

const StTextMiddle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

const StSignUpForm = styled.div`
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
`

const StReady = styled.div`
  font-family: "Inter";
  font-weight: 700;
  font-size: 64px;
  color: #DE0A2D;
  word-wrap: break-word;
  
  padding-bottom: 32px;
`

const StForm = styled.form`
  padding: 0px 10px;
`

const StContainerLabel = styled.div`
  margin-bottom: 8px;
`

const StInput = styled(Form.Control)`
  margin-bottom: 24px;
`

const StButton = styled(Button)`
  background-color: #DE0A2D;
  width: 100%;
`

const StBottomText = styled.div`
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  margin-top: 24px;
  padding-bottom: 40px;

  display: flex;
  justify-content: center;

  a{
    text-decoration: none;
    all: unset;
    color: #DE0A2D;
    padding-left: 8px;
  }
`