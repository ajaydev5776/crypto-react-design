import React, { useEffect, useState } from 'react';
import Switchsvg from '../../assets/img/icon/Switchsvg.svg'

const Topcrypto = ({cryptoname, cryptoprich, sign, cryptolavel, isHighlighted}) => {

const [price,setPrice] = useState(cryptoprich)
const [level,setLevel] = useState(cryptolavel)
  useEffect(()=>{
    var timeinterval = setInterval(()=>{ 
      setPrice(cryptoprich + Math.floor(Math.random() * 10))
      setLevel(cryptolavel + Math.floor(Math.random() * 10))
    },3000)
    
    return () => clearTimeout(timeinterval);
  },[])
  return (
    <>
        <li className="list-item d-flex align-items-center gap-2 text-nowrap">{cryptoname} 
        <span className="prich"> ₹{price}</span>
         <span className={`prich  cryptolavel ${isHighlighted ? 'text-theme4' : 'text-theme3'}`}>{sign}{level}%</span></li>
    </>
  )
}

export default Topcrypto