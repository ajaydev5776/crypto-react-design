import React from 'react'
import ManageBalanceCard from '../../component/ManageBalanceCard/ManageBalanceCard';
// import PortfolioTable from '../../component/Table/PortfolioTable';
import Table from '../../component/Table/Table';
import PortfolioShap from '../../assets/img/portfolio_shap.svg'
import Referce from '../../assets/img/refresh.svg'

const Portfolio = () => {

    const columns = ["Coin/Asset", "Availble Balance", "Locked Balance", "Total P&L (%)"];
    const data = [
        ["Dogy", "₹100.00", "₹0.00", "0.00%"],
        ["Dogy1", "₹200.00", "₹0.00", "0.00%"],
        ["Dogy2", "₹300.00", "₹0.00", "0.00%"],
    ];


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
    const walletdata = [
        { title: "Current value", amount: "100.00" },
        { title: "Invested value", amount: "100.00", isHighlightTitleImg: true },
        { title: " Gain/Loss", amount: "150.00", isHighlightTitleImg: true, gainLossAmount: "50.00", isHighlightAmountText: true, isHighlightAmountImg: true },
    ];

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
                    <Table columns={columns} data={data} addClassToLastCell={false}/>
                </div>
            </div>
        </div>
    </>
)
}

export default Portfolio