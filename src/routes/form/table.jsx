import React from "react";
import Row from "./row";

const Table = (props) => {
    const list = props.list
    const table = props.tableName

  const setupRows = (list, table) => {
      return list.map((item, index) => (
      <Row key={index} title={item} tableName={table} />
    ));
  };

    return <table id={table} data-table={table}>
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
            {setupRows(list, table)}
     </tbody>
    </table>
}

export default Table; 