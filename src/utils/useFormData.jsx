import React from "react";
import { postNewForm } from "./api";

const handleFormSubmit = (e) => {
  e.preventDefault();
  const checkedBoxes = Array.from(
    document.querySelectorAll('input:checked[name][data-table]')
  );
  const formArray = checkedBoxes.map((service) => ({
    name: service.getAttribute("name"),
    serviceType: service.getAttribute("data-table"),
    value: service.getAttribute("value")
  }));
  document.querySelectorAll('[type="radio"]').forEach((input) => {
    input.checked = false;
  });

  const metadata = {}
  const timestamp = Date.now();
  let location = document.querySelector("#location-input").value;
  if (!location) {location = "location"}; 
  document.querySelector("#location-input").value = ""; 
  let assessor = document.querySelector("#assessor-input").value;
  if (!assessor) {assessor = "assessor"}; 
  document.querySelector("#assessor-input").value = ""; 
  metadata.timestamp = timestamp;
  metadata.location = location;
  metadata.assessor = assessor;

  postNewForm(formArray, metadata); 
};

export {handleFormSubmit};  

// new table - form_history (timestamp, service_type, service_name, value)