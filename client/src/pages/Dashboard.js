import React from 'react';
import {useState} from 'react';
import "./Dashboard.css";
import Dashnav from '../components/Dashnav';
import Sidebar from '../components/Sidebar';

const Dashboard = () =>  {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (

        <div className="dashcontainer">
            <Dashnav sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
            <h1>main</h1>
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
           
        </div>
    )
}

export default Dashboard