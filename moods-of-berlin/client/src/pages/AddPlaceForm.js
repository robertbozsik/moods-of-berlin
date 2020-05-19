import React from "react";
import AddPlace from "../components/AddPlace";

const AddPlaceForm = (props) => {
  return (
    <div>
      <h1 className="text-center">Add a Place</h1>
      <AddPlace history={props.history} />
    </div>
  );
};

export default AddPlaceForm;
