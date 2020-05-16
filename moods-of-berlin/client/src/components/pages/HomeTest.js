import React from "react";
import NavbarTest from "../NavbarTest";
import Navbar from "../Navbar";

const HomeTest = (props) => {
  return (
    <div>
      <Navbar />
      <NavbarTest />
      <h1>Home</h1>
      <p>
        This will be our home page, can be visited by every user even without
        sign up and login.
      </p>
      <h2>This part of the app will consist of: </h2>
      <ul>
        <li>Navbar: logo, home, (login, signup, logout)</li>
        <li>Section1: background-color, img, text</li>
        <li>Section2: links (text, bg photo, bg color with opacity), text</li>
        <li>And maybe a footer with our names and a copyright</li>
      </ul>
    </div>
  );
};

export default HomeTest;
