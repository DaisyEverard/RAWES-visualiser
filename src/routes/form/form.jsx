import React, { useEffect } from "react";
import { useState } from "react";
import "./form.css"
import Table from "./Table";
import getTemplateList from "../../utils/api";

const Form = () => {
    console.log(getTemplateList("cultural")); 

    // const [provList, setProvList] = useState(["a", "set", "of", "stuff"]); 
    const [isLoading, setIsLoading] = useState(false); 

    // useEffect(() => {
    //     setProvList(getTemplateList("provisioning"));
    //     setIsLoading(false); 
    // }, [])

    // list of table row headers/services
    const [provList, setProvList] = useState(['Provision of fresh water', 'Provision of food',
    'Provision of fibre', 'Provision of fuel', 'Provision of genetic resources',
    'Provision of natural medicines and pharmaceuticals', 'Provision of ornamental resources',
    'Clay, mineral, aggregate harvesting', 'Waste disposal', 
    'Energy harvesting from natural air and water flows'])
    const [reguList, setReguList] = useState(['Air quality regulation', 'Local climate regulation',
    'Global climate regulation', 'Water regulation', 'Flood hazard regulation',
   'Storm hazard regulation', 'Pest regulation', 'Regulation of human diseases',
    'Regulation of diseases affecting livestock', 'Erosion regulation', 'Water purification',
   'Pollination', 'Salinity regulation', 'Fire regulation', 'Noise and visual buffering'])
   const [cultList, setCultList] = useState(['Cultural heritage', 'Recreation and tourism', 'Aesthetic value',
   'Spritual and religious value', 'Insipiration value', 'Social relations', 
   'Education and research'
   ])
   const [suppList, setSuppList] = useState(['soil formation', 'Primary production', 'Nutrient cycling',
   'Water recycling', 'provision of habitat']);
        
   const getTable = (list, updateListFunction, serviceType) => {
    const tableName = serviceType.substring(0, 4).toLowerCase() + "Table"; 

    return <div>
        <h2>{serviceType} Services</h2>
        <Table list={list} updateList={updateListFunction} tableName={tableName}></Table>
    </div>
   }

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