import React, { useState } from 'react';
import Switchsvg from '../../assets/img/icon/Switchsvg.svg'

const Topcrypto = ({cryptoname, cryptoPrice, cryptolavel, isHighlighted}) => {
  return (
    <>
        <li className="list-item d-flex align-items-center gap-2 text-nowrap">{cryptoname} 
        <span className="Price">{cryptoPrice}</span>
         <span className={`Price  cryptolavel ${isHighlighted ? 'text-theme4' : 'text-theme3'}`}>{cryptolavel}</span></li>
    </>
  )
}

export default Topcrypto