import React, { useState } from 'react';
import PopupModal from './PopupModal';

const ActivePopup = ({ show, handleClose,submitFunctio, modalMessageDiscription="All Selected User will be Mark as Active. Do you confirm that?"}) => {
    return (
        <>
        <PopupModal  
            show={show}
            handleClose={handleClose}
            modalIcon={<i className="fas fa-exclamation-circle fs-80 text-success"></i>}
            submitFunctio={submitFunctio}
            modalMessage={`${modalMessageDiscription}`}
            />
        </>
    )
}

export default ActivePopup;
