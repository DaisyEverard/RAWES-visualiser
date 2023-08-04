import { scaleBand, scaleLinear } from 'd3';
import React, { useEffect, useState } from 'react';

// expected props: ...{ xScale, yScale,data,height, t,}
// expected data: [{ name: 'Sun', value: 100 },...]
// my data: [{"name": "","serviceType": "","value": "-1.0"},...]

 const TypeBarChart = ({formObject}) => {
    const [filteredData, setFilteredData] = useState([]); 
 
    const filterData = (form) => {
        const valueObj =  {provisioning: 0, cultural: 0, regulating: 0, supporting: 0}
        form.forEach(service => {
            const type = service.serviceType; 
            const value = parseInt(service.value);
            valueObj[type] += value; 
        })
        setFilteredData([
            {name: "provisioning", value: valueObj.provisioning},
            {name: "cultural", value: valueObj.cultural},
            {name: "regulating", value: valueObj.regulating},
            {name: "supporting", value: valueObj.supporting}
        ]); 
    }

    // change current data
    useEffect(() => {
        filterData(formObject);
    }, [formObject])

    // width and height init
    const width = 500; 
    const height = width * 0.5; 
    const margin = {
        top: 10,
        right: 10,
        bottom: 20,
        left: 40,
      };
      const tableWidth = width - margin.left - margin.right;
      const tableHeight = height - margin.top - margin.bottom;
      const labelOffsetY = 15; 

    //   xScale and uScale init
    const xScale = scaleBand()
    .domain(filteredData.map(d => d.name))
    .range([0, tableWidth])
    .padding(0.26);
    const yScale = scaleLinear()
      .domain([0, Math.max(...filteredData.map(d => d.value))])
      .range([tableHeight, 0])
      .nice();

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.right})`} style={{paddingTop: '100px'}}>
            {filteredData.map(d => (
                <g key={d.name}>
                    <rect
                        className={`bar ${d.name}-bar`}
                        x={xScale(d.name)}
                        y={yScale(d.value)}
                        width={xScale.bandwidth()}
                        height={tableHeight - yScale(d.value)}
                    />
                    <text
                    x={xScale(d.name) + xScale.bandwidth() / 2}
                    y={yScale(d.value) - labelOffsetY}
                    textAnchor="middle"
                    dy="0.35em"
                    fontSize="12px"
                    fill="black"
                >
                    {d.name}
                </text>
                </g>
                ))}
            </g>
        </svg>
    );
}

export default TypeBarChart;
