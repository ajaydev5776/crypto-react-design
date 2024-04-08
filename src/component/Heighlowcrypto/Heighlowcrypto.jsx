import React from 'react'

const Heighlowcrypto = ({cryptolavelTime, cryptoamount}) => {
  return (
    <>
    <div className="carditem miditems">
        <div className="leftside d-flex flex-column gap-1">
          <div className="criptoname text-white text-opacity-75">{cryptolavelTime}</div>
          <div className="prich d-flex align-items-center gap-2">{cryptoamount} </div>
        </div>
    </div>
    </>
  )
}

export default Heighlowcrypto