import React from 'react'
import { Modal, Button } from "react-bootstrap";

function Modals({ show, handleClose,handleChangeModal, modalBodyPart , handleChange, modalHeading, modalCloseBtn, modalSubmitBtn, modalChangeHeading, modalFooter }) {
    return (
        <>
            <Modal className='form loginmodal' show={show} onHide={handleClose} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className='px-4' closeButton>
                    <Modal.Title className='fs-5'>{modalHeading}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-4'>
                    <form>
                        {modalBodyPart}
                    </form>
                </Modal.Body>
                <Modal.Footer className={`px-4 justify-content-between ${modalFooter ? 'd-none': 'd-flex'}`}>
                    <div class="fs-16">{modalChangeHeading}</div>
                    <Button className='fs-16 text-theme2 text-decoration-none border-0 bg-transparent p-0 m-0 h-auto ' type="button" onClick={handleChangeModal}>{modalCloseBtn}</Button>
                    {/* <Button variant="primary" onClick={handleChange} >{modalSubmitBtn}</Button> */}
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Modals