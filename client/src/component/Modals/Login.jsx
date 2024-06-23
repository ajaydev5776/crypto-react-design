import React from 'react';
import ModalForm from '../Modals/Modals';
import Formgroup from '../Forms/Forms';

function Login({ show, handleClose, handleSecondModalOpen, handleOtpModalOpen }) {
    return (
        <ModalForm show={show} onHide={handleClose} backdrop="static" keyboard={false}
        handleChangeModal={handleSecondModalOpen} handleClose={handleClose} 
        modalHeading="Log in to your Globl Web Crypto Account" modalCloseBtn="Ragister" modalSubmitBtn="Get OTP" modalChangeHeading="Don’t have a Global Web Crypto Account?"
        centered
        modalBodyPart={<Formgroup username="Enter your mobile number" inputtype="tel" getOtpBtn="GET OTP" handleChange={handleOtpModalOpen} inputplasholder="PFW ragister mobile number"/>}
        />
    );
}

export default Login;
