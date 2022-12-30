// Import library
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

import { logout, stillLogin } from "../../redux/modules/userSlice";

const Navbar = () => {
  // Declare variable
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Take user information from redux
  const { isAdmin, isLoggedIn } = useSelector((state) => state.user);

  console.log(isAdmin)

  // Logout
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('user');
    navigate("/");
  };

  const retrieved = localStorage.getItem('user');
  const user = JSON.parse(retrieved);
  if (user) {
    dispatch(stillLogin({
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin
    }));
  } else {
    dispatch(logout());
  }

  return (
    <StNav className="navbar navbar-expand-lg">
      <div className="container-fluid" style={{ "padding": "0px 30px" }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <h3>The Blood heroes</h3>
          <p>Your Blood is their life</p>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div type="button" className="nav-link">Menu 1</div>
            </li>
            <li className="nav-item">
              <div type="button" className="nav-link">Menu 2</div>
            </li>
            <li className="nav-item">
              <div type="button" className="nav-link">Menu 3</div>
            </li>
          </ul>
          {isLoggedIn ? (
            <li className="d-flex">
              <div className="nav-item dropdown px-3">
                <div className="nav-link dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-circle" style={{ fontSize: "2em" }}></i>
                </div>
                <ul className="dropdown-menu">
                  {/* {(isAdmin) ? (
                    <div className="menu-admin">
                      <li><Link className="dropdown-item" to="/Admin/manage">Manage Users</Link></li>
                      <li><Link className="dropdown-item" to="/Admin/post">Post List</Link></li>
                      <li><Link className="dropdown-item" to="/Admin/request">Request List</Link></li>
                    </div>
                  ) : (
                    <div className="menu-user">
                      <li><Link className="dropdown-item" to="/User/setting">User Settings</Link></li>
                      <li><Link className="dropdown-item" to="/User/request">Request List</Link></li>
                    </div>
                  )
                  } */}
                </ul>
              </div>
              <div className="px-2">
                <div className="nav-link" role="button" onClick={handleLogout}><StText>Logout</StText></div>
              </div>
            </li>
          ) : (
            <li className="d-flex px-2">
              <Link className="nav-link" to="/Login"><StText>Login</StText></Link>
            </li>
          )
          }
            <li className="d-flex px-2">
              <button className="btn btn-secondary">
                <Link className="nav-link" to="/Register"><StText>Sign-up</StText></Link>
              </button>
            </li>
        </div>
      </div>
    </StNav>
  );
};

export default Navbar;

const StNav = styled.nav`
  background-color: #b7b7b7;
`
const StText = styled.span`
  text-align: center;
  font-weight: 500;
  font-size: calc(1.275rem + 0.3vw);
`