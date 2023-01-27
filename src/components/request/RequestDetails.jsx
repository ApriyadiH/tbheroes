import React, {useState, useEffect} from "react";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import RequestMaps from "./RequestMaps"
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const RequestDetails = () =>  {
  const { requestId } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.token;
  const userId = user.userId;

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const [details, setDetails] = useState(null);
  const [donorList, setDonorList] = useState(null);
  
  const fetchRequestDetails = async () => {
    const { data } = await axios.get(`https://tbheroesserver.vercel.app/request/${requestId}`, config);
    setDetails(data.data);
    setMapPosition(data.data.location);
  };

  const fetchDonorList = async () => {
    const { data } = await axios.get(`https://tbheroesserver.vercel.app/donor/${requestId}`, config);
    setDonorList(data.data);
  }

  useEffect(() => {
    fetchRequestDetails();
    fetchDonorList();
  }, []);

  const [mapPosition, setMapPosition] = useState(null);

  const onClickReview = (donorId) => {
    navigate(`/request/review/${donorId}`)
  }

  const onClickParticipate = () =>{
    axios.post(`https://tbheroesserver.vercel.app/donor/`, {requestId, userId}, config);
    alert("User Participated");
    fetchDonorList();
  }

  console.log(donorList)

  return (
    <StContainer fluid>
      <StContainerForm>
        <StContainerLeft>
          <StTitle>
            Request
          </StTitle>
          <RequestMaps/>
          <StContainerLabel>Name : {details?.username}</StContainerLabel>
          <StContainerLabel>Quantity : {details?.quantity}</StContainerLabel>
          <StContainerLabel>Blood type : {details?.bloodType}</StContainerLabel>
        </StContainerLeft>
       
        <StContainerRight>
          {/* <StContainerLabel>Fulfilled : {}</StContainerLabel>
          <StContainerLabel>Still Need : {}</StContainerLabel> */}
          <StButton onClick={()=>{onClickParticipate()}}>Participate</StButton>
          <StContainerLabel>Participants</StContainerLabel>
          {/* {donorList?.map((content,index)=>{ */}
            <StContainerList>
              <div>user 1</div> 
              <Button variant="danger" onClick={()=>{onClickReview(donorList[0].donorId)}}>Done</Button>  
            </StContainerList>
          {/* })} */}
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

const StTitle = styled.div`
  font-size: 46px;
  font-family: "Inter";
  font-weight: 700;
  margin : 10px;
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
  min-height: 20vh;
  padding: 20px 30px;
  border-radius: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
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

margin-top: 80px;
`

const StButton = styled(Button)`
  margin-top: 24px;
  background-color: #0ade51;
  margin : 10px;
`