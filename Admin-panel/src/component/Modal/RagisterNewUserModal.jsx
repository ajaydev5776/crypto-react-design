import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-router-dom';
import FormFeild from './FormFeild';


const RagisterNewUserModal = ({ show, handleClose,  modalCloseBtn="Close", modalSubmitBtn="Copy Details" }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}  backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title className='h5'>User Login Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormFeild inputType="text" labelId="usernumber" labelName="User Phone Number" laceholder="9876543210"/>
                        <FormFeild inputType="text" labelId="userpassword" labelName="User Login Password" laceholder="Maria@1234"/>
                        <FormFeild inputType="link" labelId="userlink" labelName="User Link" laceholder="http://127.0.0.1:5501/pr&sec=789"/>
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

export default RagisterNewUserModal