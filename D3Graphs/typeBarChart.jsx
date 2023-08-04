import { scaleBand, scaleLinear } from 'd3';
import React, { useEffect, useState } from 'react';

 const TypeBarChart = ({formObject}) => {
    const [filteredData, setFilteredData] = useState([]); 
 
    const filterData = (form) => {
        const valueObj =  {provisioning: 0, cultural: 0, regulating: 0, supporting: 0}
        form.forEach(service => {
            const type = service.serviceType; 
            const value = parseFloat(service.value);
            valueObj[type] += value; 
        })
        const updatedData = [
            {name: "provisioning", value: valueObj.provisioning},
            {name: "cultural", value: valueObj.cultural},
            {name: "regulating", value: valueObj.regulating},
            {name: "supporting", value: valueObj.supporting}
        ]
        setFilteredData(updatedData); 
        console.log(updatedData)
    }

    // change current data
    useEffect(() => {
        filterData(formObject);
    }, [formObject])

    // width and height init
    const width = 500; 
    const height = width * 0.4; 
    const margin = {
        top: 10,
        right: 10,
        bottom: 50,
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

const values = filteredData.map(d => d.value);
const maxValue = Math.max(...values);
const minValue = Math.min(0, ...values);
const yScale = scaleLinear()
    .domain([minValue, maxValue])
    .range([tableHeight, 0])
    .nice();

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top + 20})`}>
            {filteredData.map(d => (
                <g key={d.name}>
                    <rect
                        className={`bar ${d.name}-bar`}
                        x={xScale(d.name)}
                        y={d.value >= 0 ? yScale(d.value) : yScale(0)}
                        width={xScale.bandwidth()}
                        height={Math.abs(yScale(d.value) - yScale(0))}
                    />
                    <text
                    x={xScale(d.name) + xScale.bandwidth() / 2}
                    y={d.value >= 0 ? yScale(d.value) - labelOffsetY : yScale(d.value) + labelOffsetY}
                    textAnchor="middle"
                    dy="0.35em"
                    fontSize="12px"
                    fill="black"
                >
                    {d.name}
                </text>
                </g>
                ))}
                 <g className="y-axis">
                    {filteredData.map((d) => (
                        <g key={d.name} transform={`translate(0, ${yScale(d.value)})`}>
                            <text
                                x={-labelOffsetY}
                                dy="0.35em"
                                fontSize="12px"
                                fill="black"
                                textAnchor="end"
                            >
                                {d.value}
                            </text>
                        </g>
                    ))}
                </g>
            </g>
        </svg>
    );
}

export default TypeBarChart;
