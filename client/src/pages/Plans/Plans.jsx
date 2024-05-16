import React from 'react'
import InvestmentPlan from '../../component/InvestmentPlan/InvestmentPlan'
import { useEffect } from 'react';
import { GetAllPlan, GetTelegramLink } from '../../BackendApiCalls/ApiCall';
import { useState } from 'react';

const Plans = () => {
    const[planLink,setPlanLink]= useState("")
    const[insPlanconst,setInsPlanconst] =useState([])
    useEffect(()=>{
    GetTelegramLink("planLink").then(link=>{
        setPlanLink(link.link)
    })
    GetAllPlan().then(res=>{
        var insPlans = []
        res.forEach(ele => {
            var obj = {
                plantime: ele.duration,
                plan_prich: ele.amount,
                totleplantime: ele.duration.slice(0,-2),
                saveprice: ele.offerText,
                planfeature: [ele.line1, ele.line2, ele.line3, ele.line4],
                isActive: ele.isActive
            }
            insPlans.push(obj)
        });
        setInsPlanconst(insPlans)
    })
    },[])



    const investmentPlans = [
        {
            plantime: "Weekly",
            plan_prich: "$10",
            totleplantime: "Week",
            saveprice: "$50",
            planfeature: ["One account", "100K Coin", "Customer Support", "Help 24/7"],
        },
        {
            plantime: "Monthly",
            plan_prich: "$50",
            totleplantime: "month",
            saveprice: "$100",
            planfeature: ["One account", "500K Coin", "Customer Support", "Help 24/7"],
            isActive: true // Example of an active plan
        },
        {
            plantime: "Yearly",
            plan_prich: "$100",
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
                                Buy your plan
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row gy-4 pt-5">
                            {insPlanconst.map((plan, index) => (
                            <InvestmentPlan 
                                key={index} 
                                plantime={plan.plantime} 
                                plan_prich={plan.plan_prich} 
                                totleplantime={plan.totleplantime} 
                                saveprice={plan.saveprice} 
                                planfeature={plan.planfeature} 
                                buyplan={plan.buyplan}
                                buyplanlink={planLink} 
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