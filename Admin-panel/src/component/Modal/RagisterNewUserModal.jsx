import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-router-dom';
import FormFeild from './FormFeild';


const RagisterNewUserModal = ({ show, handleClose, userDetails, modalCloseBtn="Close", modalSubmitBtn="Copy Details" }) => {
    function copyDetails(){
        var jsonStr = JSON.stringify(userDetails)
        navigator.clipboard.writeText(jsonStr)
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}  backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title className='h5'>User Login Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormFeild inputType="text"  labelId="usernumber" labelName="User Phone Number" laceholder={userDetails.phoneNo}/>
                        <FormFeild inputType="text" labelId="userpassword" labelName="User Login Password" laceholder={userDetails.password}/>
                        <FormFeild inputType="link" labelId="userlink" labelName="User Link" laceholder={userDetails.login_link}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                        <button type="button" className="btn btn-theme1" onClick={handleClose}>{modalCloseBtn}</button>
                        <button type="button" className="btn btn-theme2" onClick={copyDetails}>{modalSubmitBtn}</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default RagisterNewUserModal