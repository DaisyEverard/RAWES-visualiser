import React, { useEffect, useState } from "react";
import Chart from "../../../D3Graphs/chart";
import { getAllMetadata, getFormByTimestamp, deleteFormByTimestamp } from "../../utils/api";
import ConfirmDeleteModal from "./confirmDeleteModal";
import './stored.css';

const Stored = () => {
    const [metadata, setMetadata] = useState([]); 
    const [showModal, setShowModal] = useState('none'); 
    const [currentForm, setCurrentForm] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllMetadata();
                setMetadata(result); 
            } catch (error) {
                console.error('Error fetching data:', error);
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

    const handleFormClick = async (e) => {
        e.preventDefault(); 
        const timestamp = e.currentTarget.getAttribute("data-timestamp");
        const data = await getFormByTimestamp(timestamp);
        setCurrentForm(data); 
    } 

    const getFormButton = (form) => {
        const unix = parseInt(form.timestamp); 
        const readableDate = new Date(unix).toISOString().substring(0,10); 
        return <button 
        data-timestamp={form.timestamp}
        key={form.timestamp}
        onClick={(e) => {handleFormClick(e)}}>
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
        <div>
            <Chart currentForm={currentForm}></Chart>
        </div>
    </div>   
}

export default Stored; 