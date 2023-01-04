import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

const User = () => {

  return (
    
    <StContainer className="container-fluid ">
      <StContainerForm>
        <div className="d-flex justify-content-center"><h3>Profile</h3></div>
        <form>
        <StContainerPicture>Picture</StContainerPicture>
        <input type="file" name="picture" class="form-control"/>
        <StContainerLabel>Name</StContainerLabel>
        <StContainerInput>
            <input type="text" name="nama" class="form-control" placeholder="Full Name"/>
        </StContainerInput>
        <StContainerLabel>Email</StContainerLabel>
        <StContainerInput>
            <input type="text" name="email" class="form-control" placeholder="Email"/>
        </StContainerInput>
        <StContainerLabel>Blood Type</StContainerLabel>
        <StContainerInput>
            <div class="row">
                <div className="col d-grid"> <input type="button" value="A" class="btn btn-outline-danger" /></div>
                <div className="col d-grid"> <input type="button" value="B" class="btn btn-outline-danger" /></div>
                <div className="col d-grid"> <input type="button" value="0" class="btn btn-outline-danger" /></div>
                <div className="col d-grid"> <input type="button" value="AB" class="btn btn-outline-danger" /></div>
       </div>
        </StContainerInput>
        <StContainerLabel>Location</StContainerLabel>
        <StContainerInput> 
            <div className="col d-grid"> 
            Location
            <input type="button" value="Change Location Pin Point" class="btn btn-outline-danger" />
            </div>
            </StContainerInput>
        <input type="Submit" value="Save Profile Info" class="btn btn-danger d-grid gap-2 mx-auto" />
      </form>
      </StContainerForm>
    </StContainer>
  );
};

export default User;


const StContainer = styled.div`
  background-color: #dddddd;
  padding: 20px;
`

const StContainerForm = styled.div`
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 15px;
  width: 600px;
`
const StContainerInput = styled.div`
  padding: 10px;
`
const StContainerLabel = styled.div`
  padding: 5px;
`

const StContainerPicture = styled.div`
background-color: #ffffff;
border-style:solid;
`