import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ sidebarOpen, closeSidebar}) => {
    return (
        <div className= {sidebarOpen ? "sidebar-responsive" : ""}id="sidebar">
            <div className="brand">
                <h1>mecanico</h1>
            </div>
            
           {/*  <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>*/}

            <div className="sidebar-menu">
                <div className="sidebar-links active-menu-link">
        
                    
                <Link to='/Dashboard'> <i className="fa fa-clipboard"></i>Check-ins</Link>
                    </div>
                    
                    <div className="sidebar-links">
                   
                    <Link to='/Patrons'><i className="fa fa-users"></i>Patrons</Link>
                    </div>

                    <div className="sidebar-links">
                    
                    <a href="#"><i className="fa fa-sign-out"></i>Log out</a>
                    </div>
                    
                

            </div>
        </div>

    )
}

export default Sidebar