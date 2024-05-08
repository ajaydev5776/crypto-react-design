import React, {useEffect, useState} from 'react'
import AdminTable from '../../component/AdminTable/AdminTable'
import Pagination from '../../component/Pagination/Pagination'
import AdminAsideBar from '../../component/AdminAsideBar/AdminAsideBar'
import AdminHeader from '../../component/AdminHeader/AdminHeader'
import { DeleteTransFunction, GetAllTransitionDetails } from '../../AdminFunction/ApiCalls'
const AdminUserHistoryPage = () => {
    // Toggle Class In Aside Bar
    const [isAsidebarActive, setIsAsidebarActive] = useState(false);
    const toggleAsidebar = () => {
        setIsAsidebarActive(!isAsidebarActive);
    };
    const [tranData,setTranData] = useState([])
    const DeleteTrans = (data)=>{
        DeleteTransFunction(data).then(res=>{
            console.log("DeleteID",res)
        })
    }

    useEffect(()=>{
GetAllTransitionDetails().then(res=>{
    console.log("wertyujuooiuyfghjk",res)
    var processDataArray =[]
    if (!res || res.length <= 0){
        setTranData([])
        return
    }

    for(var i=0;i<res.length;i++){
        var date = res[i].investedDate.slice(0, 10)
        var time = res[i].investedDate.slice(12,19)
       var temp = [res[i].transId,res[i].phoneNo, date,time,res[i].coinName,res[i].investedAmount]
       processDataArray.push(temp)
    }
    setTranData(processDataArray)
})
    },[])
    
    const usersHeaders = ['Tran Id','User Mob. No.', 'Date', 'Time','Coin Name', 'Plan Amount'];
    const usersData = [
        tranData
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
                                                    <AdminTable headers={usersHeaders} data={tranData} Actionname="Remove" action={DeleteTrans} />
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