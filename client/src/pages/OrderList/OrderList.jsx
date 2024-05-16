import React, { useEffect, useState } from 'react'
import Table from '../../component/Table/Table'
import OrderHistrpry from '../../assets/img/History.svg'
import Referce from '../../assets/img/icon/download.svg'
import { GetAllTransitionOfUser } from '../../BackendApiCalls/ApiCall'

const OrderList = () => {
    const columns = ["PAIR","Date", "Time", "Price", "Quantity", "Status", "Action"];
    const data = [
        ["Dogy", "2024-03-26", "11:38:28", "₹100", "0.008","Done", "Buy"],
        ["Dogy1", "2024-03-27", "12:38:28", "₹100", "0.07", "Done","Sell"],
        ["Dogy2", "2024-03-28", "01:50:32", "₹100", "0.00098","Pending", "Buy"],
    ];
    const [tranData , setTranData] = useState([])
    var loginStaus = JSON.parse(localStorage.getItem('isLoggedIn'))
    useEffect(()=>{
        
        GetAllTransitionOfUser({userId:loginStaus.userId,userName:loginStaus.userName}).then(res=>{
           // // console.log(res)
           var allData =[]
           var totalInvested = 0
           var totalCurrent = 0
           for (var i=0;i<res.length;i++){
               var inDate = res[i].investedDate.slice(0,10)
               var inTime = res[i].investedDate.slice(12,19)
               var data = [res[i].coinName, inDate, inTime, "₹"+res[i].investedAmount, res[i].coinAvailable,"Done","Buy"]
            //    totalInvested +=Number( res[i].investedAmount)
   
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
           var totalLossPro = ((totalCurrent-totalInvested)/ totalInvested)*100
           setTranData(allData)
        //    setWalletdata([
        //        { title: "Current value", amount: parseFloat(totalCurrent.toFixed(6))  },
        //        { title: "Invested value", amount: totalInvested, isHighlightTitleImg: true },
        //        { title: " Gain/Loss", amount: parseFloat((totalCurrent-totalInvested).toFixed(6)), isHighlightTitleImg: true, gainLossAmount: parseFloat(totalLossPro).toFixed(2), isHighlightAmountText:  parseFloat(totalLossPro).toFixed(2)<0?false:true, isHighlightAmountImg: true },
        //    ])
   
        })
       },[])


    return (
        <>
        <div class="container-fluid portfolioSection py-4">
            <div class="container">
            <div class="header p-3 mb-3 rounded">
                    <div class="row align-items-center row-gap-2 justify-content-between">
                        <div class="col-auto">
                            <div class="row align-items-center">
                                <div class="col-auto"><div className="titleImg"><img src={OrderHistrpry} alt="shap" /></div></div>
                                <div class="col px-0">
                                    <div class="heading fw-bold">Order History</div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-auto">
                            <div class="refreshBtn">
                                <a class="text-uppercase fw-medium btn btn-theme2 text-white themebtn refreshBtnBtn d-flex align-items-center gap-1" href="javascript:;">
                                    Download CSV
                                    <span class="refreshSvg d-flex"><img src={Referce} alt="Refresh" /></span>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div class="table-responsive mt-3">
                <Table columns={columns} data={tranData} addClassToLastCell={true} />
                </div>
            </div>
        </div>
        </>
    )
}

export default OrderList