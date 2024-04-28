import React from 'react'
import ManageBalanceCard from '../../component/ManageBalanceCard/ManageBalanceCard';
// import PortfolioTable from '../../component/Table/PortfolioTable';
import Table from '../../component/Table/Table';
import PortfolioShap from '../../assets/img/portfolio_shap.svg'
import Referce from '../../assets/img/refresh.svg'
import { useEffect } from 'react';
import { GetAllTransitionOfUser, GetCoinCurrentValue } from '../../BackendApiCalls/ApiCall';
import { useState } from 'react';

const Portfolio = () => {
    const initValu = {
        "BTC":0,"USDT":0
    }
    const [coinCurrentValue,setCoinCurrentValue] = useState(initValu)
    const [tranData , setTranData] = useState([])
    const [walletdata,setWalletdata] = useState([])
    var loginStaus = JSON.parse(localStorage.getItem('isLoggedIn'))
    useEffect(()=>{
        GetCoinCurrentValue("BTC").then(btcres=>{
            GetCoinCurrentValue("USDT").then(res=>{
                setCoinCurrentValue({"BTC":btcres,"USDT":res})
            }).catch(Err=>{
                setCoinCurrentValue({"BTC":btcres,"USDT":1})
            })
        }).catch(Err=>{
            setCoinCurrentValue({"BTC":1,"USDT":1})
        })
        
    },[])
    useEffect(()=>{
        
     GetAllTransitionOfUser({userId:loginStaus.userId,userName:loginStaus.userName}).then(res=>{
        // console.log(res)
        var allData =[]
        var totalInvested = 0
        var totalCurrent = 0
        for (var i=0;i<res.length;i++){
            var data = [res[i].coinName, res[i].coinAvailable, res[i].investedAmount]
            totalInvested +=Number( res[i].investedAmount)

            var invesValue = res[i].coinAvailable * res[i].buyAtValue
            var currentValue = res[i].coinAvailable * coinCurrentValue[res[i].coinName]
            totalCurrent+=currentValue
            var PaL = currentValue - invesValue
            var PaLPer =(PaL/invesValue)*100
            data.push(parseFloat(currentValue.toFixed(6)))
            data.push(res[i].buyAtValue)
            data.push(parseFloat(PaL.toFixed(6)))
            data.push(parseFloat(PaLPer.toFixed(6)))
           allData.push(data)
        }
        var totalLossPro = ((totalCurrent-totalInvested)/ totalInvested)*100
        setTranData(allData)
        setWalletdata([
            { title: "Current value", amount: parseFloat(totalCurrent.toFixed(6))  },
            { title: "Invested value", amount: totalInvested, isHighlightTitleImg: true },
            { title: " Gain/Loss", amount: parseFloat((totalCurrent-totalInvested).toFixed(6)), isHighlightTitleImg: true, gainLossAmount: parseFloat(totalLossPro).toFixed(2), isHighlightAmountText:  parseFloat(totalLossPro).toFixed(2)<0?false:true, isHighlightAmountImg: true },
        ])

     })
    },[coinCurrentValue])

    const columns = ["Coin/Asset", "Quantity(coin)", "Invested Value (INR)","Current Value (INR)","Buying Price (INR)", "Total P&L (INR)", "Total P&L (%)"];


    function WalletCardItems({ data }) {
        return (
            <div className="row gx-0 row-gap-3">
                {data.map((item, index) => (
                    <div className="col-6 col-sm">
                        <ManageBalanceCard key={index} title={item.title} amount={item.amount} isHighlightTitleImg={item.isHighlightTitleImg}
                        gainLossAmount={item.gainLossAmount} isHighlightAmountText={item.isHighlightAmountText} isHighlightAmountImg={item.isHighlightAmountImg}/>
                    </div>
                ))}
            </div>
        );
    }
    // const walletdata = [
    //     { title: "Current value", amount: "100.00" },
    //     { title: "Invested value", amount: "100.00", isHighlightTitleImg: true },
    //     { title: " Gain/Loss", amount: "150.00", isHighlightTitleImg: true, gainLossAmount: "50.00", isHighlightAmountText: true, isHighlightAmountImg: true },
    // ];

return (
    <>
        <div class="container-fluid portfolioSection py-4">
            <div class="container">
                <div class="header p-3 mb-3 rounded">
                    <div class="row align-items-center row-gap-2 justify-content-between">
                        <div class="col-auto">
                            <div class="row align-items-center">
                                <div class="col-auto"><div className="titleImg"><img src={PortfolioShap} alt="shap" /></div></div>
                                <div class="col px-0">
                                    <div class="heading fw-bold">Portfolio</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="refreshBtn">
                                <a class="text-uppercase fw-medium btn btn-theme2 text-white themebtn refreshBtnBtn d-flex align-items-center gap-1" href="javascript:;">
                                    Refresh
                                    <span class="refreshSvg d-flex"><img src={Referce} alt="Refresh" /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contentBody">
                    <div class="bg-theme1 py-3 portfolioWallet">
                        <WalletCardItems data={walletdata} />
                    </div>
                </div>
                <div class="table-responsive mt-3">
                    <Table columns={columns} data={tranData} addClassToLastCell={false}/>
                </div>
            </div>
        </div>
    </>
)
}

export default Portfolio