import React, { useEffect, useState } from 'react'

const Bysellprichcoin = ({cryptoprich, cryptoamount, barvaluenow, barvaluemax, barwidth, isHighlighted }) => {

  const [price,setPrice] = useState(cryptoprich)
  const [level,setLevel] = useState(cryptoamount)
  const [barvalue,setBarValue] = useState(0)  
  useEffect(()=>{
    var timeinterval = setInterval(()=>{ 
      setPrice(cryptoprich + Math.floor(Math.random() * 1263))
      setLevel(cryptoamount + Math.floor(Math.random() * 127))
      setBarValue(Math.floor(Math.random() * 200))
    },3000)
    
    return () => clearTimeout(timeinterval);
  },[])
  return (
    <>
     <li className="cryptoamount">
        <div className="contantside d-flex justify-content-between align-items-center px-2">
        <span className={`prich fs-12 ${isHighlighted ? 'text-theme4' : 'text-theme3'}`}>₹ {price}</span>
        <span className="amount fs-12 text-white">₹ {level}</span>
        </div>
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={barvalue} aria-valuemin={0} aria-valuemax={barvalue}>
        <div className={`progress-bar ms-auto ${isHighlighted ? 'radzone' : 'greenzone'}`}  style={{ width: barvalue }} />
        </div>
    </li>
    </>
  )
}

export default Bysellprichcoin