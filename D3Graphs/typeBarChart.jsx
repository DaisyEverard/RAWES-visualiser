import React, { useEffect } from 'react';
import { select, event } from 'd3-selection';
import { transition } from 'd3-transition';

// expected props: ...{ xScale, yScale,data,height, t,}
// expected data: [{ name: 'Sun', value: 100 },...]

 const typeBarChart = ({formObject}) => {
 const ref = React.createRef();

 useEffect(() => {init()}, [])
 useEffect(() => {barTransition()}, []) // update
  
 const barTransition = () => {
    const node = ref.current;
    const { yScale, height, data } = props;

    select(node)
      .selectAll('.bar')
      .data(data)
      .attr('y', d => yScale(d.value))
      .attr('height', d => height - yScale(d.value));
  }
  const init = () => {
    const {
      xScale, yScale, data, height,
    } = props;
    const node = ref.current;

    // prepare initial data from where transition starts.
    const initialData = data.map(obj => ({
      name: obj.name,
      value: 0
    }));

    // prepare the field
    const bar = select(node)
      .selectAll('.bar')
      .data(initialData);

    // add rect to svg
    bar
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.name))
      .attr('y', height)
      .attr('width', xScale.bandwidth())

    barTransition();
  }
    return (
      <g
        className="bar-group"
        ref={ref}
      />
    );
}

export default typeBarChart;
