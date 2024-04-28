import React, { useState } from 'react';
import AdminAsideBar from '../../component/AdminAsideBar/AdminAsideBar'
import AdminHeader from '../../component/AdminHeader/AdminHeader'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import FormUser from '../../component/FormUser/FormUser';
import DeletePopup from '../../component/Modal/DeletePopup';
import FormModal from '../../component/Modal/RagisterNewUserModal';
import ResetPasswordodal from '../../component/Modal/ResetPasswordModal';
import { AddUserToDb } from '../../AdminFunction/ApiCalls';

const AdminNewUserPage = () => {  
    // Toggle Class In Aside Bar
    const [isAsidebarActive, setIsAsidebarActive] = useState(false);
    const toggleAsidebar = () => {
        setIsAsidebarActive(!isAsidebarActive);
    };

    
    // Fields for the "Register New User" tab
    const registerUserFields = [
      { type: 'text', placeholder: 'Enter Your name', label: 'Full name' ,key:'userName' , value:""},
      { type: 'tel', placeholder: 'Enter phone number', label: 'Phone Number',key:'phoneNo' , value:0 },
      { type: 'password', placeholder: 'Create password', label: 'Create Password',key:'password' , value:'' },
      { 
        type: 'password',
        placeholder: 'Confirm password',
        label: 'Confirm Password',
        description: [
          'Minimum 8 characters long - the more, the better',
          'At least one lowercase character',
          'At least one uppercase character',
          'At least one number, symbol, or whitespace character',
        ],
        descriptionTitle: 'Password requirements:',
        key:'cPassword' , value:''
      }
    ];

    // Fields for the "Change User Password" tab
    const changePasswordFields = [
      { type: 'tel', placeholder: 'Enter phone number', label: 'Phone Number',key:'phoneNo' , value:0 },
      { type: 'password', placeholder: 'Enter new password', label: 'New password',key:'password' , value:"" },
      { 
        type: 'password',
        placeholder: 'Confirm password',
        label: 'Confirm Password',
        description: [
          'Minimum 8 characters long - the more, the better',
          'At least one lowercase character',
          'At least one uppercase character',
          'At least one number, symbol, or whitespace character',
        ],
        descriptionTitle: 'Password requirements:',
        key:'cPassword' ,
        value:""
      }
    ];

    // Fields for the "Delete User Account" tab
    const deleteUserFields = [
      { type: 'tel', placeholder: 'Enter user number', label: 'Enter User Number', key:"phone" ,value:0},
    ];

    // Modals
    const [showFormModal, setShowFormModal] = useState(false);
    const [showResetPasswordodal, setShowResetPasswordodal] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    const handleClose = () => {
      setShowFormModal(false);
      setShowResetPasswordodal(false);
      setShowDeletePopup(false);
    };
    
    //function for register new user
  const handleShowRegisterFormModal = (data) => {
    console.log("data From handleShowResetPasswordodal form", data) 
    var userPayload = {
      userName: data[0].value,
      phoneNo: data[1].value,
      password: data[2].value
    }
    AddUserToDb(userPayload).then(res => {
      alert(JSON.stringify(res))
    }).catch(err =>{
      alert("errr" + err)
    })
    setShowFormModal(true)
  };


  const handleShowResetPasswordodal = (data) =>{
    console.log("data From handleShowResetPasswordodal form", data) 
    var userPayload = {
      userName: data[0].value,
      phoneNo: data[1].value,
      password: data[2].value
    }
       console.log("Data For payload", userPayload)  
    setShowResetPasswordodal(true)} ;
  const handleShowDeletePopup = () => setShowDeletePopup(true);

  

  return (
    <>
      <div className="container-fluid vh-100 overflow-hidden">
          <div className="row h-100 flex-nowrap">
                <AdminAsideBar isActive={isAsidebarActive}/>
              <div className="col h-100 rightside">  
                  <div className="row h-100 flex-column flex-nowrap">
                      <AdminHeader onToggle={toggleAsidebar}/>
                      <div className="col-12 h-100 flex-fill overflow-y-auto px-0">
                          <div className="innerbody_part h-100">
                              <div className="card h100 border-0 bg-transparent shadow-0">
                                  <div className="card-body h-100">
                                    <main id="content" role="main" className="main">
                                        <div className="content container-fluid profile-section">
                                          <div className="page-header">
                                              <div className="row align-items-center mb-3">
                                                <div className="col-sm">
                                                    <h3 className="page-header-title">New user profile</h3>
                                                </div>
                                              </div>
                                          </div>
                                          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                              <Row>
                                                <Col className='col-xxl-3 col-xl-4 col-12'>
                                                <div className="navbar-expand-lg navbar-vertical mb-3 mb-lg-5 bg-white p-0">
                                                    <Nav  variant="pills" className="nav navtabs flex-xl-column flex-row justify-content-xl-start justify-content-between nav-pills py-3">
                                                      <Nav.Item><Nav.Link eventKey="first"><i className="far fa-user"></i> Ragister New User</Nav.Link></Nav.Item>
                                                      <Nav.Item><Nav.Link eventKey="second"><i className="fas fa-key"></i> Change User Password</Nav.Link></Nav.Item>
                                                      <Nav.Item><Nav.Link eventKey="thred"><i className="fas fa-trash"></i> Delete User Account</Nav.Link></Nav.Item>
                                                    </Nav>
                                                </div>
                                                </Col>
                                                <Col className="col-xxl-9 col-xl-8 col-12">
                                                  <Tab.Content>
                                                    <Tab.Pane eventKey="first">
                                                        <FormUser tabHeading="Ragister New User" btnColorClass="btn-theme2" fields={registerUserFields} onClickOpenModal={handleShowRegisterFormModal} />
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="second">
                                                        <FormUser tabHeading="Change User Password" btnColorClass="btn-theme1" formBtnName="Reset Password" onClickOpenModal={handleShowResetPasswordodal} fields={changePasswordFields}  />
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="thred">
                                                        <FormUser tabHeading="Delete User Account" btnColorClass="btn-danger" formBtnName="Delete Acoount" onClickOpenModal={handleShowDeletePopup} fields={deleteUserFields} />
                                                    </Tab.Pane>
                                                  </Tab.Content>
                                                </Col>
                                              </Row>
                                            </Tab.Container>
                                        </div>
                                    </main>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {showFormModal && ( <FormModal show={showFormModal} handleClose={handleClose} />)}
      {showResetPasswordodal && ( <ResetPasswordodal show={showResetPasswordodal} handleClose={handleClose} />)}
      {showDeletePopup && ( <DeletePopup show={showDeletePopup} handleClose={handleClose} />)}
    </>
  )
}

export default AdminNewUserPage