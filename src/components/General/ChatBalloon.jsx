import React, { useState } from "react";
import styled from "styled-components";

import Container from 'react-bootstrap/Container';

const ChatBalloon = ({rightSide}) =>  {
  return (
    <StContainer>
      {(rightSide)?(
        <StRowRight>
          <StImage src="https://clipground.com/images/random-png-5.jpg" alt=""/>
          <StBalloonRight>
            Hehe kanna
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quaerat voluptatibus neque blanditiis inventore illo natus consequuntur, eaque ab, fuga incidunt voluptatem rerum libero et quas praesentium vitae nobis quis.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet architecto magnam iusto itaque quidem asperiores. Dolorem recusandae tenetur quod asperiores, ab tempora excepturi inventore ipsum, labore veritatis dolor delectus! */}
          </StBalloonRight>
        </StRowRight>
      ):(      
        <StRow>
          <StImage src="https://clipground.com/images/random-png-5.jpg" alt=""/>
          <StBalloon>
            hehe kiri
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusamus facilis expedita dicta ratione quis recusandae at id, hic eveniet quas explicabo soluta, quisquam voluptatem fugit. Quos soluta quaerat inventore.

            lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos enim saepe facere distinctio dolores, incidunt quis voluptates tempore quo quasi dolorum magni sed impedit debitis ratione iusto laboriosam, est dolore!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis nemo quis eligendi accusamus hic et voluptas perferendis vitae neque, asperiores quae ea? Aliquid iste dignissimos voluptatibus maiores ab quibusdam! */}
          </StBalloon>
        </StRow>
      )}
    </StContainer>
  );
};

export default ChatBalloon;

const StContainer = styled(Container)`
  padding-left: 18px;
  margin-bottom: 8px;
`

const StRow = styled.div`
  display:flex;
  flex-direction: row;
  div{
    margin-top: 0px;
  }
`

const StImage = styled.img`
  padding:0px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`

const StBalloon = styled.div`
  padding: 8px 16px;
  margin-left: 10px;

  width: max-content;
  max-width: 80%;
  min-height: 36px;

  text-overflow: wrap;

  background-color: #FDD7CC;
  border-radius: 0px 8px 8px 8px;

  display:flex;
  justify-content:left;
  align-items:center;
`

const StRowRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: end;

  div{
    margin-top: 0px;
  }
`

const StBalloonRight = styled.div`
  padding: 8px 16px;
  margin-right: 10px;

  width: max-content;
  max-width: 80%;
  min-height: 36px;

  text-overflow: wrap;

  background-color: #FDD7CC;
  border-radius: 8px 0px 8px 8px;

  display:flex;
  justify-content:left;
  align-items:center;
`