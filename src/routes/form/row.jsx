import React, { useState } from "react";

const Row = (props) => {
    const [title, setTitle] = useState(props.title)
    const tableName = props.tableName
    const list = props.list
    const updateList = props.updateList
    
    const newRowBefore = (e) => {
      e.preventDefault()
      console.log(list)
      console.log(title)
    }

    const handleTitleChange = (e) => {
      const titleIndex = list.indexOf(title)
      let newTitle = e.target.value
      newTitle = newTitle.replace(/\W/g, ' ').toLowerCase(); 
      setTitle(newTitle)

      let newList = list
      newList[titleIndex] = newTitle
      console.log(newList)
      updateList(newList)
    }
    
    return <tr>
  <th>
    <textarea defaultValue={title} onChange={(e) => { handleTitleChange(e) }}></textarea>
  </th>
  <td className="minus-minus">
    <input type='radio' value={-1} data-name={title} data-table={tableName}/>
  </td>
  <td className="minus">
    <input type='radio' value={-0.5} data-name={title} data-table={tableName}/>
  </td>
  <td className="zero">
    <input type='radio' value={0} data-name={title} data-table={tableName}/>
  </td>
  <td className="plus">
    <input type='radio' value={0.5} data-name={title} data-table={tableName}/>
  </td>
  <td className="plus-plus">
    <input type='radio' value={1} data-name={title} data-table={tableName}/> 
    <div>
      <button className="new-row" onClick={(e) => { newRowBefore(e) }}>+</button>
      <button className="delete-row">-</button>
    </div>
  </td>
  </tr>
}

export default Row; 