import React, { useState } from "react";
import styled from "styled-components";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from "react-bootstrap/Stack";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ChatBalloon from "./ChatBalloon";

import { ReactComponent as Message } from "../../assets/img/message.svg";
import { ReactComponent as XIcon } from "../../assets/img/x.svg";
import { ReactComponent as ArrowLeft } from "../../assets/img/arrowLeft.svg";
import { ReactComponent as Send } from "../../assets/img/send.svg";

const Chatbox = () =>  {
  // Current userId
  const userId = "63c786e0db5d8948ac152a1a";
  // const image = "https://xf-assets.pokecharms.com/data/attachment-files/2015/10/236932_Bulbasaur_Picture.png"

  // Icon state between message icon with x icon
  const [ icon, setIcon ] = useState("message");
  const changeIcon = () => {
    if (icon === "message"){
      setIcon("xicon")
    } else {
      setIcon("message")
    }
  }

  // Any selected chat room state
  const [ chatroom, setChatroom ] = useState({
    roomId:"",
    username:"",
    image:"",
  });

  const onClickChatList = (roomId, username, image) => {
    setChatroom({
      roomId,
      username,
      image,
    });
  };

  const onClickCloseChatList = () => {
    setChatroom({
      roomId:"",
      username:"",
      image:"",
    })
  }

  // Later will be replaced with real data from back-end
  const chatroomlist = [
    {
      roomId:"63c786e0db5d8948ac152a1a+63c787d1db5d8948ac152a22",
      username: "ayam1",
      image: "https://xf-assets.pokecharms.com/data/attachment-files/2015/10/236934_Squritle_Picture.png",
    },
    {
      roomId:"2",
      image: "https://xf-assets.pokecharms.com/data/attachment-files/2015/10/236933_Charmander_Picture.png",
      username: "ayam2",
    },
    {
      roomId:"3",
      image: "https://xf-assets.pokecharms.com/data/attachment-files/2015/10/236932_Bulbasaur_Picture.png",
      username: "ayam3",
    },
  ]

   // Later will be replaced with real data from back-end
  const chat = [
    {
      roomId: "63c786e0db5d8948ac152a1a+63c787d1db5d8948ac152a22",
      userId: "63c786e0db5d8948ac152a1a",
      chat: "If yes, maybe I can help",
      time: "2023-01-18T05:53:03.680Z",
    },
    {
      roomId: "63c786e0db5d8948ac152a1a+63c787d1db5d8948ac152a22",
      userId: "63c787d1db5d8948ac152a22",
      chat: "Thanks",
      time: "2023-01-18T08:35:37.382Z",
    }
  ]

  return (
    <Navbar bg="transparent" expand="lg" sticky="bottom">
      <Container fluid>
        <Nav/>
        <OverlayTrigger trigger="click" placement="top-end" overlay={
          <StPopover id="popover-positioned-top-end">
            <StHeader>
              {/* Make x button appear if user already select the chat room */}
              {(chatroom.roomId !== "")?(
                <Stack direction = "horizontal" gap={2}>
                  <div onClick={onClickCloseChatList} type="button">
                    <ArrowLeft/>
                  </div>
                  <div>
                    <img src={chatroom.image} alt="" width="20px"/>
                  </div>
                  <div>
                    {chatroom.username}
                  </div>
                </Stack>
              ):(
                <Stack direction="horizontal">
                  <Message/>
                  <div>
                    Chat
                  </div>
                </Stack>
              )}
              </StHeader>
              <StBody>
                {/* If user haven't select any chat room, user can see the list */}
                {( chatroom.roomId === "" )?(
                  <StChatroomList>
                    {chatroomlist?.map(({roomId, username, image},index)=>(
                      <div key ={index}>
                        <Stack gap={2} direction="horizontal">
                          <img src={image} alt="" width="20px"/>
                          <div type="button" onClick={()=>{onClickChatList(roomId,username,image)}}>
                            {username}
                          </div>
                        </Stack>
                        {(index+1 < chatroomlist.length)?(<hr/>):(null)}
                      </div>
                    ))}
                  </StChatroomList>
                ) : (
                  <StChatContainer>
                    <StMessageContainer>
                      {chat.map((content)=>{
                        if(content.roomId === chatroom.roomId){
                          if(content.userId === userId){
                            return <ChatBalloon
                              rightSide={true}
                              />
                          } else {
                            return <ChatBalloon
                              rightSide={false}
                              />
                          }
                        } else {
                          return null
                        }
                      })}
                    </StMessageContainer>
                    <StInputbox>
                      <InputGroup>
                        <StInput placeholder="Write a Message" aria-label="chat" aria-describedby="basic-addon2" variant="transparent"
                          />
                        <StSend variant="transparent" id="button-addon2">
                          <Send/>
                        </StSend>
                      </InputGroup>
                    </StInputbox>
                  </StChatContainer>
                )}      
              </StBody>
            </StPopover>
          }
        >
          <StButton variant="danger" onClick={changeIcon} >
            {
              (icon === "message")?(
                <Message/>
              ):(
                <XIcon/>
              )
            }
          </StButton>
        </OverlayTrigger>
      </Container>
    </Navbar>
  );
};

export default Chatbox;

const StPopover = styled(Popover)`
  max-width: 500px;
`

const StButton = styled(Button)`
  height:50px;
  width:50px;
  border-radius:50px;
`

const StHeader = styled(Popover.Header)`
  width: 500px;
  background-color: #DE0A2D;
  color: white;

  svg{
    /* width:auto; */
    margin-right:10px;
  }
`

const StBody = styled(Popover.Body)`
  padding: 0px;
  height: 500px;
  width: 500px;
`

const StChatroomList = styled.div`
  padding: 10px;
`

const StChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
`

const StMessageContainer = styled.div`
  height: 455px;
  width: 500px;
  
  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-direction: column-reverse;
`

const StInputbox = styled.div`
  width: 100%;
`

const StInput = styled(Form.Control)`
  border: none;
  
  &:focus{
    box-shadow: none;
  }
`

const StSend = styled(Button)`
  outline: none;
  border: none;
`