import React, { useDebugValue, useEffect, useState } from "react";
import Row from "./row";

const Table = ({list, tableName, updateList}) => {

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
           {list.map((item) => (
     <Row
       key={item}
       title={item}
       tableName={tableName}
       list={list}
       updateList={updateList} 
     />
   ))}
    </tbody>
   </table>
}

export default Table; 