import React from "react";
import "./form.css"
import Table from "./Table";
import { handleFormSubmit } from "../../utils/useFormData";

const Form = () => {
   const getTable = (serviceType) => {
    return <div>
        <h2>{serviceType} Services</h2>
        <Table serviceType={serviceType.toLowerCase()}></Table>
    </div>
   }

    return     <div id="main-tab">
    <form id="rawes-data">
        {getTable("Provisioning")}
        {getTable("Regulating")}
        {getTable("Cultural")}
        {getTable("Supporting")} 

        <div className="flex-row">
            <label htmlFor="#location-input">Location:</label>
            <input id="location-input" type="text" name="location-input" placeholder="순천만"></input>
        </div>
        <div className="flex-row">
            <label htmlFor="#assessor-input">Assessor Name:</label>
            <input id="assessor-input" type="text" name="assessor-input" placeholder="John Smith"></input>
        </div>
        <div className="flex-row">
            <button id="submit-button" type="submit" onClick={(e) => {
              handleFormSubmit(e); 
            }}>Submit</button>
        </div>
    </form>
</div>
}

export default Form; 