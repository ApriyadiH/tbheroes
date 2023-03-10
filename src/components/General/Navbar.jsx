import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout, stillLogin  } from "../../redux/modules/userLoginSlice";

import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";

const NavbarTBH = () =>  {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { isLoggedIn } = useSelector((state) => state.userLogin);

  const retrieved = localStorage.getItem('user');
  const user = JSON.parse(retrieved);

  useEffect(() => {
    if (user) {
      dispatch(stillLogin({
        username: user.username,
        email: user.email,
        role: user.role
      }));
    } else {
      dispatch(logout());
    }
  },[])

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('user');
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
      <Container fluid>
        <Navbar.Brand href="/" >
          <StContainerImage>
            <Logo width="100%" />
          </StContainerImage>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {
            (isLoggedIn)?(
              <StNav className="me-auto">
                <StNavDropdown className="px-3" title="Request" variant="light" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/request/form">Request form</NavDropdown.Item>
                  <NavDropdown.Item href="/request/list">Request list</NavDropdown.Item>
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
              </StNav>
            ):(
              <StNav className="me-auto">
                <Nav.Link className="px-3" href="/volunteer/list"><StText>Volunteer List</StText></Nav.Link>
              </StNav>
            )
          }
          {
            (!isLoggedIn)?(
            <StNav>
              <Nav.Link href="/login">
                <Button variant="transparent"><StText>Log In</StText></Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="/register">
                <Button variant="danger">Sign Up</Button>
              </Nav.Link>
            </StNav>
            ):(
              <StNav>
                <StText>{user.username}</StText>
                <Nav.Link>
                  <Button variant="danger" onClick={()=>{handleLogout()}}>Log Out</Button>
                </Nav.Link>
              </StNav>
            )
          }
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

const StNav = styled(Nav)`
  display: flex;
  align-items: center;

  p{
    margin-top: auto;
    margin-bottom: auto;
  }
`

const StNavDropdown = styled(NavDropdown)`
  a{
    color: black;
  }
`

const StText = styled.p`
  color: black;
`