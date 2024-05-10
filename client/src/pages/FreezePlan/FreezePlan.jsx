import React from 'react'
import Modal from 'react-bootstrap/Modal';
import InvestmentPlan from '../../component/InvestmentPlan/InvestmentPlan'
const FreezePlan = () => {
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
                                plan_Price={plan.plan_Price} 
                                totleplantime={plan.totleplantime} 
                                saveprice={plan.saveprice} 
                                planfeature={plan.planfeature} 
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