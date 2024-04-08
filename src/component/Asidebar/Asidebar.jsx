import React from 'react'
import Searchbar from '../Search/Search'
import Starfill from '../../assets/img/icon/Star-fill.svg'
import Tradcoins from '../Tradcoins/Tradcoins'

const Asidebar = () => {
  return (
    <>
     <div className="col-12 col-sm-auto h-100 left-chart-crtpto" id="left-chart-crtpto">
        <div className="row h-100 flex-column flex-nowrap">
          <div className="col-12">
            <div className="topheader p-2">
              <Searchbar/>
              <div className="navs d-flex align-items-center gap-2 mb-2 mt-3">
                <span className="star-fill"><img src={Starfill} alt="Star-fill" /></span>
                <ul className="nav nav-pills m-0 w-100 d-flex align-items-center" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-0 bg-transparent active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All Coins</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 h-100 flex-fill overflow-y-auto">
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                <div className="topheader">
                  <Tradcoins coinName="BTC" coincurrency="/INR" coinplatform="CoinSwitchX + 1" coinprich="₹44,78,961" coinheightLow="+2.72%" isHighlighted=""/>
                  <Tradcoins coinName="USDT" coincurrency="/INR" coinplatform="CoinSwitchX + 1" coinprich="₹44,78,961" coinheightLow="+2.72%" isHighlighted="false"/>
                  
                </div>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>34</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Asidebar