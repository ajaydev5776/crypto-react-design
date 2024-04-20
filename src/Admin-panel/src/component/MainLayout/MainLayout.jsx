import React, {useState} from 'react'
import AdminAsideBar from '../AdminAsideBar/AdminAsideBar'
import AdminHeader from '../AdminHeader/AdminHeader'

const MainLayout = () => {
      // Toggle Class In Aside Bar
        const [isAsidebarActive, setIsAsidebarActive] = useState(false);
        const toggleAsidebar = () => {
            setIsAsidebarActive(!isAsidebarActive);
        };

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

export default MainLayout