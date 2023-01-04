import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

function Register() {
  return (
   
    <StContainer className="container-fluid ">
    <StContainerForm>
      <div className="d-flex justify-content-center"><h6>Sign Up Form</h6></div>
      <div className="d-flex justify-content-center"><h1><b>Ready To Get Started?</b></h1></div>
      <form>
      <StContainerLabel>Name</StContainerLabel>
      <StContainerInput>
          <input type="text" name="name" class="form-control" placeholder="Full Name"/>
      </StContainerInput>
      <StContainerLabel>Email</StContainerLabel>
      <StContainerInput>
          <input type="text" name="email" class="form-control" placeholder="Emailhere@gmail.com"/>
      </StContainerInput>
      <StContainerLabel>Password</StContainerLabel>
      <StContainerInput>
          <input type="text" name="password" class="form-control" placeholder="Enter Password"/>
      </StContainerInput>
      <StContainerLabel>Confirm Password</StContainerLabel>
      <StContainerInput>
          <input type="text" name="enterpassword" class="form-control" placeholder="Re-enter Password"/>
      </StContainerInput>
      <StContainerText>
      <div className="col d-grid"> 
            <input type="submit" value="Sign up" class="btn btn-danger" />
            </div>
            </StContainerText>
        <StContainerText>Don't Have An Account? <a href="" > Login Here </a></StContainerText>   
        <StContainerText>Or Login Using</StContainerText>   
        <input type="Submit" value="Google Account" class="btn btn-outline-danger d-grid gap-2 mx-auto" />
    </form>
    </StContainerForm>
  </StContainer>
  );
}

export default Register;

const StContainer = styled.div`
  background-color: #dddddd;
  padding: 20px;
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