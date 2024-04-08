import React from 'react'
import ModalForm from '../Modals/Modals';
import Formgroup from '../Forms/Otpform';

function Otp({ show, handleClose, handleLoginModalOpen, handleSecondModalOpen }) {
    return (
        <ModalForm show={show} onHide={handleClose} backdrop="static" keyboard={false} handleChange={handleSecondModalOpen}
        handleChangeModal={handleSecondModalOpen} handleClose={handleClose}
        modalHeading="OTP" modalCloseBtn="Close" modalSubmitBtn="Submit" modalFooter={true}
        centered 
        modalBodyPart={<Formgroup/>}
        />
    );
}

export default Otp