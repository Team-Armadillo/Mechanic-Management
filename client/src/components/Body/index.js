import React from 'react'
import "./Body.css"
import Navbar from "../Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Body = () => {
    return (

        <div className = "bodyContainer">
            <Navbar />
            <div className = "bodyText">
                <h1 className="section-head">Welcome to Mechanic Management!</h1>
                <div className = "paraContainer">
                    <p className="paraText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <h2 className="section-head-2">Checking Your Vehicle's Status?</h2>
                <div className = "paraContainer">
                    <p className="paraText">
                        A Click Away.
                    </p>
                    <Link className="checkBtn" to="../pages/Checkstatus">Check Status</Link>
                </div>
            </div>
        </div>
       
    )
}

export default Body;

// Need code to add a "dropdown" area for the Customer to enter their phonenumber