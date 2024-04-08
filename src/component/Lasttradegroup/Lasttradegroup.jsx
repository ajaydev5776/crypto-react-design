import React from 'react'
import Switchsvg from '../../assets/img/icon/Switchsvg.svg'
import Lasttrade from '../Lasttrade/Lasttrade'

const Lasttradegroup = () => {
  return (
    <>
    <div className="lasttrade h-100">
        <div className="fw-medium fs-14 text-white text-opacity-75 p-2 border-bottom-light bg-theme1">Last Trades</div>
        <div className="responsive-table lasttradetable">
        <table className="table table-borderless align-middle">
            <thead>
            <tr className="border-bottom-light">
                <th className="text-white fw-normal fs-12">Prich</th>
                <th className="text-white fw-normal fs-12 text-capitalize"><button className="criptoFilter small-fs shadow-none border-0 rounded-1 text-white text-opacity-75 bg-transparent p-0" id="lasttradeCripto"><span className="quantitycrypto text-nowrap">amount</span><img src={Switchsvg} alt="Switchsvg" /></button></th>
                <th className="text-white fw-normal fs-12">Time</th>
            </tr>
            </thead>
            <tbody>
                <Lasttrade tradprich="₹43,36,716" tradamount="₹477.04" tradtime="17:38:52" isHighlighted={false}/>
                <Lasttrade tradprich="₹43,36,716" tradamount="₹477.04" tradtime="17:38:52" isHighlighted={true}/>
                <Lasttrade tradprich="₹43,36,716" tradamount="₹477.04" tradtime="17:38:52" isHighlighted={true}/>
                <Lasttrade tradprich="₹43,36,716" tradamount="₹477.04" tradtime="17:38:52" isHighlighted={false}/>
                <Lasttrade tradprich="₹43,36,716" tradamount="₹477.04" tradtime="17:38:52" isHighlighted={false}/>
                <Lasttrade tradprich="₹43,36,716" tradamount="₹477.04" tradtime="17:38:52" isHighlighted={true}/>
                <Lasttrade tradprich="₹43,36,716" tradamount="₹477.04" tradtime="17:38:52" isHighlighted={true}/>
                <Lasttrade tradprich="₹43,36,716" tradamount="₹477.04" tradtime="17:38:52" isHighlighted={false}/>
                <Lasttrade tradprich="₹43,36,716" tradamount="₹477.04" tradtime="17:38:52" isHighlighted={true}/>
                <Lasttrade tradprich="₹43,36,716" tradamount="₹477.04" tradtime="17:38:52" isHighlighted={false}/>
                <Lasttrade tradprich="₹43,36,716" tradamount="₹477.04" tradtime="17:38:52" isHighlighted={true}/>
                <Lasttrade tradprich="₹43,36,716" tradamount="₹477.04" tradtime="17:38:52" isHighlighted={false}/>
            </tbody>
        </table>
        </div>
    </div>
    </>
  )
}

export default Lasttradegroup