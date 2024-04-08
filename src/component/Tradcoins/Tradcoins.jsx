import React from 'react'
import Stargray from '../../assets/img/icon/star-gray.svg'
import Switchsvg from '../../assets/img/icon/Switchsvg.svg'
import Bitcoin from '../../assets/img/btc.png'

const Tradcoins = ({coinName, coincurrency, coinplatform, coinprich, coinheightLow, isHighlighted}) => {
  return (
    <>
     <div className="card coincard border-0 rounded-0">
        <div className="card-body d-flex align-items-center justify-content-between">
            <div className="cryptoside d-flex align-items-center gap-2">
            <div className="starimg d-inline-flex"><img src={Stargray} alt="star" /></div>
            <div className="coinname d-flex align-items-center gap-2">
                <div className="coinimg"><img src={Bitcoin} alt="btc" /></div>
                <div className="coins">
                <div className="text-white fs-10 d-flex align-items-center">{coinName}<span className="text-white text-opacity-75 me-1">{coincurrency}</span> <span className="exchange d-inline-flex"><img src={Switchsvg} alt="star" /></span></div>
                <div className="partyname fs-10">{coinplatform}</div>
                </div>
            </div>
            </div>
            <div className="coinamount text-end">
            <div className="text-white fs-10">{coinprich}</div>
            <div className={` fs-10 ${isHighlighted ? 'text-theme4' : 'text-theme3'}`} fs-10>{coinheightLow}</div>
            </div>
        </div>
        <a href="javascript:;" className="stretched-link" />
    </div>
    </>
  )
}

export default Tradcoins