import React, { useState } from "react";

const Row = (props) => {
    const tableName = props.tableName
    const list = props.list
    const updateList = props.updateList
        const [title, setTitle] = useState(props.title)
    
    const newRowBefore = (e) => {
      e.preventDefault();
      let newList = list; 
      const indexOfItem = newList.indexOf(title)
      const start = newList.slice(0,indexOfItem);
      const end = newList.slice(indexOfItem);
      newList = [...start, "", ...end];
      updateList(newList); 
      console.log(newList);
    }

    const removeRow = (e) => {
      e.preventDefault();
      let newList = list; 
      const indexOfItem = newList.indexOf(title)
      const start = newList.slice(0,indexOfItem);
      const end = newList.slice(indexOfItem + 1);
      newList = [...start, ...end];
      updateList(newList); 
      console.log(newList);
    }; 

    const handleTitleChange = (e) => {
      const titleIndex = list.indexOf(title)
      let newTitle = e.target.value
      newTitle = newTitle.replace(/\W/g, ' ').toLowerCase(); 
      setTitle(newTitle)

      let newList = list
      newList[titleIndex] = newTitle
      updateList(newList)
    }
    
    return <tr>
  <th>
    <textarea defaultValue={title} onChange={(e) => { handleTitleChange(e) }}></textarea>
  </th>
  <td className="minus-minus">
    <input type='radio' value={-1} name={title} data-name={title} data-table={tableName}/>
  </td>
  <td className="minus">
    <input type='radio' value={-0.5} name={title} data-name={title} data-table={tableName}/>
  </td>
  <td className="zero">
    <input type='radio' value={0} name={title} data-name={title} data-table={tableName}/>
  </td>
  <td className="plus">
    <input type='radio' value={0.5} name={title} data-name={title} data-table={tableName}/>
  </td>
  <td className="plus-plus">
    <input type='radio' value={1} name={title} data-name={title} data-table={tableName}/> 
    <div>
      <button className="new-row" onClick={(e) => { newRowBefore(e)}}>+</button>
      <button className="delete-row" onClick={(e) => {removeRow(e)}}>-</button>
    </div>
  </td>
  </tr>
}

export default Row; 