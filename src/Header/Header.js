import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../img/logo.png";
const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">HOME</Nav.Link>
              <Nav.Link href="#About">ABOUT</Nav.Link>
              <Nav.Link href="#Services">SERVICES</Nav.Link>
              <Nav.Link href="#Portfolio">PORTFOLIO</Nav.Link>

              <Nav.Link href="#Contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
