import React from "react";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styled from "styled-components";

import { ReactComponent as House } from "../../assets/img/house.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <StContainer fluid>
      <StContainerForm>
        <Link to="/"><StHouseContainer><House /></StHouseContainer></Link>
        <StTextMiddle>
          <StLoginForm>Login Form</StLoginForm>
        </StTextMiddle>
        <StTextMiddle>
          <StWelcomeBack>Welcome Back!</StWelcomeBack>
        </StTextMiddle>
        <StForm>
          <StContainerLabel>Email</StContainerLabel>
          <StInput type="text" name="email" class="form-control" placeholder="Email"/>
          <StContainerLabel>Password</StContainerLabel>
          <StInput type="password" name="password" class="form-control" placeholder="Password"/>
          <StButton variant="danger">Sign Up</StButton>
        </StForm>
        <StBottomText>
          Don't Have An Account?
          <Link to="/register" type="button" > Sign Up Here </Link>   
        </StBottomText>
        {/* <StBottomText>Or Login Using</StBottomText>   
          <input type="Submit" value="Google Account" class="btn btn-outline-danger d-grid gap-2 mx-auto" /> */}
      </StContainerForm>
    </StContainer>
  );
}

export default Login;

const StContainer = styled(Container)`
  background-color: #FBA69B;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

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
`

const StLoginForm = styled.div`
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
`

const StWelcomeBack = styled.div`
  font-family: "Inter";
  font-weight: 700;
  font-size: 64px;
  color: #DE0A2D;

  margin-bottom: 32px;
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

  display: flex;
  justify-content: center;

  a{
    text-decoration: none;
    all: unset;
    color: #DE0A2D;
    padding-left: 8px;
  }
`