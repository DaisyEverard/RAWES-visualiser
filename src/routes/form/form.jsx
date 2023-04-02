import React from "react";
import { useState } from "react";
import "./form.css"
import Table from "./Table";

const Form = () => {
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
   'Water recycling', 'provision of habitat'])
        
    return     <div id="main-tab">
    <form id="rawes-data">
        
        <h2>Provisioning Services</h2>
        <Table list={provList} updateList={setProvList} tableName={"provTable"}/>

        <h2>Regulating Services</h2>
        <Table list={reguList} updateList={setReguList} tableName={"reguTable"}/>

        <h2>Cultural Services</h2>
        <Table list={cultList} updateList={setCultList} tableName={"cultTable"}/>

        <h2>Supporting Services</h2>
        <Table list={suppList} updateList={setSuppList} tableName={"suppTable"}/>

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