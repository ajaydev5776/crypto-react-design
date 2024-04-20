import React, { useState } from 'react';
import PopupModal from './PopupModal';


const DeletePopup = ({ show, handleClose }) => {
    return (
        <>
        <PopupModal  
            show={show}
            handleClose={handleClose}
            modalIcon={<i className="far fa-times-circle fs-80 text-danger"></i>}
            modalMessage="Role Users will be user deleted. Do you confirm that?"
            submitBtnClass="btn-danger"/>
        </>
    )
}

export default DeletePopup;
