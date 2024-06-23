import React from 'react';
import ModalForm from '../Modals/Modals';
import Formgroup from '../Forms/Forms';


function Ragister({ show, handleClose, handleLoginModalOpen, handleOtpModalOpen }) {
    return (
        <ModalForm show={show} onHide={handleClose} backdrop="static" keyboard={false} 
            handleChangeModal={handleLoginModalOpen} handleClose={handleClose}
            modalHeading="Ragister Modal" modalCloseBtn="Login" modalSubmitBtn="GET OTP" modalChangeHeading="Have a Global Web Crypto Account?"
        centered
        modalBodyPart={<Formgroup username="Enter Your Mobile Number" inputtype="tel" getOtpBtn="GET OTP" handleChange={handleOtpModalOpen} inputplasholder="Enter Your Mobile Number"/>}
        />
    );
}

export default Ragister;
