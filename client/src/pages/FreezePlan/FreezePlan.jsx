import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import InvestmentPlan from '../../component/InvestmentPlan/InvestmentPlan'
import {GetTelegramLink } from '../../BackendApiCalls/ApiCall';
const FreezePlan = () => {
    const [amountToShow, setAmountToShow] = useState(0)
    const[planLink,setPlanLink]= useState("")
    useEffect(()=>{
        var loginStaus = JSON.parse(localStorage.getItem('isLoggedIn'))
        // console.log("oginStausoginStausoginStausoginStausoginStaus",loginStaus)
         setAmountToShow(loginStaus.amountToShow)
         GetTelegramLink("planLink").then(link=>{
           // console.log("Linkkkkkkkkkkkk",planLink)
             setPlanLink(link.link)
         }).catch(err=>{
            //console.log("Error in plan link",err)
         })
    },[])

    const investmentPlans = [
        {
            plantime: "Monthly",
            plan_Price: "$50",
            totleplantime: "month",
            saveprice: "$100",
            planfeature: ["One account", "500K Coin", "Customer Support", "Help 24/7"],
            isActive: true // Example of an active plan
        },
    ];
    return (
        <>
        <div className="modal show loginpage freeze" style={{ display: 'block', position: 'initial' }}>
                <Modal.Dialog className='form loginmodal'>
                    <Modal.Header className='px-4'>
                        <Modal.Title className='fs-4 text-center w-100'>Please buy this plan and activate your account. </Modal.Title>
                    </Modal.Header>

                    <Modal.Body className='px-4'>
                    <div class="row  justify-content-center plancard">
                            {investmentPlans.map((plan, index) => (
                            <InvestmentPlan 
                                key={index} 
                                plantime={plan.plantime} 
                                plan_prich={amountToShow} 
                                totleplantime={plan.totleplantime} 
                                saveprice={plan.saveprice} 
                                planfeature={plan.planfeature} 
                                buyplanlink={planLink}
                                buyplan={plan.buyplan} 
                                isActive={plan.isActive} 
                            />
                        ))}
                            </div>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        </>
    )
}

export default FreezePlan