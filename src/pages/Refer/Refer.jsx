import React from 'react'
import Search from '../../component/Search/Search'

const Refer = () => {
    const copyText = () => {
        const referLink = document.querySelector('.referLinktxt');
        if (referLink) {
            const textToCopy = referLink.innerText;
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                alert('Text copied successfully!');
                })
                .catch(err => {
                console.error('Error copying text: ', err);
                });
            }
        };
    
    return (
        <>
    <div className="container-fluid referSection  py-5 mt-md-5 mt-4">
        <div className="container">
            <div className="referSectionOne">
                <div className="row align-items-center row-gap-4 justify-content-center justify-content-md-start">
                    <div className="col-12 col-lg-7 col-md-6 col-xl-8">
                        <div className="row">
                            <div className="col-12 col-xxl-7 col-xl-9 text-center text-md-start">
                                <div className="earntxt mb-3">Earn 20%</div>
                                <div className="subtxt">Of all the trading fees paid by your referrals.</div>
                                <div className="moretxt pt-2">The more they trade the more you earn!!!</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                        <div className="gradinetBorder">
                            <div className="referLink">
                                <div className="py-2">
                                    <div className="textMain">Your Referral Link</div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="referLinktxt">https://example/in/refer?tag=31WB3&pro=trueghg</div> 
                                        <div class="referImg" >
                                            <a href="javascript:;" onClick={copyText}>
                                                <img src="./assets/img/referImg.svg" alt="copyIcon" class="h-100 w-100"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="lineAnimation pt-3">
                                    <div class="d-flex justify-content-center w-100">
                                        <span class="animationDots">●</span>
                                        <span class="animationDots">●</span>
                                        <span class="animationDots">●</span>
                                    </div>
                                </div>
                            </div>                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container-fluid tableSection py-5">
        <div class="container">
            <div class="row align-items-center justify-content-md-between justify-content-center row-gap-40">
                <div class="col-12 col-sm-6 col-md-4 col-lg">
                    <div class="mainCard">
                        <div class="cardImg mx-auto">
                            <img src="./assets/img/table01.svg" alt="cardImg" class="h-100 w-100"/>
                        </div>
                        <div class="cardtxt">
                            Share this link with your friends.
                        </div>
                        <div class="number">
                            1
                        </div>
                    </div>
                </div>
                <div class="col-2 d-none d-lg-block">
                    <div class="">
                        <img src="./assets/img/table02.svg" alt="line" class="w-100 h-100"/>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg">
                    <div class="mainCard">
                        <div class="cardImg mx-auto">
                            <img src="./assets/img/table03.svg" alt="cardImg" class="h-100 w-100"/>
                        </div>
                        <div class="cardtxt">
                            Ask them to sign up using this link.
                        </div>
                        <div class="number">
                            2
                        </div>
                    </div>
                </div>
                <div class="col-2 d-none d-lg-block">
                    <div class="">
                        <img src="./assets/img/table04.svg" alt="line" class="w-100 h-100"/>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg">
                    <div class="mainCard">
                        <div class="cardImg mx-auto">
                            <img src="./assets/img/table05.svg" alt="cardImg" class="h-100 w-100"/>
                        </div>
                        <div class="cardtxt">
                            You get reward while they do trading.
                        </div>
                        <div class="number">
                            3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid voucherSection  py-5">
        <div class="container">
            <div class="fluidVoucher p-4 p-md-5 rounded">
                <div class="row br-3 row-gap-4 justify-content-around align-items-center">
                    <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                        <div class="marginDiv">
                            <div class="mb-2 text text-center text-lg-start">Do you have a Voucher?</div>
                            <div class="subtext text-center text-lg-start">Apply now to redeem instantly</div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                        <div className="voucherForm">
                            <label for="exampleInputEmail1" className="form-label formLabel text-theme6">Voucher Code</label>
                            <div className="row row-gap-3 mx-0">
                                <div className="col-12 col-sm-8 px-1 pr-sm-1">
                                    <Search inputType="text" inputPlaceholder="Enter Code Here"/>
                                </div>
                                <div className="col-12 col-sm-4 px-1">
                                    <a className="text-uppercase fw-medium btn btn-theme2 text-white  themebtn voucherBtn h-100 align-items-center justify-content-center d-flex" href="javascript:;">Apply Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid keyHighLightsSection  py-5">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="text-center pb-4 pb-sm-5 heading">Key Highlights</div>
                </div>
                <div className="col-12">
                    <div className="row row-gap-4">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="mainCard">
                                <div className="cardImg">
                                    <img src="assets/img/key-h-1.svg" alt="cardImg" />
                                </div>
                                <div className="cardtxt">
                                    <div className="pt-lg-4 pt-3 keyPara">Earn 20% of all trading fees paid by your referral.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="mainCard">
                                <div className="cardImg">
                                    <img src="assets/img/key-h-2.svg" alt="cardImg" />
                                </div>
                                <div className="cardtxt">
                                    <div className="pt-lg-4 pt-3 keyPara">Weekly Payouts (Every Thursday at 10 PM)</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="mainCard">
                                <div className="cardImg">
                                    <img src="assets/img/key-h-3.svg" alt="cardImg" />
                                </div>
                                <div className="cardtxt">
                                    <div className="pt-lg-4 pt-3 keyPara">Refer to unlimited friends or family.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="mainCard">
                                <div className="cardImg">
                                    <img src="assets/img/key-h-4.svg" alt="cardImg" />
                                </div>
                                <div className="cardtxt">
                                    <div className="pt-lg-4 pt-3 keyPara">Unlimited rewards, till referrals keeps trading.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid voucherSection px-0 pt-5">
        <div className="fluidVoucher">
            <div className="marginDiv p-4">
                <div className="footertext text-center fs-14">Remember! Any referrals without the link will not be accounted.</div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Refer