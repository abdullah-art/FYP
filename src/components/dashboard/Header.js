import React, { useState } from "react";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import logo from "../../assets/favicon.png";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  const style = {
    "background-color": "Transparent",
    "background-repeat": "no-repeat",
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <div className="container">
          <Navbar.Brand href="#">
            <img src={logo} alt="" width="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown
                title="Features"
                id="collasible-nav-dropdown"
                className="p-2"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing" className="p-3">
                Pricing
              </Nav.Link>
              <Nav.Link href="#blog" className="p-3">
                Blog
              </Nav.Link>
              <Nav.Link href="#contact" className="p-3">
                Contact
              </Nav.Link>
              <Nav.Link href="#about" className="p-3">
                About
              </Nav.Link>
              <Nav.Link href="#bookademo" className="p-3">
                Book a demo
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                onClick={handleShowLogin}
                as={Button}
                style={style}
                className="p-2"
              >
                Login
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                onClick={handleShowSignup}
                as={Button}
                style={style}
                className="p-2"
              >
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Login show={showLogin} handleClose={handleCloseLogin} />
      <Signup show={showSignup} handleClose={handleCloseSignup} />
    </div>
  );
}
