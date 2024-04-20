import React, { useState } from 'react';
import AdminAsideBar from '../../component/AdminAsideBar/AdminAsideBar'
import AdminHeader from '../../component/AdminHeader/AdminHeader'
import AdminTable from '../../component/AdminTable/AdminTable'
import Pagination from '../../component/Pagination/Pagination'
import HomeInfoCard from '../../component/HomeInfoCard/HomeInfoCard'
import ActivePopup from '../../component/Modal/ActivePopup';
import DeletePopup from '../../component/Modal/DeletePopup';
import WarningPopup from '../../component/Modal/WarningPopup';
const AdminHomePage = () => {

  // Toggle Class In Aside Bar
  const [isAsidebarActive, setIsAsidebarActive] = useState(false);
  const toggleAsidebar = () => {
      setIsAsidebarActive(!isAsidebarActive);
  };

  const usersHeaders = ['User Mob. No.', 'Password', 'Date', 'Account Status', 'Link'];
  const usersData = [
    ['9876543210', 'Maria@1234', 'Feb 15, 2024', <span className="badge bg-soft-success text-success"><span className="legend-indicator bg-success"></span>Active</span>, <a href="javascript:;" className="text-theme2">http://127.0.0.1:5500/admin.html</a>],
    ['9876543210', 'Maria@1234', 'Feb 15, 2024', <span className="badge bg-soft-success text-success"><span className="legend-indicator bg-success"></span>Active</span>, <a href="javascript:;" className="text-theme2">http://127.0.0.1:5500/admin.html</a>],
    ['9876543210', 'Maria@1234', 'Feb 15, 2024', <span className="badge bg-soft-success text-success"><span className="legend-indicator bg-success"></span>Active</span>, <a href="javascript:;" className="text-theme2">http://127.0.0.1:5500/admin.html</a>],
    ['9876543210', 'Maria@1234', 'Feb 15, 2024', <span className="badge bg-soft-danger text-danger"><span className="legend-indicator bg-danger"></span>Delete</span>, <a href="javascript:;" className="text-theme2">http://127.0.0.1:5500/admin.html</a>],
    ['9876543210', 'Maria@1234', 'Feb 15, 2024', <span className="badge bg-soft-success text-success"><span className="legend-indicator bg-success"></span>Active</span>, <a href="javascript:;" className="text-theme2">http://127.0.0.1:5500/admin.html</a>],
    ['9876543210', 'Maria@1234', 'Feb 15, 2024', <span className="badge bg-soft-success text-success"><span className="legend-indicator bg-success"></span>Active</span>, <a href="javascript:;" className="text-theme2">http://127.0.0.1:5500/admin.html</a>],
    ['9876543210', 'Maria@1234', 'Feb 15, 2024', <span className="badge bg-soft-warning text-warning"><span className="legend-indicator bg-warning"></span>Freeze</span>, <a href="javascript:;" className="text-theme2">http://127.0.0.1:5500/admin.html</a>],
    ['9876543210', 'Maria@1234', 'Feb 15, 2024', <span className="badge bg-soft-success text-success"><span className="legend-indicator bg-success"></span>Active</span>, <a href="javascript:;" className="text-theme2">http://127.0.0.1:5500/admin.html</a>],
    ['9876543210', 'Maria@1234', 'Feb 15, 2024', <span className="badge bg-soft-success text-success"><span className="legend-indicator bg-success"></span>Active</span>, <a href="javascript:;" className="text-theme2">http://127.0.0.1:5500/admin.html</a>],
  ];


  const [showActivePopup, setShowActivePopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showWarningPopup, setShowWarningPopup] = useState(false);

  const handleClose = () => {
    setShowActivePopup(false);
    setShowDeletePopup(false);
    setShowWarningPopup(false);
  };

  const handleShowActivePopup = () => setShowActivePopup(true);
  const handleShowDeletePopup = () => setShowDeletePopup(true);
  const handleShowWarningPopup = () => setShowWarningPopup(true);


  return (
        <>
          <div className="container-fluid vh-100 overflow-hidden">
              <div className="row h-100 flex-nowrap">
                      <AdminAsideBar isActive={isAsidebarActive}/>
                  <div className="col h-100 rightside">  
                      <div className="row h-100 flex-column flex-nowrap">
                          <AdminHeader onToggle={toggleAsidebar}/>
                          <div className="col-12 h-100 flex-fill overflow-y-auto px-0">
                              <div className="innerbody_part h-100">
                                  <div className="card h100 border-0 bg-transparent shadow-0">
                                      <div className="card-body h-100">
                                        <main id="main" className="main">
                                          <div className="pagetitle">
                                            <h3>Dashboard</h3>
                                            <nav>
                                              <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="admin.html" className="text-theme2">Home</a></li>
                                                <li className="breadcrumb-item active">Dashboard</li>
                                              </ol>
                                            </nav>
                                          </div>
                                            <section className="section dashboard">
                                              <div className="row">
                                                <div className="col-lg-12">
                                                  <div className="row row-gap-4"> 
                                                    <HomeInfoCard 
                                                      title="Total Users"
                                                      number="72,540"
                                                      svg={(
                                                        <span className="avatar-title bg-theme2 rounded-circle h-100 w-100 d-flex justify-content-center align-items-center text-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                        </span>
                                                      )}
                                                    />
                                                    <HomeInfoCard 
                                                      title="Total Money"
                                                      number="1,55,837"
                                                      svg={(
                                                        <span className="avatar-title bg-success rounded-circle h-100 w-100 d-flex justify-content-center align-items-center text-white">
                                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_37_2)"><path d="M12.7039 10.6556C9.92944 9.93444 9.03722 9.195 9.03722 8.03389C9.03722 6.70167 10.2656 5.76667 12.3372 5.76667C14.5128 5.76667 15.3194 6.80556 15.3928 8.33333H18.0939C18.0144 6.225 16.725 4.30611 14.1706 3.67667V1H10.5039V3.64C8.13278 4.15944 6.22611 5.68722 6.22611 8.05222C6.22611 10.8756 8.56667 12.2811 11.9706 13.1C15.0322 13.8333 15.6372 14.9028 15.6372 16.0517C15.6372 16.8889 15.0444 18.2333 12.3372 18.2333C9.81944 18.2333 8.82333 17.1028 8.695 15.6667H6C6.15278 18.3433 8.15111 19.8406 10.5039 20.3478V23H14.1706V20.3722C16.5478 19.9139 18.4483 18.5389 18.4483 16.0272C18.4483 12.5683 15.4783 11.3828 12.7039 10.6556Z" fill="white"/></g><defs><clipPath id="clip0_37_2"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>                                                                                                                                                                                                                                                 
                                                        </span>
                                                      )}
                                                    /> 
                                                    <HomeInfoCard 
                                                      title="Blocked Account"
                                                      number="129"
                                                      svg={(
                                                        <span className="avatar-title bg-danger rounded-circle h-100 w-100 d-flex justify-content-center align-items-center text-white">
                                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_38_14)"><path d="M12 2C6.475 2 2 6.475 2 12C2 17.525 6.475 22 12 22C17.525 22 22 17.525 22 12C22 6.475 17.525 2 12 2ZM4 12C4 7.58 7.58 4 12 4C13.85 4 15.545 4.635 16.9 5.685L5.685 16.9C4.635 15.545 4 13.85 4 12ZM12 20C10.15 20 8.455 19.365 7.1 18.315L18.315 7.1C19.365 8.455 20 10.15 20 12C20 16.42 16.42 20 12 20Z" fill="white"/></g><defs><clipPath id="clip0_38_14"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>                                                              
                                                        </span>
                                                      )}
                                                    /> 
                                                    <HomeInfoCard 
                                                      title="Freeze account"
                                                      number="28"
                                                      svg={(
                                                        <span className="avatar-title bg-theme1 rounded-circle h-100 w-100 d-flex justify-content-center align-items-center text-white">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2869 16.7585C18.4507 18.2047 17.2489 19.4056 15.8022 20.2408C14.3555 21.076 12.7146 21.5162 11.0441 21.5171C5.82286 21.5171 1.52686 17.2211 1.52686 11.9999C1.52686 6.77867 5.82368 2.48267 11.0441 2.48267C16.2645 2.48267 20.5613 6.77867 20.5613 11.9999" stroke="white" stroke-width="2" stroke-miterlimit="10"/><path d="M11.0441 7.44824C11.5928 7.44824 12.119 7.66622 12.507 8.05423C12.895 8.44223 13.113 8.96848 13.113 9.51721V12.4138H8.9751V9.51721C8.9751 8.96848 9.19308 8.44223 9.58108 8.05423C9.96909 7.66622 10.4953 7.44824 11.0441 7.44824Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/><path d="M14.768 17.3793H7.31977C7.10028 17.3793 6.88978 17.2921 6.73458 17.1369C6.57938 16.9817 6.49219 16.7712 6.49219 16.5517V13.2414C6.49219 12.8024 6.66657 12.3814 6.97698 12.071C7.28738 11.7606 7.70838 11.5862 8.14736 11.5862H13.9405C14.3794 11.5862 14.8004 11.7606 15.1108 12.071C15.4213 12.3814 15.5956 12.8024 15.5956 13.2414V16.5517C15.5956 16.7712 15.5084 16.9817 15.3532 17.1369C15.198 17.2921 14.9875 17.3793 14.768 17.3793Z" fill="white"/><path d="M22.1587 11.5862C22.214 11.5864 22.2684 11.6012 22.3162 11.6291C22.364 11.657 22.4035 11.697 22.4309 11.7451C22.4583 11.7933 22.4725 11.8477 22.472 11.9031C22.4716 11.9584 22.4566 12.0127 22.4285 12.0604L20.8321 14.7426C20.8041 14.7892 20.7646 14.8278 20.7173 14.8546C20.67 14.8814 20.6166 14.8955 20.5623 14.8955C20.5079 14.8955 20.4545 14.8814 20.4072 14.8546C20.3599 14.8278 20.3204 14.7892 20.2925 14.7426L18.6961 12.0604C18.6677 12.0128 18.6525 11.9586 18.6519 11.9032C18.6513 11.8478 18.6654 11.7933 18.6927 11.7451C18.72 11.6969 18.7596 11.6568 18.8074 11.6289C18.8553 11.601 18.9096 11.5863 18.965 11.5862H22.1587Z" fill="white"/></svg>                                                              
                                                              </span>
                                                      )}
                                                    /> 
                                                  </div>
                                                </div>
                                              </div>
                                            </section>
                                        </main>
                                        <div className="card my-3  my-lg-4">
                                            <div className="card-header bg-white border-0 py-md-3 py-3">
                                              <div className="row justify-content-between align-items-center flex-grow-1">
                                                <div className="col-lg4 col-md2 col">
                                                  <div className="d-flex justify-content-between align-items-center">
                                                    <h4 className="card-header-title">Total Users</h4>
                                                  </div>
                                                </div>
                                                <div className="col-auto">
                                                  <div className="row gx-2">
                                                    <div className="col-auto">
                                                      <a className="btn btn-outline-success btn-sm" href="javascript:;"  onClick={handleShowActivePopup}>
                                                        <i className="tio-delete-outlined"></i> Active
                                                      </a>
                                                    </div>
                                                    <div className="col-auto">
                                                      <a className="btn btn-outline-warning btn-sm" href="javascript:;" onClick={handleShowWarningPopup}>
                                                        <i className="tio-delete-outlined"></i> Freeze
                                                      </a>
                                                    </div>
                                                    <div className="col-auto">
                                                      <a className="btn btn-outline-danger btn-sm" href="javascript:;" onClick={handleShowDeletePopup}>
                                                        <i className="tio-delete-outlined"></i> Delete
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="table-responsive datatable-custom totalusertable">
                                                <AdminTable headers={usersHeaders} data={usersData} />
                                            </div>
                                            <Pagination/>
                                        </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {showActivePopup && ( <ActivePopup show={showActivePopup} handleClose={handleClose} />)}
          {showDeletePopup && ( <DeletePopup show={showDeletePopup} handleClose={handleClose} />)}
          {showWarningPopup && ( <WarningPopup show={showWarningPopup} handleClose={handleClose} />)}
        </>
  )
}

export default AdminHomePage