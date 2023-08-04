import React, { useState } from "react";
import {deleteAllForms} from "../../utils/api.js"; 

const ConfirmDeleteModal = ({show, handleClose, setMetadata}) => {

    return <div style={{display: show}} id="confirm-delete-modal" className="flex-col">
        <h1>DELETE ALL DATA?</h1>
        <p>delete all historic forms</p>
        <p>This action is irreversible</p>
        
        <div className="flex-row bttn-row">
            <button onClick={handleClose}>
                Cancel
            </button>
            <button className="delete-bttn" onClick={() => {
                // send delete to api
                deleteAllForms(); 
                setMetadata([]); 
                handleClose(); 
            }}>Delete</button>
        </div>
    </div>
}

export default ConfirmDeleteModal; 