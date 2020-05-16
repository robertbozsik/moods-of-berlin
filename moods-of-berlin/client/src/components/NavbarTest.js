import React from "react";
import { Link } from "react-router-dom";

const NavbarTest = (props) => {
  return (
    <nav style={navStyle}>
      <span>MOODS OF BERLIN</span> |{" "}
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/places">
        Places
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/signup">
        Sign Up
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/login">
        Login
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/places/protected">
        Protected Area
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/">
        Logout
      </Link>
    </nav>
  );
};

const linkStyle = {
  color: "darkblue",
  textDecoration: "none",
};

const navStyle = {
  color: "white",
  backgroundColor: "lightblue",
  padding: "1rem",
};

export default NavbarTest;
