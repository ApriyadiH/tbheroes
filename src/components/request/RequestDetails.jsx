import React from "react";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import RequestMaps from "./RequestMaps"
import styled from "styled-components";

const RequestDetails = () =>  {
  return (
    <StContainer fluid>
      <StContainerForm>
        <StContainerLeft>
        <h3>Request</h3>
      <RequestMaps/>
      <StContainerLabel>Nama :</StContainerLabel>
      <StContainerLabel>Jumlah Kantong :</StContainerLabel>
      <StContainerLabel>Golongan Darah :</StContainerLabel>
        </StContainerLeft>
       
        <StContainerRight>
      <StContainerLabel>Terpenuhi :</StContainerLabel>
      <StContainerLabel>Sisa Kebutuhan :</StContainerLabel>
      <StButton>Participate</StButton>
      <StContainerLabel>Daftar Orang yang berpartisipasi</StContainerLabel>
      <div>
      <StContainerList>User A 
        <StButtonD>Done</StButtonD>
        </StContainerList>
      </div>
        </StContainerRight>

      </StContainerForm>
      </StContainer>
  );
};

export default RequestDetails;

const StContainer = styled(Container)`
  background-color: #FBA69B;
  padding: 24px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`

const StContainerForm = styled.div`
  background-color: #ffffff;
  width: 80%;
  padding: 24px 40px;
  border-radius: 16px;
`

const StContainerLabel = styled.div`
  font-size: 16px;
  font-family: "Inter";
  font-weight: 700;
  margin : 10px;
`

const StContainerList = styled.div`
  background-color: #FBA69B;
  width: 100%;
  padding: 20px 30px;
  border-radius: 16px;
`

const StContainerLeft = styled(Container)`
float: left;
width: 50%;
padding: 30px;
`

const StContainerRight = styled(Container)`
float: right;
width: 50%;
padding: 30px;
`

const StButton = styled(Button)`
  margin-top: 24px;
  background-color: #0ade51;
  margin : 10px;
`

const StButtonD = styled(Button)`
  float: right;
  margin: auto;
`