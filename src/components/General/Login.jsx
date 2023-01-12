import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

function Login() {
  return (
    <StContainer className="container-fluid ">
    <StContainerForm>
      <div className="d-flex justify-content-center"><h6>Login Form</h6></div>
      <div className="d-flex justify-content-center"><h3><b>Welcome Back !</b></h3></div>
      <form>
      <StContainerLabel>Email</StContainerLabel>
      <StContainerInput>
          <input type="text" name="nama" class="form-control" placeholder="Full Name"/>
      </StContainerInput>
      <StContainerLabel>Password</StContainerLabel>
      <StContainerInput>
          <input type="text" name="email" class="form-control" placeholder="Email"/>
      </StContainerInput>
      <StContainerText>
      <div className="col d-grid"> 
            <input type="submit" value="Sign up" class="btn btn-danger" />
            </div>
            </StContainerText>
        <StContainerText>Don't Have An Account? <a href="" > Sign Up Here </a></StContainerText>   
        <StContainerText>Or Login Using</StContainerText>   
        <input type="Submit" value="Google Account" class="btn btn-outline-danger d-grid gap-2 mx-auto" />
    </form>
    </StContainerForm>
  </StContainer>
  );
}

export default Login;

const StContainer = styled.div`
  background-color: #FBA69B;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 355px;
  gap: 8px;
  position: relative;
  width: 1440px;
  height: 684px;
`

const StContainerForm = styled.div`
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 30px;
  border-radius: 15px;
  width: 600px;
`
const StContainerInput = styled.div`
  padding: 10px;
`
const StContainerLabel = styled.div`
  padding: 5px;
`

const StContainerText = styled.div`
  padding: 20px;
  text-align: center;
`