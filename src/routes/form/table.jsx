import React, { useEffect } from "react";
import Row from "./row";

const Table = (props) => {
    const list = props.list
    const tableName = props.tableName
    const updateList = props.updateList

  const setupRows = (list) => {
      return list.map((item, index) => (
      <Row key={index} title={item} tableName={tableName} list={list} updateList={updateList} />
    ));
  };

  useEffect(() => {setupRows(list);}, [list]); 

    return <table id={tableName} data-table={tableName}>
     <thead>
       <tr>
        <th>Service</th>
        <th>--</th>
        <th>-</th>
        <th>0</th>
        <th>+</th>
        <th>++</th>
      </tr>
     </thead>
     <tbody>
            {setupRows(list)}
     </tbody>
    </table>
}

export default Table; 