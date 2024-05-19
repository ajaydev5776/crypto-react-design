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
        <Modal.Dialog className='form loginmodal'>
            <Modal.Header className='px-4'>
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


export default LoginForm;