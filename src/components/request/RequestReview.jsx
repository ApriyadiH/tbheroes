import React, {useState} from "react";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';

import styled from "styled-components";

import { ReactComponent as ThumbFill } from "../../assets/img/hand-thumbs-up-fill.svg";
import { ReactComponent as Thumb } from "../../assets/img/hand-thumbs-up.svg";
import { ReactComponent as ArrowLeft } from "../../assets/img/arrowLeft.svg";
import { Link } from "react-router-dom";

const RequestReview = () =>  {
  const [thumbValue, setThumbValue] = useState();
  const thumbs = [
    { name: 1, value: 1},
    { name: 2, value: 2},
    { name: 3, value: 3},
    { name: 4, value: 4},
    { name: 5, value: 5}
  ]

  return (
    <StContainer fluid>
      <StContainerForm>
        <Link to="/request/details/63d357e8a73d43f580066537"><StArrowLeftContainer><ArrowLeft /></StArrowLeftContainer></Link>
        <StTextMiddle>
          <StTitle>Feed Back</StTitle>
        </StTextMiddle>
        <StForm>
          <StContainerLabel>Rating</StContainerLabel>
          <StThumbContainer>
            {thumbs.map((thumb, idx) => (
              <ToggleButton key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={'transparent'}
                value={thumb.value}
                checked={thumbValue === thumb.value}
                onChange={(e) => setThumbValue(e.currentTarget.value)}
              >
                {
                  (thumbValue > idx )?(
                    <ThumbFill/>
                  ):(
                    <Thumb/>
                  )
                }
              </ToggleButton>
            ))}
          </StThumbContainer>
          <StContainerLabel>Feed back</StContainerLabel>
          <StTextArea controlId="textarea">
            <Form.Control as="textarea" rows={3} />
          </StTextArea>
          <StButton variant="danger">Send Feed back</StButton>
        </StForm>
      </StContainerForm>
    </StContainer>
  );
};

export default RequestReview;

const StContainer = styled(Container)`
  overflow-y: auto;
  padding: 24px 40px;

  height: 100%;
  background-color: #FBA69B;

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

const StArrowLeftContainer = styled.div`
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

const StTitle = styled.div`
  font-family: "Inter";
  font-weight: 700;
  font-size: 46px;
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

const StThumbContainer = styled.div`
  display: flex;
  justify-content: center;

  padding-bottom: 24px;

  svg{
    fill: #DE0A2D;
  }
`

const StTextArea = styled(Form.Group)`
  margin-bottom: 24px;
`

const StButton = styled(Button)`
  background-color: #DE0A2D;
  width: 100%;
`