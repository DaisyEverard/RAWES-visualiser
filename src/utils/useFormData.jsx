import React from "react";

const getDataOnFormSubmit = (e) => {
  e.preventDefault();
  const checkedBoxes = Array.from(
    document.querySelectorAll('input:checked[data-name][data-table]')
  );
  const formArray = checkedBoxes.map((box) => ({
    name: box.getAttribute("data-name"),
    serviceType: box.getAttribute("data-table"),
    value: box.getAttribute("value")
  }));
  const timestamp = Date.now();
  formArray.unshift(timestamp); 

  document.querySelectorAll('[type="radio"]').forEach((input) => {
    input.checked = false;
  });
  return formArray; 
};

const addDataToLocalStorage = (newForm) => {
  if (newForm.length > 1) {
    const local = JSON.parse(localStorage.getItem("rawesForms")) || [];
    local.push(newForm);
    localStorage.setItem("rawesForms", JSON.stringify(local));
  }
}
const getAllDataFromLocalStorage = () => {
  const local = JSON.parse(localStorage.getItem("rawesForms")) || [];
  return local; 
}
const getTimestampFromLocalStorage = (timestamp) => {
  const local = JSON.parse(localStorage.getItem("rawesForms")) || [];
  let form = []; 
  if (local.length) {
    form = local.filter(form => form[0] == timestamp);
  }
  console.log(form); 
  return form; 
}

export {getDataOnFormSubmit, addDataToLocalStorage, getAllDataFromLocalStorage, getTimestampFromLocalStorage};  