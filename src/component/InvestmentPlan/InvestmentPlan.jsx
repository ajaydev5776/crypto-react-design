import React from 'react'

const InvestmentPlan = ({plantime, plan_prich, totleplantime, saveprice, planfeature, buyplan="Buy Plan", isActive = false}) => {
    return (
        <>
        <div class="col-12 col-lg-6 col-xl-4">
            <div class={`main-card ${isActive ?  'active' : 'hello'}`}>
                <div class="main-card_title">{plantime}</div>
                <div class="pricing">{plan_prich}<span class="small">/{totleplantime}</span></div>
                <div className='saveamount'>Save {saveprice}</div>
                <div class="border-div"></div>
                <ul class="features">
                        {planfeature.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <a href="javascript:;" class="cta_btn">{buyplan}</a>
            </div>
        </div>
        </>
    )
}

export default InvestmentPlan