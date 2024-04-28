import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const PopupModal = ({ show, handleClose, modalIcon,submitFunctio, submitBtnClass="btn-theme2", modalheading="Done", modalMessage, modalCloseBtn="Close", modalSubmitBtn="Confirm" }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}  backdrop="static" keyboard={false} centered>
                <Modal.Body className='py-4'>
                    <div className="row row-gap-4">
                        <div className="col-auto mx-auto"><div className="">{modalIcon}</div></div>
                        <div className="col-12 text-center"><h3 className="m-0">{modalheading}</h3></div>
                        <p className="fs-6 text-center m-0">{modalMessage}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                        <button type="button" className="btn btn-theme1" onClick={handleClose}>{modalCloseBtn}</button>
                        <button type="button" onClick={submitFunctio} className={`btn ${submitBtnClass}`}>{modalSubmitBtn}</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PopupModal;
