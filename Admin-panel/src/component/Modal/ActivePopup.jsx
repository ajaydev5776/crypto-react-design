import React, { useState } from 'react';
import PopupModal from './PopupModal';

const ActivePopup = ({ show, handleClose, modalMessageDiscription="Role Users will be user account active. Do you confirm that?"}) => {
    return (
        <>
        <PopupModal  
            show={show}
            handleClose={handleClose}
            modalIcon={<i className="fas fa-exclamation-circle fs-80 text-success"></i>}
            modalMessage={`${modalMessageDiscription}`}/>
        </>
    )
}

export default ActivePopup;
