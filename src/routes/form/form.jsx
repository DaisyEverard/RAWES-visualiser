import React, { useEffect } from "react";
import { useState } from "react";
import "./form.css"
import Table from "./Table";
import getTemplateList from "../../utils/api";

const Form = () => {
    const [provList, setProvList] = useState([" "]); 
    const [reguList, setReguList] = useState([" "])
   const [cultList, setCultList] = useState([" "])
   const [suppList, setSuppList] = useState([" "]);

    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
          try {
            const [provisioning, cultural, regulating, supporting] = await Promise.all([
              getTemplateList('provisioning'),
              getTemplateList('cultural'),
              getTemplateList('regulating'),
              getTemplateList('supporting'),
            ]);
    
            setProvList(provisioning);
            setCultList(cultural);
            setReguList(regulating);
            setSuppList(supporting);
            setIsLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          }
        };
        fetchData()
      }, []);
        
   const getTable = (list, updateListFunction, serviceType) => {
    const tableName = serviceType.substring(0, 4).toLowerCase() + "Table"; 

    return <div>
        <h2>{serviceType} Services</h2>
        <Table list={list} updateList={updateListFunction} tableName={tableName}></Table>
    </div>
   }

//    section for rendered component
   if (isLoading) return <div>Loading...</div>;

    return     <div id="main-tab">
    <form id="rawes-data">
        {getTable(provList, setProvList, "Provisioning")}
        {getTable(reguList, setReguList, "Regulating")}
        {getTable(cultList, setCultList, "Cultural")}
        {getTable(suppList, setSuppList, "Supporting")} 

        <div className="flex-row">
            <label htmlFor="form-date">Date:</label>
            <input id="form-date" type="input" placeholder="MM/YYYY"/>
        </div>
        <div className="flex-row">
            <button id="submit-button" type="submit">Submit</button>
        </div>
    </form>
</div>
}

export default Form; 