import React from 'react'
import InvestmentPlan from '../../component/InvestmentPlan/InvestmentPlan'
const Plans = () => {
    const investmentPlans = [
        {
            plantime: "Weekly",
            plan_Price: "$10",
            totleplantime: "Week",
            saveprice: "$50",
            planfeature: ["One account", "100K Coin", "Customer Support", "Help 24/7"],
        },
        {
            plantime: "Monthly",
            plan_Price: "$50",
            totleplantime: "month",
            saveprice: "$100",
            planfeature: ["One account", "500K Coin", "Customer Support", "Help 24/7"],
            isActive: true // Example of an active plan
        },
        {
            plantime: "Yearly",
            plan_Price: "$100",
            totleplantime: "year",
            saveprice: "$150",
            planfeature: ["Six account", "10M Coin", "Customer Support", "Help 24/7"],
        },
        // Add more plans as needed
    ];
    return (
        <>
            <div class="container-fluid planSection pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="sectionHeading">
                                Choose your plan
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row gy-4 pt-5">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plans