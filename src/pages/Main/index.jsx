import React from 'react'
import Chart from '../../component/Chart/Candlestick';

const index = () => {
    return (
        <>
          <div className="container-fluid maindashboard overflow-hidden">
            <div className="h-100 overflow-y-auto overflow-x-hidden">
              <div className="row h-100 flex-column flex-nowrap g-2">
                <div className="col-12 px-0">
                  <nav className="navbar header navbar-expand-lg px-3">
                    <a className="navbar-brand d-flex" href="index.html"><img src="assets/img/logo.svg" className="object-contain h-100" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav gap-3 align-items-center me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="javascript:;">Spot</a></li>
                        <li className="nav-item"><a className="nav-link" href="javascript:;">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="javascript:;">Orders</a></li>
                        <li className="nav-item"><a className="nav-link" href="javascript:;">Wallet &amp; Fees</a></li>
                        <li className="nav-item"><a className="nav-link deposit text-uppercase fw-medium disabled" aria-disabled="true">Crypto Deposit</a></li>
                      </ul>
                      <ul className="navbar-nav gap-3 align-items-center">
                        <li className="nav-item"><a className="nav-link" href="javascript:;">Contests</a></li>
                        <li className="nav-item"><a className="nav-link" href="javascript:;">Help Center</a></li>
                        <li className="nav-item"><a className="nav-link" href="javascript:;"><span><img src="assets/img/icon/contact.svg" alt="contact" className="object-contain w-100" /></span></a></li>
                        <li className="nav-item"><a className="text-uppercase fw-medium btn btn-theme2 themebtn" href="javascript:;" data-bs-toggle="modal" data-bs-target="#login">Login / Sign up</a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="col-12 h-100 flex-lg-fill overflow-lg-hidden">
                  <div className="row h-100 gx-2">
                    {/* left Side Start */}
                    <div className="col-12 col-lg-10 h-100 overflow-lg-y-auto px-0">
                      <div className="row h-100 flex-column flex-nowrap row-gap-2 mx-0 gx-2">
                        <div className="col-12 d-flex flex-column row-gap-2">
                          {/* trending cripto bar   */}
                          <div className="trendingcripto bg-theme1 d-flex align-items-center gap-3" id="trendingcripto">
                            <button className="criptoFilter shadow-none border-0 rounded-1 text-white" id="criptoFilter"><span className="contant text-nowrap">top losers</span><img src="assets/img/icon/Switchsvg.svg" alt="Switchsvg" /></button>
                            <ul className="trendingcripto-list gap-3 m-0 p-0 align-items-center px-2 topcripto">
                              <li className="list-item d-flex align-items-center gap-2">POWR/INR <span className="prich">₹33.524</span> <span className="prich text-theme3">+21.90%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">UMA/INR <span className="prich">₹83.24</span> <span className="prich text-theme3">+51.90%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">IMX/INR <span className="prich">₹58.54</span> <span className="prich text-theme3">+52.70%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">BCH/INR <span className="prich">₹43.67</span> <span className="prich text-theme3">+41.60%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">POLYX/INR <span className="prich">₹55.504</span> <span className="prich text-theme3">+84.32%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">POWR/INR <span className="prich">₹33.524</span> <span className="prich text-theme3">+21.90%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">UMA/INR <span className="prich">₹83.24</span> <span className="prich text-theme3">+51.90%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">IMX/INR <span className="prich">₹58.54</span> <span className="prich text-theme3">+52.70%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">BCH/INR <span className="prich">₹43.67</span> <span className="prich text-theme3">+41.60%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">POLYX/INR <span className="prich">₹55.504</span> <span className="prich text-theme3">+84.32%</span></li>
                            </ul>
                            <ul className="trendingcripto-list gap-3 m-0 p-0 align-items-center px-2 losercripto">
                              <li className="list-item d-flex align-items-center gap-2">REQ/INR <span className="prich">₹9.943</span> <span className="prich text-theme4">-10.90%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">BONK/INR <span className="prich">₹53.524</span> <span className="prich text-theme4">-5.50%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">ICP/INR <span className="prich">₹83.524</span> <span className="prich text-theme4">-21.57%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">JTO/INR <span className="prich">₹35.14</span> <span className="prich text-theme4">-50.18%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">POWR/INR <span className="prich">₹18.524</span> <span className="prich text-theme4">-14.88%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">BONK/INR <span className="prich">₹10.182</span> <span className="prich text-theme4">-25.70%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">ICP/INR <span className="prich">₹43.524</span> <span className="prich text-theme4">-43.40%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">JTO/INR <span className="prich">₹38.50</span> <span className="prich text-theme4">-21.90%</span></li>
                              <li className="list-item d-flex align-items-center gap-2">BONK/INR <span className="prich">₹33.524</span> <span className="prich text-theme4">-12.55%</span></li>
                            </ul>
                          </div>
                          <div className="row criptotiming-high g-2">
                            <div className="col-md-2">
                              <div className="carditem bg-theme1 rounded-1 d-flex justify-content-between gap-3 clickable" id="chart-crypto-switch">
                                <div className="leftside d-flex flex-column gap-1">
                                  <div className="criptoname text-theme2">BTC<span className="text-white-50">/INR</span> <img src="assets/img/icon/Star.svg" className="ms-2" alt="star" /></div>
                                  <div className="prich d-flex align-items-center gap-2">₹41,33,600 <span className="text-theme4">-0.67%</span></div>
                                </div>
                                <div className="rightside"><img src="assets/img/icon/right-arrow.svg" alt="arrow" /></div>
                              </div>
                            </div>
                            <div className="col-md-10">
                              <div className="bg-theme1 py3">
                                <div className="row gx-0">
                                  <div className="col">
                                    <div className="carditem miditems">
                                      <div className="leftside d-flex flex-column gap-1">
                                        <div className="criptoname text-white text-opacity-75">24h High</div>
                                        <div className="prich d-flex align-items-center gap-2">₹41,99,999 </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="carditem miditems">
                                      <div className="leftside d-flex flex-column gap-1">
                                        <div className="criptoname text-white text-opacity-75">24h Low</div>
                                        <div className="prich d-flex align-items-center gap-2">₹41,33,600 </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="carditem miditems">
                                      <div className="leftside d-flex flex-column gap-1">
                                        <div className="criptoname text-white text-opacity-75">24h Volume (BTC)</div>
                                        <div className="prich d-flex align-items-center gap-2">4.25806 </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="carditem miditems">
                                      <div className="leftside d-flex flex-column gap-1 ">
                                        <div className="criptoname text-white text-opacity-75">24h Volume (INR)</div>
                                        <div className="prich d-flex align-items-center gap-2">₹1,80,03,483.39</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="carditem miditems">
                                      <div className="leftside d-flex flex-column gap-1 border-0">
                                        <div className="criptoname text-white text-opacity-75">24h High</div>
                                        <div className="prich d-flex align-items-center gap-2">₹41,33,600 </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* trending cripto bar End  */}
                        </div>
                        <div className="col-12 h-100 flex-fill overflow-hidden">
                          <div className="h-100 overflow-y-auto overflow-x-hidden">
                            <div className="row h100 row-gap-2 cryptocoinspart chartpart gx-2 overflow-xhidden">
                              {/* cripto Side */}
                              <div className="col-12 col-sm-auto h-100 left-chart-crtpto" id="left-chart-crtpto">
                                <div className="row h-100 flex-column flex-nowrap">
                                  <div className="col-12">
                                    <div className="topheader p-2">
                                      <form className="d-flex" role="search">
                                        <input className="form-control searchbar shadow-none text-white" type="search" placeholder="Search" aria-label="Search" />
                                      </form>
                                      <div className="navs d-flex align-items-center gap-2 mb-2 mt-3">
                                        <span className="star-fill"><img src="assets/img/icon/Star-fill.svg" alt="Star-fill" /></span>
                                        <ul className="nav nav-pills m-0 w-100 d-flex align-items-center justify-content-around" id="pills-tab" role="tablist">
                                          <li className="nav-item" role="presentation">
                                            <button className="nav-link rounded-0 bg-transparent active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All Coins</button>
                                          </li>
                                          <li className="nav-item" role="presentation">
                                            <button className="nav-link rounded-0 bg-transparent" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Innovation Zone</button>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12 h-100 flex-fill overflow-y-auto">
                                    <div className="tab-content" id="pills-tabContent">
                                      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                        <div className="topheader">
                                          <div className="card coincard border-0 rounded-0 active">
                                            <div className="card-body d-flex align-items-center justify-content-between">
                                              <div className="cryptoside d-flex align-items-center gap-2">
                                                <div className="starimg d-inline-flex"><img src="assets/img/icon/star-gray.svg" alt="star" /></div>
                                                <div className="coinname d-flex align-items-center gap-2">
                                                  <div className="coinimg"><img src="assets/img/btc.png" alt="btc" /></div>
                                                  <div className="coins">
                                                    <div className="text-white fs-10 d-flex align-items-center">BTC<span className="text-white text-opacity-75 me-1">/INR</span> <span className="exchange d-inline-flex"><img src="assets/img/icon/Switchsvg.svg" alt="star" /></span></div>
                                                    <div className="partyname fs-10">CoinSwitchX + 1</div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="coinamount text-end">
                                                <div className="text-white fs-10">₹44,78,961</div>
                                                <div className="text-theme3 fs-10">+2.72%</div>
                                              </div>
                                            </div>
                                            <a href="javascript:;" className="stretched-link" />
                                          </div>
                                          <div className="card coincard border-0 rounded-0">
                                            <div className="card-body d-flex align-items-center justify-content-between">
                                              <div className="cryptoside d-flex align-items-center gap-2">
                                                <div className="starimg d-inline-flex"><img src="assets/img/icon/star-gray.svg" alt="star" /></div>
                                                <div className="coinname d-flex align-items-center gap-2">
                                                  <div className="coinimg"><img src="assets/img/btc.png" alt="btc" /></div>
                                                  <div className="coins">
                                                    <div className="text-white fs-10 d-flex align-items-center">BTC<span className="text-white text-opacity-75 me-1">/INR</span> <span className="exchange d-inline-flex"><img src="assets/img/icon/Switchsvg.svg" alt="star" /></span></div>
                                                    <div className="partyname fs-10">CoinSwitchX + 1</div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="coinamount text-end">
                                                <div className="text-white fs-10">₹44,78,961</div>
                                                <div className="text-theme4 fs-10">+1.72%</div>
                                              </div>
                                            </div>
                                            <a href="javascript:;" className="stretched-link" />
                                          </div>
                                          <div className="card coincard border-0 rounded-0">
                                            <div className="card-body d-flex align-items-center justify-content-between">
                                              <div className="cryptoside d-flex align-items-center gap-2">
                                                <div className="starimg d-inline-flex"><img src="assets/img/icon/star-gray.svg" alt="star" /></div>
                                                <div className="coinname d-flex align-items-center gap-2">
                                                  <div className="coinimg"><img src="assets/img/btc.png" alt="btc" /></div>
                                                  <div className="coins">
                                                    <div className="text-white fs-10 d-flex align-items-center">BTC<span className="text-white text-opacity-75 me-1">/INR</span> <span className="exchange d-inline-flex"><img src="assets/img/icon/Switchsvg.svg" alt="star" /></span></div>
                                                    <div className="partyname fs-10">CoinSwitchX + 1</div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="coinamount text-end">
                                                <div className="text-white fs-10">₹44,78,961</div>
                                                <div className="text-theme3 fs-10">+2.02%</div>
                                              </div>
                                            </div>
                                            <a href="javascript:;" className="stretched-link" />
                                          </div>
                                          <div className="card coincard border-0 rounded-0">
                                            <div className="card-body d-flex align-items-center justify-content-between">
                                              <div className="cryptoside d-flex align-items-center gap-2">
                                                <div className="starimg d-inline-flex"><img src="assets/img/icon/star-gray.svg" alt="star" /></div>
                                                <div className="coinname d-flex align-items-center gap-2">
                                                  <div className="coinimg"><img src="assets/img/btc.png" alt="btc" /></div>
                                                  <div className="coins">
                                                    <div className="text-white fs-10 d-flex align-items-center">BTC<span className="text-white text-opacity-75 me-1">/INR</span> <span className="exchange d-inline-flex"><img src="assets/img/icon/Switchsvg.svg" alt="star" /></span></div>
                                                    <div className="partyname fs-10">CoinSwitchX + 1</div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="coinamount text-end">
                                                <div className="text-white fs-10">₹44,78,961</div>
                                                <div className="text-theme4 fs-10">+1.72%</div>
                                              </div>
                                            </div>
                                            <a href="javascript:;" className="stretched-link" />
                                          </div>
                                          <div className="card coincard border-0 rounded-0">
                                            <div className="card-body d-flex align-items-center justify-content-between">
                                              <div className="cryptoside d-flex align-items-center gap-2">
                                                <div className="starimg d-inline-flex"><img src="assets/img/icon/star-gray.svg" alt="star" /></div>
                                                <div className="coinname d-flex align-items-center gap-2">
                                                  <div className="coinimg"><img src="assets/img/btc.png" alt="btc" /></div>
                                                  <div className="coins">
                                                    <div className="text-white fs-10 d-flex align-items-center">BTC<span className="text-white text-opacity-75 me-1">/INR</span> <span className="exchange d-inline-flex"><img src="assets/img/icon/Switchsvg.svg" alt="star" /></span></div>
                                                    <div className="partyname fs-10">CoinSwitchX + 1</div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="coinamount text-end">
                                                <div className="text-white fs-10">₹44,78,961</div>
                                                <div className="text-theme3 fs-10">+2.02%</div>
                                              </div>
                                            </div>
                                            <a href="javascript:;" className="stretched-link" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>34</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* cripto Side End */}
                              {/* chart side */}
                              <div className="col-12 col-sm h-100 overflow-y-auto chartHeight">
                                <div className="candelChart">
                                  {/* <div className="chart bg-theme1 d-flex align-items-center overflow-hidden" id="chart" /> */}
                                  <div className="chart bg-theme1  overflow-hidden">
                                    <Chart/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row my-2">
                              <div className="col-12">
                                <div className="row g-2">
                                  <div className="col-md-8">
                                    <div className="videoside bg-theme1 h-100">
                                      <div className="text-center fw-medium fs-14 text-white text-opacity-75 p-2 border-bottom-light">Get to Know CoinSwitch Pro Better</div>
                                      <div className="videos text-center py-4">
                                        <iframe className="w-100" width={560} height={315} src="https://www.youtube.com/embed/orbkg5JH9C8?si=yvkRG2HegzATVoxl" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="lasttrade bg-theme1 h-100">
                                      <div className="fw-medium fs-14 text-white text-opacity-75 p-2 border-bottom-light">Last Trades</div>
                                      <div className="responsive-table lasttradetable">
                                        <table className="table table-borderless align-middle">
                                          <thead>
                                            <tr className="border-bottom-light">
                                              <th className="text-white fw-normal fs-12">Prich</th>
                                              <th className="text-white fw-normal fs-12 text-capitalize"><button className="criptoFilter small-fs shadow-none border-0 rounded-1 text-white text-opacity-75 bg-transparent p-0" id="lasttradeCripto"><span className="quantitycrypto text-nowrap">amount</span><img src="assets/img/icon/Switchsvg.svg" alt="Switchsvg" /></button></th>
                                              <th className="text-white fw-normal fs-12">Time</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td className="text-theme4 fs-12">₹43,36,716</td>
                                              <td className="text-white fs-12 tradamount">₹477.04</td>
                                              <td className="text-white fs-12">17:38:52</td>
                                            </tr>
                                            <tr>
                                              <td className="text-theme3 fs-12">₹43,36,716</td>
                                              <td className="text-white fs-12">₹477.04</td>
                                              <td className="text-white fs-12">17:38:52</td>
                                            </tr>
                                            <tr>
                                              <td className="text-theme4 fs-12">₹43,36,716</td>
                                              <td className="text-white fs-12">₹477.04</td>
                                              <td className="text-white fs-12">17:38:52</td>
                                            </tr>
                                            <tr>
                                              <td className="text-theme4 fs-12">₹43,36,716</td>
                                              <td className="text-white fs-12">₹477.04</td>
                                              <td className="text-white fs-12">17:38:52</td>
                                            </tr>
                                            <tr>
                                              <td className="text-theme3 fs-12">₹43,36,716</td>
                                              <td className="text-white fs-12">₹477.04</td>
                                              <td className="text-white fs-12">17:38:52</td>
                                            </tr>
                                            <tr>
                                              <td className="text-theme3 fs-12">₹43,36,716</td>
                                              <td className="text-white fs-12">₹477.04</td>
                                              <td className="text-white fs-12">17:38:52</td>
                                            </tr>
                                            <tr>
                                              <td className="text-theme3 fs-12">₹43,36,716</td>
                                              <td className="text-white fs-12">₹477.04</td>
                                              <td className="text-white fs-12">17:38:52</td>
                                            </tr>
                                            <tr>
                                              <td className="text-theme3 fs-12">₹43,36,716</td>
                                              <td className="text-white fs-12">₹477.04</td>
                                              <td className="text-white fs-12">17:38:52</td>
                                            </tr>
                                            <tr>
                                              <td className="text-theme4 fs-12">₹43,36,716</td>
                                              <td className="text-white fs-12">₹477.04</td>
                                              <td className="text-white fs-12">17:38:52</td>
                                            </tr>
                                            <tr>
                                              <td className="text-theme3 fs-12">₹43,36,716</td>
                                              <td className="text-white fs-12">₹477.04</td>
                                              <td className="text-white fs-12">17:38:52</td>
                                            </tr>
                                            <tr>
                                              <td className="text-theme4 fs-12">₹43,36,716</td>
                                              <td className="text-white fs-12">₹477.04</td>
                                              <td className="text-white fs-12">17:38:52</td>
                                            </tr>
                                            <tr>
                                              <td className="text-theme4 fs-12">₹43,36,716</td>
                                              <td className="text-white fs-12">₹477.04</td>
                                              <td className="text-white fs-12">17:38:52</td>
                                            </tr>
                                            <tr>
                                              <td className="text-theme3 fs-12">₹43,36,716</td>
                                              <td className="text-white fs-12">₹477.04</td>
                                              <td className="text-white fs-12">17:38:52</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
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
                    <div className="col-12 col-lg-2 h-100">
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
                              <li><button className="criptoFilter small-fs shadow-none border-0 rounded-1 text-white text-opacity-75 bg-transparent p-0" id="criptoQuantity"><span className="quantitycrypto text-nowrap">amount</span><img src="assets/img/icon/Switchsvg.svg" alt="Switchsvg" /></button></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12 h-100 flex-fill overflow-y-auto">
                          <div className="tab-content bg-theme1 pb-3" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home1-tab" tabIndex={0}>
                              <ul className="list-unstyled m-0 cryptoprichGroup border-bottom-light py-2 d-flex flex-column gap-1">
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '100%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '80%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '65%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '60%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹33,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,50,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '55%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '50%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '40%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '25%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '20%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹33,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,50,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '10%'}} />
                                  </div>
                                </li>
                              </ul>
                              <div className="d-flex align-items-center justify-content-between p-2 border-bottom-light">
                                <div className="fs-16 text-white fw-medium m-0">Spread</div>
                                <div cclass="fs-16 text-white fw-medium m-0">0.61%</div>
                              </div>
                              <ul className="list-unstyled m-0 cryptoprichGroup py-2 d-flex flex-column gap-1">
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '10%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '20%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹33,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,50,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '30%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '40%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '50%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹33,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,50,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '60%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '70%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '80%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '90%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '100%'}} />
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="tab-pane fade" id="pills-profile1" role="tabpanel" aria-labelledby="pills-profile1-tab" tabIndex={0}>
                              <div className="p-2 border-bottom-light">
                                <div className="fs-16 text-theme3 text-center fw-medium m-0">₹43,12,233</div>
                                {/* <div class="fs-16 text-theme4 text-center fw-medium m-0">₹43,12,233</div> */}
                              </div>
                              <ul className="list-unstyled m-0 cryptoprichGroup py-2 d-flex flex-column gap-1 border-bottom-light">
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '100%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '95%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '90%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '85%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹33,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,50,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '80%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '75%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '70%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '65%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '60%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹33,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,50,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '55%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '50%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '45%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '40%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '35%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹33,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,50,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '30%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '25%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '20%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '15%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '10%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme4">₹33,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,50,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={5} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar radzone ms-auto" style={{width: '5%'}} />
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact1-tab" tabIndex={0}>
                              <div className="p-2 border-bottom-light">
                                <div className="fs-16 text-theme3 text-center fw-medium m-0">₹43,12,233</div>
                                {/* <div class="fs-16 text-theme4 text-center fw-medium m-0">₹43,12,233</div> */}
                              </div>
                              <ul className="list-unstyled m-0 cryptoprichGroup py-2 d-flex flex-column gap-1">
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={5} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '5%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '10%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹33,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,50,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '15%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '20%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '25%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹33,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,50,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '30%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '35%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '40%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '45%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '50%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '55%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '60%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹33,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,50,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '65%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '70%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '75%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹33,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,50,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '80%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '85%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '90%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹43,47,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '95%'}} />
                                  </div>
                                </li>
                                <li className="cryptoamount">
                                  <div className="contantside d-flex justify-content-between align-items-center px-2">
                                    <span className="prich fs-12 text-theme3">₹42,57,878</span>
                                    <span className="amount fs-12 text-white">₹6,30,443.01</span>
                                  </div>
                                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar greenzone ms-auto" style={{width: '100%'}} />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default index