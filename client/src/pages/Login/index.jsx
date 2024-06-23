import React, {useContext,useEffect,useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Formgroup from '../../component/Forms/Forms';
// import { useSetState } from 'react-use';
// import Logo from '../../assets/img/logo copy.svg';
// import { useNavigate } from "react-router-dom";
// import { ValidateId } from '../../BackendApiCalls/ApiCall.jsx';

// import { AuthContext } from '../../context/Auth.context.js';


const LoginForm = () => {

 
  
  return (
    <>
    <div className="modal show loginpage" style={{ display: 'block', position: 'initial' }}>
        <Modal.Dialog className='form loginmodal modal-lg'>
            <Modal.Header className='px-4'>
                <Modal.Title className='fs-5'>Log in to your Global Web Crypto Account</Modal.Title>
            </Modal.Header>

            <Modal.Body className='px-4'>
                <div className="text-center p-3 rounded-3 bg-success bg-opacity-50 mb-3 shadow-md">
                Welcome to Global Crypto. You do not have an account here. Please register first to login.
                <a href="" className='text-theme2 text-decoration-none ms-1 fw-semibold'>Ragister</a>
                </div>
            <form>
                <Formgroup/>
            </form>
            </Modal.Body>
        </Modal.Dialog>
    </div>
</>

  )
}


export default LoginForm;