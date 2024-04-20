import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-router-dom';
import FormFeild from './FormFeild';


const ResetPasswordModal = ({ show, handleClose,  modalCloseBtn="Close", modalSubmitBtn="Copy Details" }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}  backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title className='h5'>User Reset Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormFeild inputType="text" labelId="userpasswordreset" labelName="User New Password" laceholder="Maria@123456"/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                        <button type="button" className="btn btn-theme1" onClick={handleClose}>{modalCloseBtn}</button>
                        <button type="button" className="btn btn-theme2">{modalSubmitBtn}</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ResetPasswordModal