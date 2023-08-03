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
  metadata.timestamp = timestamp;

  postNewForm(formArray, metadata); 
};

export {handleFormSubmit};  

// new table - form_history (timestamp, service_type, service_name, value)