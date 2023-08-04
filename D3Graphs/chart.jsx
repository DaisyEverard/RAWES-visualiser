import React, { useEffect } from "react";
import * as d3 from 'd3'; 

const Chart = ({currentForm}) => {
    // prov, cult, reg, supp
    let valueObj = {provisioning: 0, cultural: 0, regulating: 0, supporting: 0}

    currentForm.forEach(form => {
        const type = form.serviceType; 
        const value = parseInt(form.value);
        valueObj[type] += value; 
        }
    )
    const valueArray = [valueObj.provisioning, 
        valueObj.cultural, 
        valueObj.regulating, 
        valueObj.supporting]; 

// relative width and height of svg
    const w = 500;
    const h = 100;

// //Labels
//     svg.selectAll("text")
//        .data(valueObj)
//        .enter()
//        .append("text")
//        .attr("x", (d, i) => i * 30)
//        .attr("y", (d, i) => h - (3 * d) - 3)
//        .text(d => d)

const getBars = () => {
    const services = Object.keys(valueObj);
    return valueArray.map((number, index) => {
        const service = services[index].substring(0,4); 
        return <g>
        <rect x={index * 30}
    y={h - number * 3}
    width={25}
    height={3 * number}
    fill={"navy"}></rect>
    <text
    x={index * 30}
    y={h - (3 * number) - 3}
    >{service}</text>
    </g>
    })
}
    
    return <svg width={w} height={h}>
        {getBars()}
    </svg>
}

export default Chart; 
// doesn't handle negative numbers