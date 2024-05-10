import React, { useEffect, useState } from 'react'

const Lasttrade = ({tradprich, tradamount, tradtime , isHighlighted}) => {
  const [price,setPrice] = useState(tradprich)
const [level,setLevel] = useState(tradamount)  
useEffect(()=>{
  var timeinterval = setInterval(()=>{ 
    setPrice(tradprich + Math.floor(Math.random() * 1263))
    setLevel(tradamount + Math.floor(Math.random() * 127))
  },3000)
  
  return () => clearTimeout(timeinterval);
},[])
  return (
    
    
    <>
    <tr>
    <td className={`fs-12 ${isHighlighted ? 'text-theme3' : 'text-theme4'}`}>₹ {price}</td>
        <td className="text-white fs-12 tradamount">₹ {level}</td>
        <td className="text-white fs-12">{tradtime}</td>
    </tr>
    </>
  )
}

export default Lasttrade