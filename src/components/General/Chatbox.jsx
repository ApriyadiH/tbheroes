import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";


function ChatBox() {
  return (
    // <StNav className="navbar fixed-bottom d-flex justify-content-end">
    <StNav className="navbar fixed-bottom">
      <StContainer>
        <StContainerChatbox className="btn-group dropup">
          <StButtonChatBox type="button" className="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Chatbox
          </StButtonChatBox>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>Ayam</li>
            <li>bebek</li>
            <li>cicak</li>
          </ul>
        </StContainerChatbox>
        <StContainerChatbox className="btn-group dropup">
          <StButtonChatBox type="button" className="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Ayam
          </StButtonChatBox>
          <ul className="dropdown-menu dropdown-menu-end">
            <div className="row-reverse">
              <div>Ayam</div>
              <div>Bebek</div>
              <div>Cicak</div>
              <div>Domba</div>
            </div>
          </ul>
        </StContainerChatbox>
      </StContainer>
    </StNav>
  );
}

export default ChatBox;

const StNav = styled.nav` 
  display: flex;
  justify-content: right;
`

const StContainer = styled.div` 
  display: flex;
  flex-direction: row-reverse;
  justify-content: right;
`

const StContainerChatbox = styled.div`
  width: 20vh;
  margin: 10px;

  display:flex;
  align-items: center;
  justify-content: center;

  background-color: #b7b7b7;
  border-radius: 15px;
`

const StButtonChatBox = styled.button`
  width: 100%;
  height: 100%;
  margin: 10px;
  border-color: none;
  border: none;
  background-color: transparent;
`