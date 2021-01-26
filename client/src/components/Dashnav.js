import React from 'react'
import "../components/Dashnav.css"

const Dashnav = ({ sidebarOpen, closeSidebar, openSidebar}) => {
    return (
        <nav className="dashnav">
            <div className="nav_icon" onClick={()=> openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="dashnav-left">
                <i className="fa fa-search"></i>
            </div>
            
        </nav>
        
    )
}
export default Dashnav




