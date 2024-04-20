import React, {useState} from 'react'
import AdminTable from '../../component/AdminTable/AdminTable'
import Pagination from '../../component/Pagination/Pagination'
import AdminAsideBar from '../../component/AdminAsideBar/AdminAsideBar'
import AdminHeader from '../../component/AdminHeader/AdminHeader'
const AdminUserHistoryPage = () => {
    // Toggle Class In Aside Bar
    const [isAsidebarActive, setIsAsidebarActive] = useState(false);
    const toggleAsidebar = () => {
        setIsAsidebarActive(!isAsidebarActive);
    };

    const usersHeaders = ['User Mob. No.', 'Date', 'Time', 'Plan Amount'];
    const usersData = [
        ['9876543210', 'Feb 15, 2024', '11:55:00 AM', '43,286'],
        ['9876543210', 'Feb 15, 2024', '11:55:00 AM', '43,286'],
        ['9876543210', 'Feb 15, 2024', '11:55:00 AM', '43,286'],
        ['9876543210', 'Feb 15, 2024', '11:55:00 AM', '43,286'],
        ['9876543210', 'Feb 15, 2024', '11:55:00 AM', '43,286'],
        ['9876543210', 'Feb 15, 2024', '11:55:00 AM', '43,286'],
        ['9876543210', 'Feb 15, 2024', '11:55:00 AM', '43,286'],
        ['9876543210', 'Feb 15, 2024', '11:55:00 AM', '43,286'],
        ['9876543210', 'Feb 15, 2024', '11:55:00 AM', '43,286'],
    ];
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
                                    <main id="content" role="main" className="main">
                                    <div className="content">
                                        <div className="page-header">
                                            <div className="row align-items-center mb-3">
                                                <div className="col-sm">
                                                    <h3 className="page-header-title">All User History</h3>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-content order-section">
                                        <div id="home" className=" tab-pane active">
                                            <div className="card">
                                                <div className="card-header">
                                                    <div className="row row-gap-3">
                                                        <div className="col-md-3 col-auto">
                                                            <div className="border-bottom border-2">
                                                                <form>
                                                                    <div className="input-group input-group-merge input-group-flush">
                                                                        <div className="input-group-prepend input-group-text bg-transparent border-0">
                                                                            <i className="fas fa-search"></i>
                                                                        </div>
                                                                        <input id="datatableSearch" type="search" className="form-control bg-transparent border-0" placeholder="Search" aria-label="Search users"/>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="table-responsive datatable-custom">
                                                    <AdminTable headers={usersHeaders} data={usersData} />
                                                </div>
                                                    <Pagination/>
                                                </div>
                                            </div>
                                        </div> 
                                        </main>
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

export default AdminUserHistoryPage