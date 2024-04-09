import React from 'react'
import Switchsvg from '../../assets/img/icon/Switchsvg.svg'
// import Lowprichcoin from '../Lowprichcoin/Lowprichcoin'
import Bysellprichcoin from '../Bysellprichcoin/Bysellprichcoin'

const Coinbysell = () => {
  return (
    <>
     <div className="row h-100 flex-column flex-nowrap">
        <div className="col-12">
            <div className="cryptobuypart py-2 bg-theme1">
            <ul className="nav nav-pills border-bottom-light w-100 justify-content-between px-2 pb-2" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                <button className="nav-link py-1 px-2 fs-12 bg-transparent rounded-0 w-100 active" id="pills-home1-tab" data-bs-toggle="pill" data-bs-target="#pills-home1" type="button" role="tab" aria-controls="pills-home1" aria-selected="true">Buy &amp; Sell</button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link py-1 px-2 fs-12 bg-transparent rounded-0 w-100" id="pills-profile1-tab" data-bs-toggle="pill" data-bs-target="#pills-profile1" type="button" role="tab" aria-controls="pills-profile1" aria-selected="false">Sell Coins</button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link py-1 px-2 fs-12 bg-transparent rounded-0 w-100" id="pills-contact1-tab" data-bs-toggle="pill" data-bs-target="#pills-contact1" type="button" role="tab" aria-controls="pills-contact1" aria-selected="false">Buy Coins</button>
                </li>
            </ul>
            <ul className="list-unstyled m-0 border-bottom-light px-2 py-1 d-flex align-items-center justify-content-between">
                <li><span className="fs-12 text-white text-opacity-75 d-flex">Prich</span></li>
                <li><button className="criptoFilter small-fs shadow-none border-0 rounded-1 text-white text-opacity-75 bg-transparent p-0" id="criptoQuantity"><span className="quantitycrypto text-nowrap">amount</span><img src={Switchsvg} alt="Switchsvg" /></button></li>
            </ul>
            </div>
        </div>
        <div className="col-12 h-100 flex-fill overflow-y-auto">
            <div className="tab-content bg-theme1 pb-lg-0 pb-4" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home1-tab" tabIndex={0}>
                <ul className="list-unstyled m-0 cryptoprichGroup border-bottom-light py-2 d-flex flex-column gap-1">
                <Bysellprichcoin cryptoprich="₹43,47,878" cryptoamount="₹6,30,443.01" barvaluenow="100" barvaluemax="100" barwidth="100%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹42,47,878" cryptoamount="₹5,30,443.01" barvaluenow="90" barvaluemax="90" barwidth="90%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹41,47,878" cryptoamount="₹3,30,443.01" barvaluenow="80" barvaluemax="80" barwidth="80%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹38,47,878" cryptoamount="₹3,10,443.01" barvaluenow="70" barvaluemax="70" barwidth="70%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="35,47,878"  cryptoamount="₹2,30,443.01" barvaluenow="60" barvaluemax="60" barwidth="60%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹32,47,878" cryptoamount="₹2,20,443.01" barvaluenow="50" barvaluemax="50" barwidth="50%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹29,47,878" cryptoamount="₹2,10,443.01" barvaluenow="40" barvaluemax="40" barwidth="40%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹28,47,878" cryptoamount="₹2,10,443.01" barvaluenow="30" barvaluemax="30" barwidth="30%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹22,47,878" cryptoamount="₹2,10,443.01" barvaluenow="20" barvaluemax="20" barwidth="20%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹20,47,878" cryptoamount="₹2,10,443.01" barvaluenow="10" barvaluemax="10" barwidth="10%" isHighlighted="false"/>
                </ul>
                <div className="d-flex align-items-center justify-content-between p-2 border-bottom-light">
                    <div className="fs-16 text-white fw-medium m-0">Spread</div>
                    <div cclass="fs-16 text-white fw-medium m-0">0.61%</div>
                </div>
                <ul className="list-unstyled m-0 cryptoprichGroup py-2 d-flex flex-column gap-1">
                    <Bysellprichcoin cryptoprich="₹43,47,878" cryptoamount="₹6,30,443.01" barvaluenow="10" barvaluemax="10" barwidth="10%"/>
                    <Bysellprichcoin cryptoprich="₹42,47,878" cryptoamount="₹5,30,443.01" barvaluenow="20" barvaluemax="20" barwidth="20%"/>
                    <Bysellprichcoin cryptoprich="₹41,47,878" cryptoamount="₹3,30,443.01" barvaluenow="30" barvaluemax="30" barwidth="30%"/>
                    <Bysellprichcoin cryptoprich="₹38,47,878" cryptoamount="₹3,10,443.01" barvaluenow="40" barvaluemax="40" barwidth="40%"/>
                    <Bysellprichcoin cryptoprich="35,47,878" cryptoamount="₹2,30,443.01" barvaluenow="40" barvaluemax="40" barwidth="40%"/>
                    <Bysellprichcoin cryptoprich="₹32,47,878" cryptoamount="₹2,20,443.01" barvaluenow="60" barvaluemax="60" barwidth="60%"/>
                    <Bysellprichcoin cryptoprich="₹29,47,878" cryptoamount="₹2,10,443.01" barvaluenow="70" barvaluemax="70" barwidth="70%"/>
                    <Bysellprichcoin cryptoprich="₹28,47,878" cryptoamount="₹2,10,443.01" barvaluenow="80" barvaluemax="80" barwidth="80%"/>
                    <Bysellprichcoin cryptoprich="₹22,47,878" cryptoamount="₹2,10,443.01" barvaluenow="90" barvaluemax="90" barwidth="90%"/>
                    <Bysellprichcoin cryptoprich="₹20,47,878" cryptoamount="₹2,10,443.01" barvaluenow="100" barvaluemax="100" barwidth="100%"/>
                </ul>
            </div>
            <div className="tab-pane fade" id="pills-profile1" role="tabpanel" aria-labelledby="pills-profile1-tab" tabIndex={0}>
                <div className="p-2 border-bottom-light">
                <div className="fs-16 text-theme3 text-center fw-medium m-0">₹43,12,233</div>
                {/* if green value show than uncomment this line only change clss "text-theme4" */}
                {/* <div class="fs-16 text-theme4 text-center fw-medium m-0">₹43,12,233</div> */}
                </div>
                <ul className="list-unstyled m-0 cryptoprichGroup py-2 d-flex flex-column gap-1 border-bottom-light">
                <Bysellprichcoin cryptoprich="₹43,47,878" cryptoamount="₹6,30,443.01" barvaluenow="100" barvaluemax="100" barwidth="100%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹42,47,878" cryptoamount="₹5,30,443.01" barvaluenow="95" barvaluemax="95" barwidth="95%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹42,47,878" cryptoamount="₹5,30,443.01" barvaluenow="90" barvaluemax="90" barwidth="90%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹41,47,878" cryptoamount="₹3,30,443.01" barvaluenow="85" barvaluemax="85" barwidth="85%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹41,47,878" cryptoamount="₹3,30,443.01" barvaluenow="80" barvaluemax="80" barwidth="80%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹38,47,878" cryptoamount="₹3,10,443.01" barvaluenow="75" barvaluemax="75" barwidth="75%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹38,47,878" cryptoamount="₹3,10,443.01" barvaluenow="70" barvaluemax="70" barwidth="70%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="35,47,878" cryptoamount="₹2,30,443.01" barvaluenow="65" barvaluemax="65" barwidth="65%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="35,47,878" cryptoamount="₹2,30,443.01" barvaluenow="60" barvaluemax="60" barwidth="60%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹32,47,878" cryptoamount="₹2,20,443.01" barvaluenow="55" barvaluemax="55" barwidth="55%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹32,47,878" cryptoamount="₹2,20,443.01" barvaluenow="50" barvaluemax="50" barwidth="50%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹29,47,878" cryptoamount="₹2,10,443.01" barvaluenow="45" barvaluemax="45" barwidth="45%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹29,47,878" cryptoamount="₹2,10,443.01" barvaluenow="40" barvaluemax="40" barwidth="40%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹28,47,878" cryptoamount="₹2,10,443.01" barvaluenow="35" barvaluemax="35" barwidth="35%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹28,47,878" cryptoamount="₹2,10,443.01" barvaluenow="30" barvaluemax="30" barwidth="30%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹22,47,878" cryptoamount="₹2,10,443.01" barvaluenow="25" barvaluemax="25" barwidth="25%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹22,47,878" cryptoamount="₹2,10,443.01" barvaluenow="20" barvaluemax="20" barwidth="20%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹20,47,878" cryptoamount="₹2,10,443.01" barvaluenow="15" barvaluemax="15" barwidth="15%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹20,47,878" cryptoamount="₹2,10,443.01" barvaluenow="10" barvaluemax="10" barwidth="10%" isHighlighted="false"/>
                <Bysellprichcoin cryptoprich="₹20,47,878" cryptoamount="₹2,10,443.01" barvaluenow="5" barvaluemax="5" barwidth="5%" isHighlighted="false"/>
                </ul>
            </div>
            <div className="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact1-tab" tabIndex={0}>
                <div className="p-2 border-bottom-light">
                <div className="fs-16 text-theme3 text-center fw-medium m-0">₹43,12,233</div>
                {/* <div class="fs-16 text-theme4 text-center fw-medium m-0">₹43,12,233</div> */}
                </div>
                <ul className="list-unstyled m-0 cryptoprichGroup py-2 d-flex flex-column gap-1">
                    <Bysellprichcoin cryptoprich="₹43,47,878" cryptoamount="₹6,30,443.01" barvaluenow="5" barvaluemax="5" barwidth="5%"/>
                    <Bysellprichcoin cryptoprich="₹43,47,878" cryptoamount="₹6,30,443.01" barvaluenow="10" barvaluemax="10" barwidth="10%"/>
                    <Bysellprichcoin cryptoprich="₹42,47,878" cryptoamount="₹5,30,443.01" barvaluenow="15" barvaluemax="15" barwidth="15%"/>
                    <Bysellprichcoin cryptoprich="₹42,47,878" cryptoamount="₹5,30,443.01" barvaluenow="20" barvaluemax="20" barwidth="20%"/>
                    <Bysellprichcoin cryptoprich="₹41,47,878" cryptoamount="₹3,30,443.01" barvaluenow="25" barvaluemax="25" barwidth="25%"/>
                    <Bysellprichcoin cryptoprich="₹41,47,878" cryptoamount="₹3,30,443.01" barvaluenow="30" barvaluemax="30" barwidth="30%"/>
                    <Bysellprichcoin cryptoprich="₹38,47,878" cryptoamount="₹3,10,443.01" barvaluenow="35" barvaluemax="35" barwidth="35%"/>
                    <Bysellprichcoin cryptoprich="₹38,47,878" cryptoamount="₹3,10,443.01" barvaluenow="40" barvaluemax="40" barwidth="40%"/>
                    <Bysellprichcoin cryptoprich="35,47,878" cryptoamount="₹2,30,443.01" barvaluenow="45" barvaluemax="45" barwidth="45%"/>
                    <Bysellprichcoin cryptoprich="35,47,878" cryptoamount="₹2,30,443.01" barvaluenow="50" barvaluemax="50" barwidth="50%"/>
                    <Bysellprichcoin cryptoprich="₹32,47,878" cryptoamount="₹2,20,443.01" barvaluenow="60" barvaluemax="60" barwidth="60%"/>
                    <Bysellprichcoin cryptoprich="₹32,47,878" cryptoamount="₹2,20,443.01" barvaluenow="65" barvaluemax="65" barwidth="65%"/>
                    <Bysellprichcoin cryptoprich="₹29,47,878" cryptoamount="₹2,10,443.01" barvaluenow="70" barvaluemax="70" barwidth="70%"/>
                    <Bysellprichcoin cryptoprich="₹29,47,878" cryptoamount="₹2,10,443.01" barvaluenow="75" barvaluemax="75" barwidth="75%"/>
                    <Bysellprichcoin cryptoprich="₹28,47,878" cryptoamount="₹2,10,443.01" barvaluenow="80" barvaluemax="80" barwidth="80%"/>
                    <Bysellprichcoin cryptoprich="₹28,47,878" cryptoamount="₹2,10,443.01" barvaluenow="85" barvaluemax="85" barwidth="85%"/>
                    <Bysellprichcoin cryptoprich="₹22,47,878" cryptoamount="₹2,10,443.01" barvaluenow="90" barvaluemax="90" barwidth="90%"/>
                    <Bysellprichcoin cryptoprich="₹22,47,878" cryptoamount="₹2,10,443.01" barvaluenow="95" barvaluemax="95" barwidth="95%"/>
                    <Bysellprichcoin cryptoprich="₹20,47,878" cryptoamount="₹2,10,443.01" barvaluenow="100" barvaluemax="100" barwidth="100%"/>
                </ul>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Coinbysell