import React  from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const FreezeAccount = () => {
    return (
        <>
        <div className="modal show loginpage freeze" z style={{ display: 'block', position: 'initial' }}>
                <Modal.Dialog className='form loginmodal' size="lg">
                    <Modal.Header className='px-4'>
                        <Modal.Title className='fs-4 text-center w-100'>Oops!! Your Global Web Crypto Account is <span className='fw-bold border-bottom'>Freeze</span> </Modal.Title>
                    </Modal.Header>

                    <Modal.Body className='px-4'>
                    <div className="row row-gap-3">
                        <div className="col-12">
                            <p>According to our records, your account has been frozen. This means that you haven't completed some essential steps required by our security protocols.</p>
                            <p>First, activate your account. Click on <Link to="/active-account" className='text-uppercase fw-medium  btn-theme2 themebtn text-theme2 fw-bold'>Contact To Support</Link> and follow the provided instructions.</p>
                            <p>If you need any assistance, feel free to contact our customer support team. We're here to help you. <strong>Thank You!</strong> </p>
                        </div>
                        <div className="col-12 text-center">
                            <Link type='button' to='/active-account' className='themebtn btn-theme1 btn h-auto px-5 py-3'>Click here</Link>
                        </div>
                    </div>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        </>
    )
}

export default FreezeAccount