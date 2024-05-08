import React,{ useState } from 'react'
import Chart from '../../component/Chart/Candlestick';
import Topbar from '../../component/Topbar/Topbar';
import Heighlowcryptogroup from '../../component/Heighlowcryptogroup/Heighlowcryptogroup';
import Asidebar from '../../component/Asidebar/Asidebar';
import Addvideo from '../../component/Addvideo/Addvideo';
import Lasttradegroup from '../../component/Lasttradegroup/Lasttradegroup';
import Coinbysell from '../../component/Coinbysell/Coinbysell';

const Home = () => {
var objj= {
  BTC : "12345",
  USDT :"85.52"
}
 const [coinPrice,setCoinPrice] = useState(objj)
  const [selectedCoin, setSelectedCoin] = useState('BTC')
  var loginStaus = JSON.parse(localStorage.getItem('isLoggedIn'))
  const [userId,setUserId] = useState(loginStaus.userId)
  const setCoinValue = (data)=>{
    if (data.coinname == "BTC"){

      setCoinPrice({...coinPrice,BTC:data.value})
    } else {
      setCoinPrice({...coinPrice,USDT:data.value})
    }
console.log("fghjklo9iuytrjk",data)
  }

const onCoinSelect = (coin) => {
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>",loginStaus)
    setSelectedCoin(coin);
    setUserId(loginStaus.userId)
    console.log( "Coin selected",coin);
}
  return (
    <>
      <div className="container-fluid maindashboard overflow-hidden">
        <div className="h-100 overflow-y-auto overflow-x-hidden">
          <div className="row h-100 flex-column flex-nowrap g-2">
          {/* <Header/> */}
            <div className="col-12 h-100 flex-lg-fill overflow-lg-hidden">
              <div className="row h-100 gx-2">
                {/* left Side Start */}
                <div className="col-12 col-xxl-10 col-lg-9 h-100 overflow-lg-y-auto px-0">
                  <div className="row h-100 flex-column flex-nowrap row-gap-2 mx-0 gx-2">
                    <div className="col-12 d-flex flex-column row-gap-2">
                      {/* trending cripto bar   */}
                      <Topbar/>
                      <Heighlowcryptogroup bitcoinPrice={coinPrice.BTC}/>
                      {/* trending cripto bar End  */}
                    </div>
                    <div className="col-12 h-100 flex-fill overflow-hidden">
                      <div className="h-100 overflow-y-auto overflow-x-hidden">
                        <div className="row h100 row-gap-2 cryptocoinspart chartpart gx-2 overflow-xhidden">
                          {/* cripto Side */}
                          <Asidebar onCoinSelect= {onCoinSelect} bitcoinPrice={coinPrice.BTC} usdtPrice={coinPrice.USDT}/>
                          {/* cripto Side End */}
                          {/* chart side */}
                          <div className="col-12 col-sm h-100 overflow-y-auto chartHeight">
                            <div className="candelChart">
                              {/* <div className="chart bg-theme1 d-flex align-items-center overflow-hidden" id="chart" /> */}
                              <div className="chart bg-theme1  overflow-hidden">
                                <Chart CoinDetails={selectedCoin} SetCoinValue={setCoinValue}/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row my-2">
                          <div className="col-12">
                            <div className="row g-2">
                              <div className="col-md-8">
                                <Addvideo/>
                              </div>
                              <div className="col-md-4">
                                <Lasttradegroup/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* left Side End */}
                {/* Right Side Start */}
                <div className="col-12 col-xxl-2 col-lg-3 h-100">
                  <Coinbysell/>
                </div>
                {/* Right Side End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;

