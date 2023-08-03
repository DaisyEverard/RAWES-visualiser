import React, { useEffect, useState } from "react";
import { getAllMetadata } from "../../utils/api";

const Stored = () => {
    const [metadata, setMetadata] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllMetadata();
                console.log(result); 
                setMetadata(result); 
            } catch (error) {
                console.error('Error fetching data:', error);
              } finally {
                setIsLoading(false); 
              }
            };
            fetchData()
          }, []);

    const renderButton = (form) => {
        const unix = parseInt(form.timestamp); 
        const readableDate = new Date(unix).toISOString().substring(0,10); 
        return <button 
        data-timestamp={form.timestamp}>
            <p>{form.location}</p>
            <p>{readableDate}</p>
            <p>{form.assessor}</p>
        </button>
    }

    return <div>
        <h1>Buttons for Stored data</h1>
        {metadata.map(form => {
            return renderButton(form); 
        })}
    </div>   
}

export default Stored; 