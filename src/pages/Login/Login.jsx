import React ,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalForm from '../../component/Modals/Modals';
import Formgroup from '../../component/Forms/Forms';


const Login = () => {
    return (
        <>
            <div className="modal show loginpage" style={{ display: 'block', position: 'initial' }}>
                <Modal.Dialog className='form loginmodal'>
                    <Modal.Header className='px-4' closeButton>
                        <Modal.Title className='fs-5'>Log in to your PFW Account</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className='px-4'>
                    <form>
                        <Formgroup/>
                    </form>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        </>
    )
}

export default Login