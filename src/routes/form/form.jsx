import React, { useEffect } from "react";
import { useState } from "react";
import "./form.css"
import Table from "./Table";
import getTemplateList from "../../utils/api";
import { getDataOnFormSubmit } from "../../utils/useFormData";

const Form = () => {
        
   const getTable = (serviceType) => {
    const tableName = serviceType.substring(0, 4).toLowerCase() + "Table"; 
    return <div>
        <h2>{serviceType} Services</h2>
        <Table tableName={tableName} serviceType={serviceType}></Table>
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
              getDataOnFormSubmit(e)
            }}>Submit</button>
        </div>
    </form>
</div>
}

export default Form; 