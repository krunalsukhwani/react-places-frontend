import React from "react";

import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input element="input" id="title" type="text" label="Title" placeholder="Enter Title"/>
      <Input element="textarea" id="description" label="Description" rows="5"/>
    </form>
  );
};

export default NewPlace;
