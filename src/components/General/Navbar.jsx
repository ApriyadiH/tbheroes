import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import React from "react";
import styled from "styled-components";

const NavbarTBH = () =>  {
  const role = "admin";
  console.log(role)

  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
      <Container fluid>
        <Navbar.Brand href="/" >
          <StContainerImage>
            <img src="assets/img/logo.svg" alt="logo" width="100%"/>
          </StContainerImage>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <StNavDropdown className="px-3" title="Request" variant="light" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/event/form">Request form</NavDropdown.Item>
              <NavDropdown.Item href="/event/form">Request list</NavDropdown.Item>
            </StNavDropdown>
            <StNavDropdown className="px-3" title="Event Poster" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/event/form">Event Poster Form</NavDropdown.Item>
              <NavDropdown.Item href="/event/list">Event Poster List</NavDropdown.Item>
            </StNavDropdown>
            <Nav.Link className="px-3" href="/volunteer/list"><StText>Volunteer List</StText></Nav.Link>
            <StNavDropdown className="px-3" title="User Settings" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/user/information/:userId">Add/Edit Information</NavDropdown.Item>
              <NavDropdown.Item href="/user/password">Change password</NavDropdown.Item>
            </StNavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">
              <Button variant="transparent"><StText>Log In</StText></Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="/register">
              <Button variant="danger">Sign Up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTBH;

const StContainerImage = styled.div`
  /* width: 12vw; */
  width: 172px;
`

const StNavDropdown = styled(NavDropdown)`
  a{
    color: black;
  }
`

const StText = styled.p`
  color: black;
`