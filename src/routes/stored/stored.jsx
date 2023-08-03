import React, { useEffect, useState } from "react";
import { getAllMetadata } from "../../utils/api";
import ConfirmDeleteModal from "./confirmDeleteModal";
import './stored.css';

const Stored = () => {
    const [metadata, setMetadata] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 
    const [showModal, setShowModal] = useState('none'); 

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

    const toggleModal = () => {
        if (showModal == 'none') {
            setShowModal('flex')
        } else {
            setShowModal('none')
            setMetadata([]) 
        }
    }

    const getFormButton = (form) => {
        const unix = parseInt(form.timestamp); 
        const readableDate = new Date(unix).toISOString().substring(0,10); 
        return <button 
        data-timestamp={form.timestamp}
        key={form.timestamp}>
            <p>{form.location}</p>
            <p>{readableDate}</p>
            <p>{form.assessor}</p>
        </button>
    }

    return <div id="stored-page">
        <h1>Buttons for Stored data</h1>
        {metadata.map(form => {
            return getFormButton(form); 
        })}
        <button id="delete-stored-bttn" className="delete-bttn" onClick={toggleModal}>
            <p>DELETE</p>
            <p>ALL</p>
            <p>DATA</p>
        </button>
        <ConfirmDeleteModal show={showModal} handleClose={toggleModal}/>
    </div>   
}

export default Stored; 