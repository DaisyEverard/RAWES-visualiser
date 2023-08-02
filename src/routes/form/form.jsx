import React from "react";
import "./form.css"
import Table from "./Table";
import { getDataOnFormSubmit } from "../../utils/useFormData";
import { postNewForm, removeForm } from "../../utils/api";

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
            <button id="submit-button" type="submit" onClick={(e) => {
              const data = getDataOnFormSubmit(e); 
              postNewForm(data); 
            }}>Submit</button>
        </div>
    </form>
</div>
}

export default Form; 