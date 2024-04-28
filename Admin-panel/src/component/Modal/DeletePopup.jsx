import React, { useState } from 'react';
import PopupModal from './PopupModal';


const DeletePopup = ({ show, handleClose,onConfirm }) => {
    return (
        <>
        <PopupModal  
            show={show}
            handleClose={handleClose}
            modalIcon={<i className="far fa-times-circle fs-80 text-danger"></i>}
            modalMessage="Selecte Users will be deleted. Do you confirm that?"
            submitBtnClass="btn-danger"
            submitFunctio={onConfirm}
            />
        </>
    )
}

export default DeletePopup;
