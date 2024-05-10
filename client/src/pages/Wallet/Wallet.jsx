import React, { useEffect, useState } from 'react'
import Forms from '../../component/Forms/Forms';
import Table from '../../component/Table/Table';
import Pnlimg from '../../assets/img/pnlimg.svg'
import ArrowIMg from '../../assets/img/right-arrow.svg'
import ManageBalanceCard from '../../component/ManageBalanceCard/ManageBalanceCard';
import Withdraw from '../../assets/img/withdraw.png'
import { GetAllTransitionOfUser } from '../../BackendApiCalls/ApiCall';
const Wallet = () => {

    const columns = ["Coin Name", "INR Amount", "Date", "Time", "Transection"];
    const data = [
        ["Dogy", "100", "2024-03-26", "11:38:28", "INR Deposited"],
        ["Dogy1", "200", "2024-03-27", "11:38:28", "INR Withdrawn"],
        ["Dogy2", "300", "2024-03-28", "11:38:28", "INR Deposited"],
    ];
    const [tranData , setTranData] = useState([])
    const [totalinvestedAmt, settotalinvestedAmt] = useState(0)
    var loginStaus = JSON.parse(localStorage.getItem('isLoggedIn'))
    useEffect(()=>{
        
        GetAllTransitionOfUser({userId:loginStaus.userId,userName:loginStaus.userName}).then(res=>{
           // console.log(res)
           var allData =[]
           var totalInvested = 0
           var totalCurrent = 0
           for (var i=0;i<res.length;i++){
               var inDate = res[i].investedDate.slice(0,10)
               var inTime = res[i].investedDate.slice(12,19)
               var status =res[i].investedAmount < 0 ? "INR Withdrawn" : "INR Deposited"
               var data = [res[i].coinName,"₹"+res[i].investedAmount, inDate, inTime,status ]
               totalInvested +=Number( res[i].investedAmount)
   
            //    var invesValue = res[i].coinAvailable * res[i].buyAtValue
            //    var currentValue = res[i].coinAvailable * coinCurrentValue[res[i].coinName]
            //    totalCurrent+=currentValue
            //    var PaL = currentValue - invesValue
            //    var PaLPer =(PaL/invesValue)*100
            //    data.push(parseFloat(currentValue.toFixed(6)))
            //    data.push(res[i].buyAtValue)
            //    data.push(parseFloat(PaL.toFixed(6)))
            //    data.push(parseFloat(PaLPer.toFixed(6)))
              allData.push(data)
           }
           settotalinvestedAmt(totalInvested)
           var totalLossPro = ((totalCurrent-totalInvested)/ totalInvested)*100
           setTranData(allData)
        //    setWalletdata([
        //        { title: "Current value", amount: parseFloat(totalCurrent.toFixed(6))  },
        //        { title: "Invested value", amount: totalInvested, isHighlightTitleImg: true },
        //        { title: " Gain/Loss", amount: parseFloat((totalCurrent-totalInvested).toFixed(6)), isHighlightTitleImg: true, gainLossAmount: parseFloat(totalLossPro).toFixed(2), isHighlightAmountText:  parseFloat(totalLossPro).toFixed(2)<0?false:true, isHighlightAmountImg: true },
        //    ])
   
        })
       },[])
    function WalletCardItems({ data }) {
        return (
            <div className="row gx-0 row-gap-3">
                {data.map((item, index) => (
                    <div className="col-6 col-md">
                        <ManageBalanceCard key={index} title={item.title} amount={item.amount} isHighlightTitleImg={item.isHighlightTitleImg}/>
                    </div>
                ))}
            </div>
        );
    }

    
    const walletdata = [
        { title: "Total Balance", amount: totalinvestedAmt , isHighlightTitleImg: false },
        { title: "Available Balance", amount: totalinvestedAmt, isHighlightTitleImg: true },
        { title: "Locked Balance", amount: totalinvestedAmt , isHighlightTitleImg: true },
    ];


    return (
        <>
            <div className="container-fluid walletSection py-4 mt-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <ul className="nav nav-tabs navTabs row mx-0 gx-0" id="myTab" role="tablist">
                            <li className="nav-item col-md-auto col-6" role="presentation">
                                <button className="nav-link w-100 active navLink" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Wallet</button>
                            </li>
                            <li className="nav-item col-md-auto col-6" role="presentation">
                                <button className="nav-link w-100 navLink" id="about-tab" data-bs-toggle="tab" data-bs-target="#about-tab-pane" type="button" role="tab" aria-controls="about-tab-pane" aria-selected="true">Withdraw</button>
                            </li>
                        </ul>
                        <div className="tab-content tabContent" id="myTabContent">
                            <div className="bg-theme1 carditemparent py-3">
                                <WalletCardItems data={walletdata} />
                            </div>
                            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                <div className="contentBody">
                                    <div className="pnlDiv">
                                        <div className="row align-items-center row-gap-2">
                                            <div className="col">
                                                <div className="pnltxt">
                                                    Your Tax P&L statement is available. Kindly click to download.
                                                </div>
                                            </div>
                                            <div className="col-sm-auto">
                                                <div className="mainCArd position-relative">
                                                    <a href="javascript:;" className="stretched-link"></a>
                                                    <div className="row align-items-center gx-2">
                                                        <div className="col-auto">
                                                            <div className="pnlimg">
                                                                <img src={Pnlimg} alt="pnlImg" className="h-100 w-100" />
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="txt">
                                                                P&L Report
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="arrowimg">
                                                                <img src={ArrowIMg} alt="pnlImg" className="h-100 w-100" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="walletTable  table-responsive">
                                    <Table columns={columns} data={tranData}/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="about-tab-pane" role="tabpanel" aria-labelledby="about-tab" tabindex="0">
                                <div className="pnlDiv mb-3">
                                    <div className="pnltxt text-center">Please withdraw minimum 10,000 amount </div>
                                </div>
                                <div className="row pt-1 align-items-center">
                                    <div className="col-sm-6">
                                        <div className="withdrawimg"><img src={Withdraw} className='w-auto ' alt="withdraw" /></div>
                                    </div>
                                    <div className="col-sm-6 loginmodal">
                                        <form>
                                            {/* <Forms username="Withdraw Amount" inputtype ="tel" inputplasholder="Enter Withdraw Amount" isActive = {false}/> */}
                                            <Forms username="Withdraw Amount" inputtype ="tel" inputplasholder="Enter Withdraw Amount" getOtpBtn = "Submit"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Wallet