import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import React, { useState } from "react";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";


function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Tindercun</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/signup">
              <NavItem>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  );
}

export default App;