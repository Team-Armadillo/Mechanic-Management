import React from 'react'
import "./Body.scss"
import Navbar from "../Navbar";
import Footer from "../Footer"

const Body = () => {
    return (

        <div className = "bodyContainer">
            <Navbar />
            <div className = "bodyText">
                <h1 className="section-head">Welcome to Mechanic Management!</h1>
                <h2 className="section-head-2">Checking Your Vehicle's Status?</h2>
                <div className = "paraContainer">
                    <p className="paraText">
                       <i> It's a Click Away. </i>
                    </p>
                    <div className="btnContainer">
                        <button className="checkBtn">
                           <p>Check Status!</p>
                        </button>
                    </div>
                </div>
            </div>
            {/* <Footer />  */}
        </div>
    )
};

export default Body;

// Need code to add a "dropdown" area for the Customer to enter their phonenumber