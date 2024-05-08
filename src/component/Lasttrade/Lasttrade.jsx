import React from 'react'

const Lasttrade = ({tradPrice, tradamount, tradtime , isHighlighted}) => {
  return (
    <>
    <tr>
    <td className={`fs-12 ${isHighlighted ? 'text-theme3' : 'text-theme4'}`}>{tradPrice}</td>
        <td className="text-white fs-12 tradamount">{tradamount}</td>
        <td className="text-white fs-12">{tradtime}</td>
    </tr>
    </>
  )
}

export default Lasttrade