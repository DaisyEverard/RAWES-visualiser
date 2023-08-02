import React, { useDebugValue, useEffect, useState } from "react";
import {getTemplateList} from "../../utils/api";
import Row from "./row";

const Table = ({serviceType}) => {
  const [list, updateList] = useState([""]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newList = await getTemplateList(serviceType);
        updateList(newList); 
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); 
      }
    };
    fetchData()
  }, []);


  if (isLoading) return <div>Loading...</div>; 

    return <table id={serviceType} data-table={serviceType}>
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
       tableName={serviceType}
       list={list}
       updateList={updateList} 
     />
   ))}
    </tbody>
   </table>
}

export default Table; 