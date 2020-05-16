import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";

const Navbar = (props) => {
  return (
    <Nav className="nav justify-content-end" bg="primary">
      <Nav.Brand>MOODS OF BERLIN</Nav.Brand>
      <Nav.Brand>
        <Link to="/">Home</Link>
      </Nav.Brand>
      <Nav.Brand>
        <Link to="/places">Places</Link>
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
        <Link to="/places/protected">Protected Area</Link>
      </Nav.Brand>
      <Nav.Brand>
        <Link to="/">Logout</Link>
      </Nav.Brand>
    </Nav>
  );
};

export default Navbar;
