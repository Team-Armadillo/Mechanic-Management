import React from 'react';
import './Sidebar.css';

const Sidebar = ({ sidebarOpen, closeSidebar}) => {
    return (
        <div className= {sidebarOpen ? "sidebar-responsive" : ""}id="sidebar">
            <div className="brand">
                <h1>mecanico</h1>
            </div>
            <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>

            <div className="sidebar-menu">
                <div className="sidebar-links active-menu-link">
                    <i className="fa fa-clipboard"></i>
                    <a href="#">Check-ins</a>
                    </div>
                    
                    <div className="sidebar-links">
                    <i className="fa fa-users"></i>
                    <a href="#">Patrons</a>
                    </div>

                    <div className="sidebar-links">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Log out</a>
                    </div>

                

            </div>
        </div>

    )
}

export default Sidebar

