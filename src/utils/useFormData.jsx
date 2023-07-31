import React, { useState } from "react";

const useFormData = (event) => {
        event.preventDefault()
        const [formData, setFormData] = useState({ formArray: [], date: "" });
      
        const handleFormSubmit = (e) => {
          e.preventDefault();
          const checkedBoxes = Array.from(
            document.querySelectorAll('input:checked[data-name][data-table]')
          );
          const formArray = checkedBoxes.map((box) => ({
            name: box.getAttribute("data-name"),
            serviceType: box.getAttribute("data-table"),
            value: box.value,
          }));
          const date = document.getElementById("form-date").value;
          document.getElementById("form-date").value = "";
          formArray.unshift(date);
      
          document.querySelectorAll('[type="radio"]').forEach((input) => {
            input.checked = false;
          });
      
          if (formArray.length > 1) {
            const local = JSON.parse(localStorage.getItem("rawesForms")) || [];
            local.push(formArray);
            localStorage.setItem("rawesForms", JSON.stringify(local));
          }
      
          setFormData({ formArray, date: "" });
        };
      
        return { formData, handleFormSubmit };
      };

export default useFormData; 