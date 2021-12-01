import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// import { HashLink } from "react-router-hash-link";
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
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/home#Home">
                HOME
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#About">
                ABOUT
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#Services">
                SKILLS
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#Portfolio">
                PORTFOLIO
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#Blog">
                BLOG
              </Nav.Link>

              <Nav.Link as={HashLink} to="/home#Contact">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
