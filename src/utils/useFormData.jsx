import React from "react";

const getDataOnFormSubmit = (e) => {
  e.preventDefault();
  const checkedBoxes = Array.from(
    document.querySelectorAll('input:checked[name][data-table]')
  );
  const formArray = checkedBoxes.map((service) => ({
    name: service.getAttribute("name"),
    serviceType: service.getAttribute("data-table"),
    value: service.getAttribute("value")
  }));
  const timestamp = Date.now();
  formArray.unshift(timestamp); 

  document.querySelectorAll('[type="radio"]').forEach((input) => {
    input.checked = false;
  });
  return formArray; 
};

export {getDataOnFormSubmit};  

// new table - form_history (timestamp, service_type, service_name, value)