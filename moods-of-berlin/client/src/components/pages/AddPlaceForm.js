import React from "react";
import NavbarTest from "../NavbarTest";
import AddPlace from "../AddPlace";

const AddPlaceForm = (props) => {
  return (
    <div>
      <NavbarTest />
      <h1>Add a Place</h1>
      <AddPlace />
    </div>
  );
};

export default AddPlaceForm;
