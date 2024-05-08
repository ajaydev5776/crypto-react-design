import React from 'react'
import Forms from '../../component/Forms/Forms';
import Table from '../../component/Table/Table';
import Pnlimg from '../../assets/img/pnlimg.svg'
import ArrowIMg from '../../assets/img/right-arrow.svg'
import ManageBalanceCard from '../../component/ManageBalanceCard/ManageBalanceCard';
import Withdraw from '../../assets/img/withdraw.png'
const Wallet = () => {

    const columns = ["Coin Name", "INR Amount", "Date", "Time", "Transection"];
    const data = [
        ["Dogy", "100", "2024-03-26", "11:38:28", "INR Deposited"],
        ["Dogy1", "200", "2024-03-27", "11:38:28", "INR Withdrawn"],
        ["Dogy2", "300", "2024-03-28", "11:38:28", "INR Deposited"],
    ];

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
        { title: "Total Balance", amount: "5457.00" , isHighlightTitleImg: false },
        { title: "Available Balance", amount: "5457.00", isHighlightTitleImg: true },
        { title: "Locked Balance", amount: "5457.00" , isHighlightTitleImg: true },
        { title: "TDS Paid", amount: "5457.00" , isHighlightTitleImg: true }
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
                                        </div>
                                    </div>
                                </div>
                                <div className="walletTable  table-responsive">
                                    <Table columns={columns} data={data}/>
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
                                            {/* <Forms username="Withdraw Amount" inputtype ="tel" inputplasholder="Enter Withdraw Amount" isActive = {false}/>
                                            <Forms username="Withdraw Amount" inputtype ="tel" inputplasholder="Enter Withdraw Amount" getOtpBtn = "Submit"/> */}
                                            
                                                <div class="row row-gap-4">
                                                    <div class="col-12">
                                                        <label for="number" class="form-label fs-16">Withdraw Amount</label>
                                                        <input type="tel" class="form-control shadow-none  p-3 fs-16" id="number" placeholder="Enter Withdraw Amount" />
                                                    </div>
                                                    <div class="col-12 text-center">
                                                        <button type="button" class="btn btn-theme1 w-100 p-3 fs-16 d-flex align-items-center justify-content-center d-flex">Submit</button>
                                                    </div>
                                                </div>
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