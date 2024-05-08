import React from 'react'
import QuestionMark from '../../assets/img/icon/question-mark.svg'
import ArrowDownMark from '../../assets/img/icon/question-mark.svg'

function ManageBalanceCard({ title, amount, QuestionMarkAlt="Sign", isHighlightTitleImg, isHighlightAmountImg, gainLossAmount, isHighlightAmountText }) {
    return (
        <>
        <div className="carditem miditems">
            <div className="leftside px-sm-3 d-flex flex-column gap-sm-2 gap-1">
                <div className="criptoname">{title} <span className={`${isHighlightTitleImg ? 'd-block' : 'd-none'}`}><img src={QuestionMark} alt={QuestionMarkAlt} /></span></div>
                <div className="Price d-flex align-items-center gap-2">₹{amount} <span className={`amountImg ${isHighlightAmountImg ? 'd-block' : 'd-none'} ${isHighlightAmountText ? 'text-theme3 active' : 'text-theme4'}`}> {gainLossAmount}%</span></div>
            </div>
        </div>
        </>
    )
}

export default ManageBalanceCard