import React from 'react'
import Table from '../../component/Table/Table'
import OrderHistrpry from '../../assets/img/History.svg'
import Referce from '../../assets/img/icon/download.svg'

const OrderList = () => {
    const columns = ["PAIR","Date", "Time", "Price", "Quantity", "Status", "Action"];
    const data = [
        ["Dogy", "2024-03-26", "11:38:28", "₹100", "0.008","Done", "Buy"],
        ["Dogy1", "2024-03-27", "12:38:28", "₹100", "0.07", "Done","Sell"],
        ["Dogy2", "2024-03-28", "01:50:32", "₹100", "0.00098","Pending", "Buy"],
    ];
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
                        <div class="col-auto">
                            <div class="refreshBtn">
                                <a class="text-uppercase fw-medium btn btn-theme2 text-white themebtn refreshBtnBtn d-flex align-items-center gap-1" href="javascript:;">
                                    Download CSV
                                    <span class="refreshSvg d-flex"><img src={Referce} alt="Refresh" /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive mt-3">
                <Table columns={columns} data={data} addClassToLastCell={true} />
                </div>
            </div>
        </div>
        </>
    )
}

export default OrderList