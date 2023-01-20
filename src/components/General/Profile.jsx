import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

function Profile() {
  return (
    <StContainer className="container-fluid ">
    <StContainerForm>
      <StTitle>Profile</StTitle>
      <StImgProf><img src="https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=156&h=180&c=7&r=0&o=5&pid=1.7" alt="Profpic" style={{borderRadius:"20px"}}></img></StImgProf>
      <form>
      <StContainerLabel>Active Status</StContainerLabel>
      <StContainerLabel>Nama</StContainerLabel>
      <StContainerInput>
          <input type="text" name="nama" class="form-control" placeholder="Full Name"/>
      </StContainerInput>
      <StContainerLabel>Email</StContainerLabel>
      <StContainerInput>
          <input type="text" name="email" class="form-control" placeholder="Email"/>
      </StContainerInput>
      <StContainerLabel>Blood Type</StContainerLabel>
        <div className="col">
            <button type="button" class="btn btn-outline-danger" style={{width:"106px",height:"42px",marginRight:"5px"}}>A</button>
            <button type="button" class="btn btn-outline-danger" style={{width:"106px",height:"42px",marginRight:"5px"}}>B</button>
            <button type="button" class="btn btn-outline-danger" style={{width:"106px",height:"42px",marginRight:"5px"}}>O</button>
            <button type="button" class="btn btn-outline-danger" style={{width:"106px",height:"42px",marginRight:"5px"}}>AB</button>
        </div>
      <StContainerLabel style={{marginTop:"10px"}}>Location</StContainerLabel>
      <StContainerText><a>Jl. Mawar I No.013, RT.8, Bintaro, Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12330</a></StContainerText>
      <StContainerText>
      <div className="col d-grid">
        <button type="button" class="btn btn-danger"><img src="assets/Point_Donor" alt="Profpic"></img>Change Pin Point Location</button>
        </div>
        </StContainerText>
      </form>
    </StContainerForm>
  </StContainer>
  );
}

export default Profile;

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
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    padding: 24px 40px 24px 40px;
    gap: 16px;
    width: 552px;
    height: 843px;
    left: 40$;
    top: 1%;
    background: #FFFFFF;
    border-radius: 16px;
`
const StImgProf = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width= 160px;
    height= 160px;
    border-radius= 60px;
`
const StTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#DE0A2D;
    font-style:bold;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 46px;
`
const StContainerInput = styled.div`
  padding: 10px;
`
const StContainerLabel = styled.div`
    padding: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
`

const StContainerText = styled.div`
    padding: 20px;
    text-align: left;
    justify-content:left;
    width:472px;
    gap:20px;
`
    
