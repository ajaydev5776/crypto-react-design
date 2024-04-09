import React from 'react'

const Bysellprichcoin = ({cryptoprich, cryptoamount, barvaluenow, barvaluemax, barwidth, isHighlighted }) => {
  return (
    <>
     <li className="cryptoamount">
        <div className="contantside d-flex justify-content-between align-items-center px-2">
        <span className={`prich fs-12 ${isHighlighted ? 'text-theme4' : 'text-theme3'}`}>{cryptoprich}</span>
        <span className="amount fs-12 text-white">{cryptoamount}</span>
        </div>
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={barvaluenow} aria-valuemin={0} aria-valuemax={barvaluemax}>
        <div className={`progress-bar ms-auto ${isHighlighted ? 'radzone' : 'greenzone'}`}  style={{ width: barwidth }} />
        </div>
    </li>
    </>
  )
}

export default Bysellprichcoin