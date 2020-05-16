import React from "react";
import NavbarTest from "../NavbarTest";
import Navbar from "../Navbar";

const ProtectedAreaTest = (props) => {
  return (
    <div>
      <Navbar />
      <NavbarTest />
      <h1>Protected Area</h1>
      <p1>
        This will be a protected area for users who already signed up and logged
        in
      </p1>
      <p1>
        They can add their own places to the default list, edit and even delete
        their own places
      </p1>
    </div>
  );
};

export default ProtectedAreaTest;
