import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <Nav className="nav justify-content-end" bg="primary">
      <Nav.Brand>MOODS OF BERLIN</Nav.Brand>
      <Nav.Brand>
        <Link to="/">Home</Link>
      </Nav.Brand>
      <Nav.Brand>
        <Link to="/places">Places By Mood</Link>
      </Nav.Brand>
      <Nav.Brand>
        <Link to="/about">About</Link>
      </Nav.Brand>
      <Nav.Brand>
        <Link to="/signup">Sign Up</Link>
      </Nav.Brand>
      <Nav.Brand>
        <Link to="/login">Login</Link>
      </Nav.Brand>
      <Nav.Brand>
        <Link to="/">Logout</Link>
      </Nav.Brand>
    </Nav>
  );
};

export default Navbar;
