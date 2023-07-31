import React, { useEffect, useState } from "react";
import Row from "./row";

const Table = ({list, tableName, updateList}) => {

  let table = <table id={tableName} data-table={tableName}>
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
         {list.map((item, index) => (
   <Row
     key={index}
     title={item}
     tableName={tableName}
     list={list}
     updateList={updateList} 
   />
 ))}
  </tbody>
 </table>

useEffect(() => {
  table = <table id={tableName} data-table={tableName}>
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
         {list.map((item, index) => (
   <Row
     key={index}
     title={item}
     tableName={tableName}
     list={list}
     updateList={updateList} 
   />
 ))}
  </tbody>
 </table>
}, [list])

    return {table}
}

export default Table; 