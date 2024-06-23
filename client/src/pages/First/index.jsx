

const First = () =>{
    return(
        <>
       <div>
       {/* <!-- Preloader --> */}
    <div class="page-loader"><div class="spinner"></div></div>
    {/* <!-- include Header --> */}
    <nav class="navbar navbar-expand-lg  position-fixed w-100 bg-transparent py-md-3 py-2 top-0" data-aos="fade-down" data-aos-duration="1000">
        <div class="container">
            <a class="navbar-brand fw-medium" href=""><img src="assets/img/header/logo.svg" alt="Logo" class="w-100 h-100" /></a>
            <div class="d-lg-none d-flex align-items-center gap-2">
                <a href="http://globalwebcripto.com/"  target="_blank"  class="download_btn main_btn text-decoration-none d-sm-flex d-none">Sign In</a>
                <a href="https://t.me/Crypto9588global"  target="_blank"  class="download_btn main_btn more_btn text-theme2 text-decoration-none d-sm-flex d-none">Support</a>
                <div class="icone_list " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <img src="assets/img/header/menuBtn.svg" class="w-100" alt="" />
                </div>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto align-items-center gap-3">
                    <li class="nav-item"><a class="nav-link position-relative fs-16 fw-bold fw-normal text-white active" aria-current="page" href="">Home</a></li>
                    <li class="nav-item"><a class="nav-link position-relative fs-16 fw-bold fw-normal text-white" href="#about">About Us</a></li>
                    <li class="nav-item"><a class="nav-link position-relative fs-16 fw-bold fw-normal text-white" href="#service">Services</a></li>
                    <li class="nav-item"><a class="nav-link position-relative fs-16 fw-bold fw-normal text-white" href="#whyus">Why Us</a></li>
                    <li class="nav-item"><a class="nav-link position-relative fs-16 fw-bold fw-normal text-white" href="#packages">Package</a></li>
                </ul>
                <div class="text-center">
                    <a href="http://globalwebcripto.com/"  target="_blank"  class="download_btn main_btn text-decoration-none">Sign In</a>
                    <a href="https://t.me/Crypto9588global"  target="_blank"  class="download_btn main_btn more_btn text-theme2 text-decoration-none">Support</a>
                </div>
            </div>
        </div>
        </nav>
        
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header bg-dark py-md-3 py-2">
                <h5 class="offcanvas-title fw-normal my-1 tag_title" id="offcanvasRightLabel"><img src="assets/img/header/logo.svg" alt="Logo" class="h-100" /></h5>
                <button type="button" class="closeBtn bg-transparent p-0 shadow-none border-0" data-bs-dismiss="offcanvas"
                    aria-label="Close"><img src="assets/img/header/close.svg" alt="" class="w-100" /></button>
            </div>
            <div class="offcanvas-body">
                <ul class="list-unstyled ps-3 tag_list">
                    <li class="pb-3"><a href="" class="fs-14 d-flex w-100 text-uppercase fw-normal text-black text-decoration-none">Home</a></li>
                    <li class="pb-3"><a href="#about" class="fs-14 d-flex w-100 text-uppercase fw-normal text-black text-decoration-none">About Us</a></li>
                    <li class="pb-3"><a href="#service" class="fs-14 d-flex w-100 text-uppercase fw-normal text-black text-decoration-none">Services</a></li>
                    <li class="pb-3"><a href="#whyus" class="fs-14 d-flex w-100 text-uppercase fw-normal text-black text-decoration-none">Why Us</a></li>
                    <li class="pb-3"><a href="#packages" class="fs-14 d-flex w-100 text-uppercase fw-normal text-black text-decoration-none">Package</a></li>
                </ul>
                <div class="d-sm-none d-block ps-3">
                    <a href="http://globalwebcripto.com/"  target="_blank"  class="download_btn main_btn text-decoration-none">Sign In</a>
                    <a href="https://t.me/Crypto9588global"  target="_blank"  class="download_btn main_btn more_btn text-theme2 text-decoration-none">Support</a>
                </div>
            </div>
        </div>
    {/* <!-- Hero Section --> */}
    <div class="container-fluid hero-section position-relative">
        <div class="container inner_section h-100 d-flex align-items-center">
            <div class="row ">
                <div class="col-xl-6 col-lg-9 col-12 px-0 row mx-0 gap-md-4 gap-3 content" data-aos="fade-right" data-aos-duration="1000">
                    <div class="col-12 fs-25 lh-100 text-white fw-bold servicecontent d-flex align-items-end gap-2"><div class="serviceimg d-flex align-items-center"><img src="assets/img/icon/logo-icon.svg" class="w-100" alt="" /></div>GlobalWebCrypto</div>
                    <div class="col-12 mainheading fs-1 fw-bolder text-white mb-4"> Discover How to Earn Big
                        <a href="https://t.me/Crypto9588global"  target="_blank"  class="typewrite text-decoration-none text-theme2 text-center fw-bold" data-period="3000" data-type='[ "Returns Fast"]'>
                            <span class="wrap"></span>
                        </a>
                    </div>
                    <div class="brodline col-md-5 col-sm-6 text-white ps-0">
                        <ul class="fs-16">
                            <li>Lowest Commissions</li>
                            <li>Multiple Exchanges</li>
                            <li>All Service Free</li>
                            <li>24/7 Customer Support</li>
                        </ul>
                    </div>
                    <div class="brodline col-md-5 col-sm-6 d-md-block d-none text-white ps-0">
                        <ul class="fs-16">
                            <li>Easy Buy Bitcoin/USDT</li>
                            <li>Single Account</li>
                            <li>100% Security</li>
                            <li>Rupee-Powered</li>
                        </ul>
                    </div>
                    <div class="" >
                        <a href="https://t.me/Crypto9588global"  target="_blank"  class="download_btn main_btn more_btn text-theme2 text-decoration-none">Click Here</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Hero Section End --> */}

    {/* <!-- Brand Card --> */}
    <div class="container-fluid brandCard bg-black">
        <div class="container inner_section pt-5">
            <div class="row">
                <div class="col text-white" data-aos="fade-right" data-aos-duration="1000">
                    <div class="fs-30 fw-bold" >Join Us Globle Web Crypto</div>
                    {/* <!-- <div class="fs-30 fw-bold"><a href="tel: +180012001500" class="text-decoration-none text-white">+1800 1200 1500</a></div> --> */}
                </div>
                <div class="col-lg-auto mt-lg-0 mt-4" data-aos="fade-left" data-aos-duration="1000"><a href="https://t.me/Crypto9588global"  target="_blank"  class="download_btn main_btn text-decoration-none text-nowrap checkBtn">CLICK HERE</a></div>
                <div class="col-12 px-0 mx-0 row pt-5 cardSection">
                    <div class="col-lg-4 mb-lg-0 mb-4" data-aos="fade-up" data-aos-duration="1000">
                        <div class="card h-100 border-0 rounded-4">
                            <div class="card-body p-4">
                                <div class="card-img text-center"><img src="assets/img/icon/mision.svg" class="h-100" alt="img" /></div>
                                <h5 class="card-title text-center py-3 m-0 fs-25 fw-bold">Our Mission</h5>
                                <p class="card-text fs-16 lh-md text-justify">Empowering global users with secure, innovative, and accessible cryptocurrency services to enhance financial freedom.</p>
                                <a href="https://t.me/Crypto9588global"  target="_blank"  class="readMoreBtn d-flex align-items-center text-decoration-none text-theme2 fw-bold fs-14">Read More <img src="assets/img/icon/rightarrow.svg" class="ms-2" alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-lg-0 mb-4" data-aos="fade-up" data-aos-duration="1000">
                        <div class="card h-100 border-0 rounded-4 active">
                            <div class="card-body p-4">
                                <div class="card-img text-center"><img src="assets/img/icon/vision.svg" class="h-100" alt="img" /></div>
                                <h5 class="card-title text-center py-3 m-0 fs-25 fw-bold">Our Vision</h5>
                                <p class="card-text fs-16 lh-md text-justify">Leading worldwide adoption of cryptocurrencies, creating a seamless, inclusive, and decentralized financial ecosystem.</p>
                                <a href="https://t.me/Crypto9588global"  target="_blank"  class="readMoreBtn d-flex align-items-center text-decoration-none text-theme2 fw-bold fs-14">Read More <img src="assets/img/icon/rightarrow.svg" class="ms-2" alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-lg-0 mb-4" data-aos="fade-up" data-aos-duration="1000">
                        <div class="card h-100 border-0 rounded-4">
                            <div class="card-body p-4">
                                <div class="card-img text-center"><img src="assets/img/icon/smart-tv.svg" class="h-100" alt="img" /></div>
                                <h5 class="card-title text-center py-3 m-0 fs-25 fw-bold">Our Values</h5>
                                <p class="card-text fs-16 lh-md text-justify">Security, innovation, transparency, customer-centricity, integrity, inclusivity, and community engagement in all our cryptocurrency services.</p>
                                <a href="https://t.me/Crypto9588global"  target="_blank"  class="readMoreBtn d-flex align-items-center text-decoration-none text-theme2 fw-bold fs-14">Read More <img src="assets/img/icon/rightarrow.svg" class="ms-2" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Brand Card End--> */}

    {/* <!-- About Us Section --> */}
    <div class="container-fluid py-5  mt-5" id="about">
        <div class="container mt-md-5 mt-2 pt-lg-5">
            <div class="sectionheading mb-lg-5 mb-4 fs-2 fw-bold text-black" data-aos="fade-right" data-aos-duration="1000">About <span class="text-theme2">Us</span></div>
            <div class="row justify-content-between">
                <div class="col-xl-6 col-lg-7 position-relative order-lg-1 order-2 ps-md-0 ps-4" data-aos="fade-up-right" data-aos-duration="1000">
                    <h6 class="sideHeading typewrite m-0">About Us</h6>
                    <div class="fs-30 text-black fw-bold lh-150">An investment program that will change  <span class="text-theme2">your life</span> </div>
                    <div class="fs-16 lh-150 mt-4">Our strong trading and investment platform offers excellent charting features. It provides advanced tools to analyze markets thoroughly, including real-time charts for cryptocurrency market trends and live market updates. This helps users track Bitcoin prices easily and stay updated on important market changes.</div>
                    <div class="col-12 px-0 mx-0 row py-4 g-2">
                        {/* <!-- <div class="col-xl-6 col px-0 text-nowrap"> */}
                            {/* <div class="d-flex align-items-center text-black fw-bold fs-20"><span class="fw-bolder fs-30 text-theme2 me-1">4K</span> Ultra HD Quality</div> */}
                        {/* </div> --> */}
                        <div class="col-xl-6 col px-0 text-nowrap">
                            <div class="d-flex align-items-center text-black fw-bold fs-20"><span class="fw-bolder fs-30 text-theme2 me-2">4837 +</span> Trusted Clients</div>
                        </div>
                    </div>
                    <div class=""><a href="https://t.me/Crypto9588global"  target="_blank"  class="download_btn main_btn more_btn text-theme2 text-decoration-none">CLICK HERE</a></div>
                </div>
                <div class="col-lg-5 order-lg-2 order-1 mb-lg-0 mb-4" data-aos="fade-up-left" data-aos-duration="1000">
                    <div class="rounded-4 overflow-hidden"><img src="assets/img/index/aboutus.jpg" alt="" class="w-100"/></div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About Us Section End--> */}


    {/* <!-- Why Choose Us Section --> */}
    <div class="container-fluid py-md-5 whychooseusSection" id="whyus">
        <div class="container inner_section">
            <div class="sectionheading mb-md-5 mb-4 fs-2 fw-bold text-black" data-aos="fade-right" data-aos-duration="1000">Why Choose <span class="text-theme2">Us</span></div>
            <div class="row pt-4 justify-content-between">
                <div class="col-xl-5 col-lg-6 mb-lg-0 mb-4 leftSide position-relative" data-aos="zoom-in-right" data-aos-duration="1000">
                    <div class="rounded-4 userImg position-relative h-100"><img src="assets/img/index/whychooseus.jpg" alt="" class="w-100 h-100 rounded-4"/></div>
                    <div class="text-center card d-inline-block border-0 bg-white position-absolute ratings">
                        <div class="card-body">
                            <div class="fs-30 text-theme2 fw-bolder userrating">4.5</div>
                            <div class="text-black fs-20 fw-bold ratingCustomer">Rating Customer</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 ps-xl-2 ps-lg-5 position-relative contentSide" data-aos="zoom-in-left" data-aos-duration="1000">
                    <div class="fs-30 text-black fw-bold lh-120">Customer <span class="text-theme2">Satisfaction</span> Is Our Goal</div>
                    <div class="fs-16 lh-150 mt-4">
                        Why GlobalWebCrypto is the best crypto trading platform in Crypto World?
                        At GlobleWebCrypto, your satisfaction is our top priority. We strive to provide exceptional service, secure transactions, and innovative solutions to meet your cryptocurrency needs. Our dedicated support team is always here to assist you, ensuring a seamless and satisfying experience every step of the way.
                    </div>
                    <div class="col-12 px-0 mx-0 row pt-5 py-4 gap-4 whychooseSide">
                        <div class="col-auto px-0">
                            <div class="monyIcone"><img src="assets/img/icon/save-money.svg" alt="" class="h-100"/></div>
                        </div>
                        <div class="col px-0">
                            <div class="text-black fw-bold fs-25">Affordable Offer</div>
                            <div class="fs-16">Get 20% extra coin value with every transaction. Exceptional savings on Bitcoin and USD Coin!</div>
                        </div>
                    </div>
                    <div class="col-12 px-0 mx-0 row pb-4 gap-4 whychooseSide">
                        <div class="col-auto px-0">
                            <div class="monyIcone"><img src="assets/img/icon/chat.svg" alt="" class="h-100"/></div>
                        </div>
                        <div class="col px-0">
                            <div class="text-black fw-bold fs-25">24/7 Support</div>
                            <div class="fs-16">Round-the-clock assistance via Telegram. We're here to help you anytime, day or night!</div>
                        </div>
                    </div>
                    <div class="col-12 px-0 mx-0 row  gap-4 whychooseSide">
                        <div class="col-auto px-0">
                            <div class="monyIcone"><img src="assets/img/icon/team.svg" alt="" class="h-100"/></div>
                        </div>
                        <div class="col px-0">
                            <div class="text-black fw-bold fs-25">Professional Team</div>
                            <div class="fs-16">Our expert team ensures top-tier service, guiding you through every step of your crypto journey.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Why Choose Us Section --> */}


    {/* <!-- Our Best Services Section --> */}
    <div class="container-fluid py-5 ourBestServices" id="service">
        <div class="container">
            <div class="row">
                <div class="col-12 text-md-center">
                    <div class="sectionheading  mb-4  fs-2 fw-bold text-black" data-aos="fade-right" data-aos-duration="1000">Our Best <span class="text-theme2">Services</span></div>
                    <div class="fw-bolder mb-md-4 mb-3 text-black fs-1 lh-120" data-aos="fade-left" data-aos-duration="1000">Experience The Magic Of Trading</div>
                    <div class="fs-16 text-dark" data-aos="fade-right" data-aos-duration="1000">At GlobleWebCrypto, we offer a seamless, secure, and innovative platform for trading Bitcoin and USD Coin. Unlock the potential of cryptocurrencies with our user-friendly interface, competitive rates, and expert support. Join us and experience the future of trading today.</div>
                </div>
                <div class="col-12 px-0 mx-0 g-4 row  cardSection">
                    <div class="col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1000">
                        <div class="card h-100 border-0 rounded-4">
                            <div class="card-body py-lg-5 p-4">
                                <div class="card-img text-center"><img src="assets/img/icon/btc.svg" class="h-100" alt="img"/></div>
                                <h5 class="card-title text-center py-4 m-0 fs-25 fw-bold text-black">Bitcoin (BTC)</h5>
                                <p class="card-text fs-16 lh-md text-justify">Experience the power of Bitcoin with GlobleWebCrypto. We offer a comprehensive suite of services for Bitcoin, the pioneering cryptocurrency. Whether you're looking to buy, sell, or securely store Bitcoin, our platform provides a seamless and user-friendly experience. Benefit from our competitive rates, secure transactions, and dedicated support as you navigate the world of Bitcoin.</p>
                                <a href="https://t.me/Crypto9588global"  target="_blank"  class="readMoreBtn d-flex align-items-center text-decoration-none text-theme2 fw-bold fs-14">View Detail <img src="assets/img/icon/rightarrow.svg" class="ms-2" alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1000">
                        <div class="card h-100 border-0 rounded-4">
                            <div class="card-body py-lg-5 p-4">
                                <div class="card-img text-center"><img src="assets/img/icon/usdt.svg" class="h-100" alt="img"/></div>
                                <h5 class="card-title text-center py-4 m-0 fs-25 fw-bold text-black">USD Coin (USDT)</h5>
                                <p class="card-text fs-16 lh-md text-justify">Explore the stability and reliability of USD Coin on GlobleWebCrypto. As a fully-backed stablecoin, USDT offers a 1:1 value with the US Dollar, making it an ideal choice for transactions, savings, and trading. Our services include easy buying, selling, and secure storage options for USDC. Enjoy the advantages of a stable digital currency with our transparent and efficient platform.</p>
                                <a href="https://t.me/Crypto9588global"  target="_blank"  class="readMoreBtn d-flex align-items-center text-decoration-none text-theme2 fw-bold fs-14">View Detail <img src="assets/img/icon/rightarrow.svg" class="ms-2" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Our Best Services Section End--> */}

    {/* <!-- Promo Code Section --> */}
    <div class="container-fluid discountSection my-md-5 mt-2 py-5">
        <div class="container inner_section my-5 py-md-5">
            <div class="row">
                <div class="col-12 fs-20 text-white fw-bolder mb-1" data-aos="fade-right" data-aos-duration="1000">PROMO</div>
                <div class="col-12 fs-20 fw-bold text-white mb-2" data-aos="fade-left" data-aos-duration="1000"> <span class="text-theme2">Get</span> 20% Extra Coin Value</div>
                <div class="col-lg-6 fs-1 fw-bold text-white lh-120 mb-4" data-aos="fade-right" data-aos-duration="1000">Try Our Bitcoin and USD Coin Services <span class="text-theme1"> $20 per month</span></div>
                <div class="col-lg-7 text-white fs-16 lh-150" data-aos="fade-left" data-aos-duration="1000">Discover the benefits of trading with GlobleWebCrypto. Enjoy 20% extra coin value on every transaction and experience seamless, secure, and innovative crypto services. Join us today and enhance your cryptocurrency journey with unmatched savings and top-tier support.</div>
            </div>
        </div>
    </div>
    {/* <!-- Promo Code Section End --> */}

    {/* <!-- Our Best Packages Section --> */}
    <div class="container-fluid py-5 packagesSection" id="packages">
        <div class="container inner_section">
            <div class="row">
                <div class="col-12 text-md-center">
                    <div class="sectionheading mb-4 fs-2 fw-bold text-black" data-aos="fade-right" data-aos-duration="1000">Our Best <span class="text-theme2">offers</span></div>
                    <div class="fw-bolder mb-md-4 mb-3 text-black fs-1 lh-120" data-aos="fade-left" data-aos-duration="1000">Choose Your Favorite Offers</div>
                    {/* <!-- <div class="fs-16 text-dark" data-aos="fade-right" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, aliquam laborum! Sunt tempora fugit aliquid.</div> --> */}
                </div>
                <div class="col-12 px-0 mx-0 g-4 row  cardSection">
                    <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                        <div class="card h-100 border-0 rounded-4">
                            <div class="card-body p-4 pt-5">
                                <div class="roundedprogress blue">
                                    <span class="progress-left">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <div class="progress-value fw-bold fs-2 d-flex align-items-center justify-content-center">$25</div>
                                </div>
                                <h5 class="card-title text-center py-3 m-0 fs-4 fw-bold">Basic Package</h5>
                                <div class="text-center fs-5 mb-3">BTC/USDT</div>
                                <div class="fs-2 text-center mb-3 fw-bolder text-theme2">Resive $30 Coin </div>
                                <div class="card-text fs-16 pb-3 text-center">
                                    <ul class="d-inline-block mx-auto text-start">
                                        <li>Extra 20% Resive</li>
                                        <li>24/7 Support</li>
                                        <li>Withdraw Time 24 Hours (Max)</li>
                                    </ul>
                                </div>
                                <div class="text-center my-3"><a href="https://t.me/Crypto9588global"  target="_blank"  class="download_btn main_btn more_btn text-theme2 text-decoration-none">Click Here</a></div>
                                <a href="https://t.me/Crypto9588global"  target="_blank"  class="readMoreBtn d-flex align-items-center text-decoration-none text-theme2 fw-bold fs-14">View Detail <img src="assets/img/icon/rightarrow.svg" class="ms-2" alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                        <div class="card h-100 border-0 rounded-4 active">
                            <div class="card-body p-4 pt-5">
                                <div class="roundedprogress blue">
                                    <span class="progress-left">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <div class="progress-value fw-bold fs-2 d-flex align-items-center justify-content-center">$125</div>
                                </div>
                                <h5 class="card-title text-center py-3 m-0 fs-4 fw-bold"> Premium Package </h5>
                                <div class="text-center fs-5 mb-3">BTC/USDT</div>
                                <div class="fs-2 text-center mb-3 fw-bolder text-theme2">Resive $150 Coin</div>
                                <div class="card-text fs-16 pb-3 text-center">
                                    <ul class="d-inline-block mx-auto text-start">
                                        <li>Extra 20% Resive</li>
                                        <li>24/7 Support</li>
                                        <li>Withdraw Time 24 Hours (Max)</li>
                                    </ul>
                                </div>
                                <div class="text-center my-3"><a href="https://t.me/Crypto9588global"  target="_blank"  class="download_btn main_btn text-decoration-none">Click Here</a></div>
                                <a href="https://t.me/Crypto9588global"  target="_blank"  class="readMoreBtn d-flex align-items-center text-decoration-none text-theme2 fw-bold fs-14">View Detail <img src="assets/img/icon/rightarrow.svg" class="ms-2" alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                        <div class="card h-100 border-0 rounded-4">
                            <div class="card-body p-4 pt-5">
                                <div class="roundedprogress blue">
                                    <span class="progress-left">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <div class="progress-value fw-bold fs-2 d-flex align-items-center justify-content-center">$50</div>
                                </div>
                                <h5 class="card-title text-center py-3 m-0 fs-4 fw-bold">Stendard Package</h5>
                                <div class="text-center fs-5 mb-3">BTC/USDT</div>
                                <div class="fs-2 text-center mb-3 fw-bolder text-theme2">Resive $60 Coin</div>
                                <div class="card-text fs-16 pb-3 text-center">
                                    <ul class="d-inline-block mx-auto text-start">
                                        <li>Extra 20% Resive</li>
                                        <li>24/7 Support</li>
                                        <li>Withdraw Time 24 Hours (Max)</li>
                                    </ul>
                                </div>
                                <div class="text-center my-3"><a href="https://t.me/Crypto9588global"  target="_blank"  class="download_btn main_btn more_btn text-theme2 text-decoration-none">Click Here</a></div>
                                <a href="https://t.me/Crypto9588global"  target="_blank"  class="readMoreBtn d-flex align-items-center text-decoration-none text-theme2 fw-bold fs-14">View Detail <img src="assets/img/icon/rightarrow.svg" class="ms-2" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Our Best Packages Section End--> */}


    {/* <!-- Client Questions Section --> */}
    <div class="container-fluid py-5 mb-md-5 whychooseusSection packageClientSection" id="faq">
        <div class="container inner_section">
            <div class="sectionheading mb-md-5 mb-4 fs-2 fw-bold text-black d-lg-none" data-aos="fade-right" data-aos-duration="1000">Client <span class="text-theme2">Inquries</span></div>
            <div class="row pt-4 justify-content-between">
                <div class="col-xl-5 col-lg-6 mb-lg-0 mb-4 leftSide position-relative" data-aos="zoom-in-right" data-aos-duration="1000">
                    <div class="rounded-4 userImg position-relative h-100"><img src="assets/img/package/Use-data-User.jpg" alt="" class="w-100 h-100 rounded-4" /></div>
                    <div class="text-center card d-inline-block border-0 bg-white position-absolute ratings">
                        <div class="card-body px-4">
                            <div class="fs-30 text-theme2 fw-bolder userrating">4.9</div>
                            <div class="text-black fs-20 fw-bold ratingCustomer">Rating Clients</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 ps-xl-2 ps-lg-5 position-relative contentSide" data-aos="fade-left" data-aos-duration="1000">
                    <div class="sectionheading mb-4 fs-2 fw-bold text-black d-lg-inline-block d-none">Client <span class="text-theme2">Inquries</span></div>
                    <div class="fs-30 text-black fw-bold lh-150">What is GlobleWebCrypto?</div>
                    <div class="fs-16 lh-150 my-4">GlobleWebCrypto is a leading cryptocurrency service provider offering secure, user-friendly platforms for trading Bitcoin and USD Coin. Our mission is to enhance financial freedom through innovative and accessible digital currency solutions.</div>
                    <div class="accordion accordion-flush " id="accordionFlushExample">
                        <div class="accordion-item border-0 mb-3" data-aos="fade-left" data-aos-duration="1000">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button text-black fs-16 shadow-none border-0 px-0 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                    What cryptocurrencies can I trade on GlobleWebCrypto?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body fs-14 text-muted fs-normal px-0">You can trade Bitcoin (BTC) and USD Coin (USDC) on our platform. We provide competitive rates, secure transactions, and top-tier support for these cryptocurrencies.</div>
                            </div>
                        </div>
                        <div class="accordion-item border-0 mb-3" data-aos="fade-right" data-aos-duration="1000">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button text-black fs-16 shadow-none border-0 px-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    What does the 20% extra coin value offer mean?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body fs-14 text-muted fs-normal px-0">With our special promotion, you receive 20% extra coin value on every transaction. This means you get more cryptocurrency for your money, making your investments more valuable.</div>
                            </div>
                        </div>
                        <div class="accordion-item border-0 mb-3" data-aos="fade-left" data-aos-duration="1000">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button text-black fs-16 shadow-none border-0 px-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    How do I get started with GlobleWebCrypto?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body fs-14 text-muted fs-normal px-0">Getting started is easy. Simply sign up on our website, complete the verification process, and you can begin trading Bitcoin and USD Coin immediately.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Client Questions Section End--> */}

    {/* <!-- Contact Us Section --> */}
    <div class="container-fluid py-5 mb-5 contactsSection" id="contact">
        <div class="container inner_section">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="sectionheading mb-4 fs-2 fw-bold text-black" data-aos="fade-right" data-aos-duration="1000">How To <span class="text-theme2">Find Us</span></div>
                    <div class="fw-bolder mb-md-4 mb-3 text-black fs-1 lh-120" data-aos="fade-left" data-aos-duration="1000">Our Contact</div>
                </div>
                <div class="col-12 px-0 m-0 g-4 row cardsection" data-aos="fade-up" data-aos-duration="1000">
                    <div class="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration="1000">
                        <div class="card px-0 py-3 border-0 rounded-0 shadow-none h-100">
                            <div class="card-body mb-3 p-0 position-relative d-flex justify-content-center">
                                <a href="https://t.me/Crypto9588global"  target="_blank"  class="text-decoration-none rounded-circle p-4 chooseList bg-white d-flex align-items-center justify-content-center"><img src="assets/img/icon/telegram.svg" alt="location" class="w-100" /></a>
                                <span class="position-absolute dashBorder w-100"></span>
                            </div>
                            <div class="subBody text-center">
                                <div class="text-black fw-bold fs-4 mb-2">Telegram</div>
                                <div class="text-muted fs-16 fw-normal">@Crypto9588global</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration="1000">
                        <div class="card px-0 py-3 border-0 rounded-0 shadow-none h-100">
                            <div class="card-body mb-3 p-0 position-relative d-flex justify-content-center">
                                <a target="_blank" href="https://www.google.com/maps/place/123+Street+Rd,+West+Chester,+PA+19382,+USA/@39.921343,-75.5757443,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6f057e337ceb1:0xf88e9358177cf5d5!8m2!3d39.9213389!4d-75.5735556" class="text-decoration-none rounded-circle p-4 chooseList bg-white d-flex align-items-center justify-content-center"><img src="assets/img/icon/location.svg" alt="location" class="w-100" /></a>
                                <span class="position-absolute dashBorder w-100"></span>
                            </div>
                            <div class="subBody text-center">
                                <div class="text-black fw-bold fs-4 mb-2">Address</div>
                                <div class="text-muted fs-16 fw-normal">123 Anywhere Street,Somewhere.</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12" data-aos="fade-left" data-aos-duration="1000">
                        <div class="card px-0 py-3 border-0 rounded-0 shadow-none h-100">
                            <div class="card-body mb-3 p-0 position-relative d-flex justify-content-center">
                                <a href="https://t.me/Crypto9588global"  target="_blank"  class="text-decoration-none rounded-circle p-4 chooseList bg-white d-flex align-items-center justify-content-center"><img src="assets/img/icon/clock.svg" alt="location" class="w-100" /></a>
                                <span class="position-absolute dashBorder w-100"></span>
                            </div>
                            <div class="subBody text-center">
                                <div class="text-black fw-bold fs-4 mb-2">Opening Hours</div>
                                <div class="text-muted fs-16 fw-normal">24/7 Support</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- <div class="col-12 text-center fs-20 text-black mt-md-5" data-aos="fade-right" data-aos-duration="1000">Trusted Over <span class="text-theme2">2489+</span> Companies in the World</div> --> */}
            </div>
        </div>
    </div>
    {/* <!-- Contact Us Section End--> */}
    <footer class="footer_section pt-5" data-aos="fade-down" data-aos-duration="1000">
        <div class="container-fluid inner_section pt-5 position-relative"  >
            <div class="container sub_fluid position-relative" >
                <div class="row g-4">
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="footer_box card border-0 shadow rounded-4 bg-dark">
                            <div class="card-body py-5">
                                <div class="footerlogo text-center mb-3"><img src="assets/img/header/logo.svg" alt="" /></div>
                                <p class="text-secondary fs-14">24/7 support on Telegram for all your questions and issues.</p>
                                <ul class="linksfooter list-unstyled p-0">
                                    <li class="d-flex align-items-start mb-2 gap-2"><div class="iconImg d-inline-block"><img src="assets/img/icon/location.svg" alt="" class="w-100"/></div><a href="https://t.me/Crypto9588global"  target="_blank"  class="text-decoration-none text-white fs-14 d-block">123 Anywhere Street,Somewhere.</a></li>
                                    <li class="d-flex align-items-start mb-2 gap-2"><div class="iconImg d-inline-block"><img src="assets/img/icon/calling.svg" alt="" class="w-100"/></div><a href="tel: +180012001500" class="text-decoration-none text-white fs-14 d-block">+1800 1200 1500</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="footer_box">
                            <h2 class="box_head inner_heading text-white fw-bold mb-3 fs-20">Quick <span class="text-theme1">Links</span></h2>
                            <ul class="links_footer list-unstyled p-0">
                                <li><a href="#about" class="text-decoration-none text-white fs-14 mb-1 d-inline-block"><i class="me-1 imgr img-angle-double-right"></i>About Us</a></li>
                                <li><a href="#service" class="text-decoration-none text-white fs-14 mb-1 d-inline-block"><i class="me-1 imgr img-angle-double-right"></i>Services</a></li>
                                <li><a href="#whyus" class="text-decoration-none text-white fs-14 mb-1 d-inline-block"><i class="me-1 imgr img-angle-double-right"></i>Why Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="footer_box">
                            <h2 class="box_head inner_heading text-white fw-bold mb-3 fs-20">Useful <span class="text-theme1">Links</span></h2>
                            <ul class="links_footer list-unstyled p-0">
                                <li><a href="#contact" class="text-decoration-none text-white fs-14 mb-1 d-inline-block"><i class="me-1 imgr img-angle-double-right"></i>Support</a></li>
                                <li><a href="#packages" class="text-decoration-none text-white fs-14 mb-1 d-inline-block"><i class="me-1 imgr img-angle-double-right"></i>Packages</a></li>
                                <li><a href="#faq" class="text-decoration-none text-white fs-14 mb-1 d-inline-block"><i class="me-1 imgr img-angle-double-right"></i>FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="footer_box">
                            <h2 class="box_head inner_heading text-white fw-bold mb-3 fs-20">News <span class="text-theme1">letter</span></h2>
                            <div class="social_icon">
                                <ul class="socillinkfooter list-unstyled p-0 d-flex align-items-center gap-3">
                                    <li><a href="https://www.facebook.com/" class="text-decoration-none text-white mb-1 p-2 bg-white text-theme1 d-flex align-items-center justify-content-center"><img src="assets/img/icon/fb.svg" alt="" class="w-100 h-100"/></a></li>
                                    <li><a href="https://twitter.com/" class="text-decoration-none text-white mb-1 p-2 bg-white text-theme1 d-flex align-items-center justify-content-center"><img src="assets/img/icon/twitter.svg" alt="" class="w-100 h-100"/></a></li>
                                    <li><a href="https://www.instagram.com/" class="text-decoration-none text-white mb-1 p-2 bg-white text-theme1 d-flex align-items-center justify-content-center"><img src="assets/img/icon/instagram.svg" alt="" class="w-100 h-100"/></a></li>
                                    <li><a href="https://www.linkedin.com/" class="text-decoration-none text-white mb-1 p-2 bg-white text-theme1 d-flex align-items-center justify-content-center"><img src="assets/img/icon/linkedin.svg" alt="" class="w-100 h-100"/></a></li>
                                </ul>
                            </div>
                            <div class="subscribeinput">
                                <input type="email" class="form-control shadow-none border-0 rounded-0 text-white fs-16 fw-normal bg-transparent" />
                                <div class="mt-4"><a href="https://t.me/Crypto9588global"  target="_blank"  class="download_btn main_btn more_btn text-theme2 text-decoration-none">Subscribe</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-4 mt-5 gap-2 copyright">
                    <div class="fs-12 text-secondary col text-sm-start text-center">Broadband & Internet Service Provider</div>
                    <div class="fs-12 text-secondary col-sm-auto text-sm-end text-center">Copyright © 2023 All rights reserved.</div>
                </div>
            </div>
        </div>
    </footer>
       </div>
    </>
    )
}

export default First