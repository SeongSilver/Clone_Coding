import React, {useState, useEffect, useRef} from 'react';

const useConfirms = (message = "", onConfirm, onCancel) => {
    if(!onConfirm || typeof onConfirm !== "function"){
        return;
    }
    if(!onCancel || typeof onCancel !== "function"){
        return;
    }
    const confirmAction = () =>{
        if(window.confirm(message)){
            onConfirm();
        }else{
            onCancel();
        }
    }
    return confirmAction;
}

const useConfirm = () => {
    const deleteWorld = () => console.log("Deleting the world");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirms("Are you sure?", deleteWorld, abort);
    return(
        <div className="useConfirm">
            <h1>유스컨펌임</h1>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    )
}

export default useConfirm;