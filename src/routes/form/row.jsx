import React from "react";

const Row = (props) => {
    const title = props.title
    const tableName = props.tableName
    let newTitle = title.replace(/\W/g, '-').toLowerCase(); 
    
    return <tr>
  <th>
    <textarea defaultValue={title}></textarea>
  </th>
  <td className="minus-minus">
    <input type='radio' value={-1} data-name={newTitle} data-table={tableName}/>
  </td>
  <td className="minus">
    <input type='radio' value={-0.5} data-name={newTitle} data-table={tableName}/>
  </td>
  <td className="zero">
    <input type='radio' value={0} data-name={newTitle} data-table={tableName}/>
  </td>
  <td className="plus">
    <input type='radio' value={0.5} data-name={newTitle} data-table={tableName}/>
  </td>
  <td className="plus-plus">
    <input type='radio' value={1} data-name={newTitle} data-table={tableName}/> 
    <div>
      <button className="new-row">+</button>
      <button className="delete-row">-</button>
    </div>
  </td>
  </tr>
}

export default Row; 