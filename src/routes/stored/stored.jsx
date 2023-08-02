import React, { useEffect, useState } from "react";
import { getAllTimestamps, getTemplateList } from "../../utils/api";

const Stored = () => {
    const [timestamps, setTimestamps] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllTimestamps();
                console.log(result); 
                setTimestamps(result); 
            } catch (error) {
                console.error('Error fetching data:', error);
              } finally {
                setIsLoading(false); 
              }
            };
            fetchData()
          }, []);

    const renderButton = (timestamp) => {
        const unix = parseInt(timestamp); 
        const readableDate = new Date(unix).toISOString().substring(0,10); 
        return <button>{readableDate}</button>
    }

    return <div>
        <h1>Buttons for Stored data</h1>
        {timestamps.map(stamp => {
            return renderButton(stamp); 
        })}
    </div>   
}

export default Stored; 