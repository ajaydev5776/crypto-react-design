import React, { useState } from 'react';
import PopupModal from './PopupModal';

const WarningPopup = ({ show, handleClose,onConfirm }) => {
    return (
        <>
        <PopupModal  
            show={show}
            handleClose={handleClose}
            modalIcon={<i className="fas fa-ban fs-80 text-warning"></i>}
            modalMessage="Role Users will be user acoount freeze. Do you confirm that?"
            submitBtnClass="btn-warning"
            submitFunctio={onConfirm}
            />
        </>
    )
}

export default WarningPopup;
