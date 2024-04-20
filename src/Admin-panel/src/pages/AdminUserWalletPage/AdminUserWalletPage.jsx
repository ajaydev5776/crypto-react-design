import React, { useState } from 'react';
import AdminAsideBar from '../../component/AdminAsideBar/AdminAsideBar'
import AdminHeader from '../../component/AdminHeader/AdminHeader'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import FormUser from '../../component/FormUser/FormUser';
import PlanTelegram from '../../component/Modal/ActivePopup';
import AddWallet from '../../component/Modal/ActivePopup';
import SupportTelegram from '../../component/Modal/ActivePopup';
import UpgratePlan from '../../component/Modal/ActivePopup';

const AdminUserWalletPage = () => {
    // Toggle Class In Aside Bar
      const [isAsidebarActive, setIsAsidebarActive] = useState(false);
      const toggleAsidebar = () => {
          setIsAsidebarActive(!isAsidebarActive);
      };
  
      // Fields for the "Register New User" tab
      const registerUserFields = [
        { type: 'tel', placeholder: 'Enter phone number', label: 'Phone Number' },
        { type: 'text', placeholder: 'Total amount', label: 'Total Amount' },
      ];
  
  
      // Fields for the "Change User Password" tab
      const changePasswordFields = [
        { type: 'link', placeholder: 'Enter telegram link', label: 'Add Telegram Link' },
      ];
  
      // Fields for the "Delete User Account" tab
      const deleteUserFields = [
        { type: 'link', placeholder: 'Enter telegram link', label: 'Add Telegram Link' },
      ];

      // Fields for the "Delete User Account" tab
      const upgratePlan = [
        { type: 'tel', placeholder: 'Enter phone number', label: 'Phone Number' },
        { type: 'text', placeholder: 'Upgrate total amount', label: 'Upgrate Plan Amount' },
      ];
  
      // Modals
      const [showAddWallet, setShowAddWallet] = useState(false);
      const [showSupportTelegram, setShowSupportTelegram] = useState(false);
      const [showPlanTelegram, setShowPlanTelegram] = useState(false);
      const [showUpgratePlan, setShowUpgratePlan] = useState(false);
  
      const handleClose = () => {
        setShowAddWallet(false);
        setShowSupportTelegram(false);
        setShowPlanTelegram(false);
        setShowUpgratePlan(false);
      };
      
    const handleShowAddWallet = () => setShowAddWallet(true);
    const handleShowSupportTelegram = () => setShowSupportTelegram(true);
    const handleShowPlanTelegram = () => setShowPlanTelegram(true);
    const handleShowUpgratePlan = () => setShowUpgratePlan(true);
    
  
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
                                                  <h3 className="page-header-title">User Wallet</h3>
                                              </div>
                                            </div>
                                        </div>
                                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                            <Row>
                                              <Col className='col-xxl-3 col-xl-4 col-12'>
                                              <div className="navbar-expand-lg navbar-vertical mb-3 mb-lg-5 bg-white p-0">
                                                  <Nav  variant="pills" className="nav navtabs flex-column walletnavpill nav-pills py-3">
                                                    <Nav.Item><Nav.Link eventKey="first"><i className="fas fa-wallet"></i>  Add User Wallet</Nav.Link></Nav.Item>
                                                    <Nav.Item><Nav.Link eventKey="second"><i className="fas fa-question-circle"></i> Support Telegram</Nav.Link></Nav.Item>
                                                    <Nav.Item><Nav.Link eventKey="thred"><i className="fab fa-telegram"></i> Plan Telegram</Nav.Link></Nav.Item>
                                                    <Nav.Item><Nav.Link eventKey="four"><i className="fas fa-upload"></i>  Upgrate Plan</Nav.Link></Nav.Item>
                                                  </Nav>
                                              </div>
                                              </Col>
                                              <Col className="col-xxl-9 col-xl-8 col-12">
                                                <Tab.Content>
                                                  <Tab.Pane eventKey="first">
                                                      <FormUser tabHeading="Add Amount" btnColorClass="btn-theme2" fields={registerUserFields} onClickOpenModal={handleShowAddWallet} />
                                                  </Tab.Pane>
                                                  <Tab.Pane eventKey="second">
                                                      <FormUser tabHeading="Change Support Telegram Link" btnColorClass="btn-theme2" formBtnName="Change Link" onClickOpenModal={handleShowSupportTelegram} fields={changePasswordFields} />
                                                  </Tab.Pane>
                                                  <Tab.Pane eventKey="thred">
                                                      <FormUser tabHeading="Change Palns Telegram Account" btnColorClass="btn-theme2" formBtnName="Change Links" onClickOpenModal={handleShowPlanTelegram} fields={deleteUserFields} />
                                                  </Tab.Pane>
                                                  <Tab.Pane eventKey="four">
                                                      <FormUser tabHeading="Upgrate User Plans" btnColorClass="btn-theme2" onClickOpenModal={handleShowUpgratePlan} fields={upgratePlan} />
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
    {showAddWallet && ( <AddWallet show={showAddWallet} modalMessageDiscription="Role Users will be payment. Do you confirm that?" handleClose={handleClose} />)}
    {showSupportTelegram && ( <SupportTelegram show={showSupportTelegram} modalMessageDiscription="Telegram link will be changed in the support. Do you confirm this?" handleClose={handleClose} />)}
    {showPlanTelegram && ( <PlanTelegram show={showPlanTelegram} modalMessageDiscription="Telegram link will be changed in the plans. Do you confirm this?" handleClose={handleClose} />)}
    {showUpgratePlan && ( <UpgratePlan show={showUpgratePlan} modalMessageDiscription="Role Users will be payment. Do you confirm that?" handleClose={handleClose} />)}
  </>
  )
}

export default AdminUserWalletPage