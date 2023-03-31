import React from "react";
import "./form.css"

const Form = () => {
    return     <div id="main-tab">
    <form id="rawes-data">
        <h2>Provisioning Services</h2>
        <table id="provisioning-table" data-table="provisioning"></table>

        <h2>Regulating Services</h2>
        <table id="regulating-table" data-table="regulating"></table>

        <h2>Cultural Services</h2>
        <table id="cultural-table" data-table='cultural'></table>

        <h2>Supporting Services</h2>
        <table id="supporting-table" data-table='supporting'>
        </table>
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

export default Form