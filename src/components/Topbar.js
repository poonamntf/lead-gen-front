import React from "react";
import logo from "../assets/logo.png";
import Topbarbuttons from "./Topbarbuttons";
import { Navbar, Nav, Container } from "react-bootstrap";

const Topbar = () => {
  return (
    <Navbar expand="md" variant="light" className="topbar-custom">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="d-flex justify-content-center align-items-center">
            <Topbarbuttons />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
