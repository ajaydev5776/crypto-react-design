import React, { useEffect, useState } from 'react';
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
import { GetUserDetailsByPhoneNo ,GetCoinCurrentValue,AddCoinToUserAccount, UpdateTelegramLink, GetTelegramLink, UpdateUserPlanAmount, UpdatePlanDetails} from '../../AdminFunction/ApiCalls';

const AdminUserWalletPage = () => {
    // Toggle Class In Aside Bar
    var telelink = {
      "planLink":"",
      "supportLink":""
    } 
      const [isAsidebarActive, setIsAsidebarActive] = useState(false);
      const [links,setLinks] = useState(telelink)
      const [userDetails, setUserDetails] = useState({})
      const [coinDetails, setCoinDetials] = useState({})
      const [modalData,setModalData] = useState({})
      const [updatePage,setUpdatepage] = useState(false)

      useEffect(()=>{
         GetTelegramLink("planLink").then(pres=>{
          GetTelegramLink("supportLink").then(sRes=>{
            setLinks({"planLink":pres.link, "supportLink":sRes.link})
          })
         })
      },[updatePage])
      const toggleAsidebar = () => {
          setIsAsidebarActive(!isAsidebarActive);
      };
  
      // Fields for the "Register New User" tab
      const registerUserFields = [
        { type: 'tel', placeholder: 'Enter phone number', label: 'Phone Number',key:"phoneNo", value:0 },
        { type: 'tel', placeholder: 'Total amount', label: 'Total Amount', key:"amount" , value:0},
        {type:'select', value:'', label: "Select Coin",
         options: [{value:"BTC",label:"BTC"}, {value:"USDT",label:"USDT"}],
         key:"selectedCoin"
      }
      ];
  
      const updatePlanField = [
        {type:'select' , placeholder:"Select Plan", label:"Select Plan",
        options: [{value:"plan1",label:"Plan 1"}, {value:"plan2",label:"Plan 2"}, {value:"plan3",label:"Plan 3"}],
        key:"planNo" },
        {type:'select' , placeholder:"Select Duration", label:"Select Duration",
        options: [{value:"Weekly",label:"Weekly"}, {value:"Monthly",label:"Monthly"}, {value:"Yearly",label:"Yearly"}],
        key:"duration" },
        {type:"text", placeholder:"Enter Amount with sign (Ex. $100 , 100 INR)", label:"Amount", key:"amount",value:""},
        {type:"text",placeholder:"Enter Offer text Ex (save $100)", label:"Enter Offer", key:"offer",value:""},
        {type:"text", placeholder:"offer Line 1", label:"Line 1", key:"Line1", value:""},
        {type:"text", placeholder:"offer Line 2", label:"Line 2", key:"Line2", value:""},
        {type:"text", placeholder:"offer Line 3", label:"Line 3", key:"Line3", value:""},
        {type:"text", placeholder:"offer Line 4", label:"Line 4", key:"Line4", value:""}
      ]
  
      // Fields for the "Change User Password" tab
      const changePasswordFields = [
        { type: 'link', placeholder: 'Enter telegram link', label: 'Add Telegram Link', key:"supportLink" ,value:0 },
      ];
  
      // Fields for the "Delete User Account" tab
      const planTeleFields = [
        { type: 'link', placeholder: 'Enter telegram link', label: 'Add Telegram Link', key:"planLink" ,value:0 },
      ];

      // Fields for the "Delete User Account" tab
      const upgratePlan = [
        {type:'select' , placeholder:"Select Plan", label:"Select Plan",
        options: [{value:"plan1",label:"Plan 1"}, {value:"plan2",label:"Plan 2"}, {value:"plan3",label:"Plan 3"}],
        key:"planNo" },
        { type: 'tel', placeholder: 'Enter phone number', label: 'Phone Number', key:"phoneNo", value:"" },
        { type: 'number', placeholder: 'Upgrate total amount', label: 'Upgrate Plan Amount', key :"amount", value:0 }
      ];
  
      // Modals
      const [showAddWallet, setShowAddWallet] = useState(false);
      const [showSupportTelegram, setShowSupportTelegram] = useState(false);
      const [showPlanTelegram, setShowPlanTelegram] = useState(false);
      const [showUpgratePlan, setShowUpgratePlan] = useState(false);
  
      const handleClose = () => {
        setUpdatepage(!updatePage)
        setShowAddWallet(false);
        setShowSupportTelegram(false);
        setShowPlanTelegram(false);
        setShowUpgratePlan(false);
      };

      

      const handleWalletModelClose = () =>{
        setCoinDetials({})
        setUserDetails({})
        setShowAddWallet(false);
      }
      
    const handleShowAddWallet = (data) =>{
      // console.log("resssssssssssssss",data)
      // setShowAddWallet(true)
      // console.log(userDetails)
      // console.log(coinDetails)
      if(!userDetails.userId || !coinDetails.CoinName){
        alert("Please validate details")
        return
      }

      var trasDetails = {
        userId: userDetails.userId,
        userName : userDetails.userName,
        coinName : coinDetails.CoinName,
        investedAmount: coinDetails.Amount,
        coinAvailable: coinDetails.CoinInAmount,
        buyAtValue:coinDetails.CoinValue,
        phoneNo: userDetails.phoneNo
      }

      AddCoinToUserAccount(trasDetails).then(res=>{
        if(res==true){
          setModalData({"message": "Coin Added successfully"})
 setShowAddWallet(true)
        }
        console.log("Responce from API OF Inert Amount", res)
      }).catch(err=>{
        console.log("Error from amount api ", err)
      })
  

    };
    const handelUpdatePlan = (data) => {
      console.log("Plan details",data)

      var obj = {
        planNo: data[0].value,
        duration: data[1].value,
        amount: data[2].value,
        offerText: data[3].value,
        line1: data[4].value,
        line2: data[5].value,
        line3: data[6].value,
        line4: data[7].value,
      }
      UpdatePlanDetails(obj).then(res => {
        console.log("UpdatePlanDetails updated",res)
        alert("Plan updated Successfully")
      }).catch(err=>{
        console.log("error in call",err)
        alert("Error In updation", err)
      })
       
    }
    const handleShowSupportTelegram = (data) =>{
      var obj = {
        key: data[0].key,
        link:data[0].value
      }
      UpdateTelegramLink(obj).then(res=>{
        console.log("Link updated",res)
      }).catch(err=>{
        console.log("error in call",err)
      })
      setShowSupportTelegram(true);
    } 
    const handleShowPlanTelegram = (data) => {
      var obj = {
        key: data[0].key,
        link:data[0].value
      }
      UpdateTelegramLink(obj).then(res=>{
        console.log("Link updated",res)
      }).catch(err=>{
        console.log("error in call",err)
      })
      setShowPlanTelegram(true);
    }
    const handleShowUpgratePlan = (data) =>{
      console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKK",data)
       var obj = {
        phoneNo : data[1].value,
        amount :Number(data[2].value),
        planNo : data[0].value
       }
       UpdateUserPlanAmount(obj).then(res=>{
        if (res===true){
          setShowUpgratePlan(true);
        }else{
          alert("error "+ res)
        }
       })
      
    }

    //validation functions

    const ValidateWalletForm = (data)=>{
      console.log("recived data",data)
      var PhoneNo = data[0].value
      var CoinName = data[2].value
      if(!PhoneNo || PhoneNo.length < 10 || PhoneNo.length > 12 ){
        alert("Please enter a valid phone no")
        return
      }
      GetUserDetailsByPhoneNo(PhoneNo).then(res =>{
        setUserDetails(res)
        console.log("data by Phone no",res)
        // if(data[1].value<=0){
        //   alert("Amount Should be grater then 0")
        //   return
        // }
        if(!CoinName){
          alert("Please Select Coin")
          return
        }
        GetCoinCurrentValue(CoinName).then(rescoinvalue => {

          var tempVa = data[1].value / rescoinvalue
          var obj = {
            CoinName : CoinName,
            CoinValue : rescoinvalue,
            Amount : data[1].value,
            CoinInAmount: parseFloat(tempVa.toFixed(6))
          }
          setCoinDetials(obj)
          console.log("value ",rescoinvalue )
        })
      }).catch(err =>{
        alert("Phone Number not registered ! please Check ")
        console.log("in catch ", err)
      })

    }
    
  
  return (
    <>
      <div className="container-fluid vh-100 overflow-hidden">
        <div className="row h-100 flex-nowrap">
          <AdminAsideBar isActive={isAsidebarActive} />
          <div className="col h-100 rightside">
            <div className="row h-100 flex-column flex-nowrap">
              <AdminHeader onToggle={toggleAsidebar} />
              <div className="col-12 h-100 flex-fill overflow-y-auto px-0">
                <div className="innerbody_part h-100">
                  <div className="card h100 border-0 bg-transparent shadow-0">
                    <div className="card-body h-100">
                      <main id="content" role="main" className="main">
                        <div className="content container-fluid profile-section">
                          <div className="page-header">
                            <div className="row align-items-center mb-3">
                              <div className="col-sm">
                                <h3 className="page-header-title">
                                  User Wallet
                                </h3>
                              </div>
                            </div>
                          </div>
                          <Tab.Container
                            id="left-tabs-example"
                            defaultActiveKey="first"
                          >
                            <Row>
                              <Col className="col-xxl-3 col-xl-4 col-12">
                                <div className="navbar-expand-lg navbar-vertical mb-3 mb-lg-5 bg-white p-0">
                                  <Nav
                                    variant="pills"
                                    className="nav navtabs flex-column walletnavpill nav-pills py-3"
                                  >
                                    <Nav.Item>
                                      <Nav.Link eventKey="first">
                                        <i className="fas fa-wallet"></i> Add
                                        User Wallet
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="second">
                                        <i className="fas fa-question-circle"></i>{" "}
                                        Support Telegram
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="thred">
                                        <i className="fab fa-telegram"></i> Plan
                                        Telegram
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="four">
                                        <i className="fas fa-upload"></i>{" "}
                                        Freeze User Plan
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="five">
                                        <i className="fas fa-upload"></i> Add
                                        Upgrate Plans
                                      </Nav.Link>
                                    </Nav.Item>
                                  </Nav>
                                </div>
                              </Col>
                              <Col className="col-xxl-9 col-xl-8 col-12">
                                <Tab.Content>
                                  <Tab.Pane eventKey="first">
                                    <FormUser
                                      tabHeading="Add Amount"
                                      btnColorClass2="btn-outline-theme2"
                                      btnColorClass="btn-theme2"
                                      fields={registerUserFields}
                                      onClickOpenModal={handleShowAddWallet}
                                      validateFunction={ValidateWalletForm}
                                    />
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="second">
                                    <FormUser
                                      tabHeading="Change Support Telegram Link"
                                      btnColorClass="btn-theme2"
                                      formBtnName="Change Link"
                                      onClickOpenModal={
                                        handleShowSupportTelegram
                                      }
                                      fields={changePasswordFields}
                                    />
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="thred">
                                    <FormUser
                                      tabHeading="Change Palns Telegram Account"
                                      btnColorClass="btn-theme2"
                                      formBtnName="Change Links"
                                      onClickOpenModal={handleShowPlanTelegram}
                                      fields={planTeleFields}
                                    />
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="four">
                                    <FormUser
                                      tabHeading="Freeze Account Upgrate Plans"
                                      btnColorClass="btn-theme2"
                                      onClickOpenModal={handleShowUpgratePlan}
                                      fields={upgratePlan}
                                    />
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="five">
                                    <FormUser
                                      tabHeading="Upgrate User Plans"
                                      btnColorClass="btn-theme2"
                                      onClickOpenModal={handelUpdatePlan}
                                      fields={updatePlanField}
                                    />
                                  </Tab.Pane>
                                </Tab.Content>
                              </Col>
                              <Col className="col-xxl-9 col-xl-8 col-12 ms-auto">
                                <Tab.Content>
                                <Tab.Pane eventKey="first">
                                { userDetails.userName &&   <div className="card overflow-hidden mt-4">
                                    <div className="card-header bg-white ">
                                    <div className="userDetails d-flex align-items-center gap-3">
                                        <h5 className='card-title my-2'> User Detail</h5>
                                        <span>   UserName : {userDetails.userName} </span>
                                    </div>
                                    </div>
                                    <div className="card-body">
                                      { coinDetails.CoinName &&  <div className="CoinPrice">
                                        <h5 className='mb-2'>Coin Price</h5> 
                                        <span> CoinName : {coinDetails.CoinName}</span><br />
                                        <span>1 {coinDetails.CoinName} : { coinDetails.CoinValue} INR, <br /> </span>
                                        <span>  {coinDetails.Amount} INR : {coinDetails.CoinInAmount} {coinDetails.CoinName} <br /> </span>
                                        </div>}
                                    </div>
                                  </div>}
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="second">
                                  { links.supportLink &&<div className="card overflow-hidden">
                                    <div className="card-header bg-white">
                                        <div className="userDetails">
                                          <h5 className='card-title my-2'> Support Link </h5>
                                      </div>
                                    </div>
                                    <div className="card-body">
                                      <span>Link  : {links.supportLink} </span>
                                    </div>
                                  </div>}
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="thred">
                                  { links.planLink &&<div className="card overflow-hidden">
                                    <div className="card-header bg-white">
                                        <div className="userDetails">
                                        <h5 className='card-title my-2'> Plan Link </h5>
                                      </div>
                                    </div>
                                      <div className="card-body">
                                        <span>   Link  : {links.planLink} </span>
                                      </div>
                                  </div>}
                                  </Tab.Pane>
                                </Tab.Content>
                              </Col>
                            </Row>
                            {/* <Row>
                            </Row> */}
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
      {showAddWallet && (
        <AddWallet
          show={showAddWallet}
          modalMessageDiscription={modalData.message}
          handleClose={handleWalletModelClose}
          submitFunctio={handleWalletModelClose}
        />
      )}
      {showSupportTelegram && (
        <SupportTelegram
          show={showSupportTelegram}
          modalMessageDiscription="Telegram link will be changed in the support. Do you confirm this?"
          handleClose={handleClose}
          submitFunctio={handleClose}
        />
      )}
      {showPlanTelegram && (
        <PlanTelegram
          show={showPlanTelegram}
          modalMessageDiscription="Telegram link will be changed in the plans. Do you confirm this?"
          handleClose={handleClose}
          submitFunctio={handleClose}
        />
      )}
      {showUpgratePlan && (
        <UpgratePlan
          show={showUpgratePlan}
          modalMessageDiscription="Role Users will be payment. Do you confirm that?"
          handleClose={handleClose}
          submitFunctio={handleClose}
        />
      )}
    </>
  );
}

export default AdminUserWalletPage