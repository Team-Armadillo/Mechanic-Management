import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Navbar from "../components/Navbar";
import "../components/Body";
const Contact = () => {
    return (
      <div className = "bodyContainer">
      <Navbar />
      <div className = "bodyText">
          <h1 className="section-head">Contact Mechanic Management</h1>
          <div className = "paraContainer">
              <p className="paraText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br /><br />

Call us at <a href="tel:111-222-3333">(111)-222-3333</a>
<br />
<a href = "mailto: abc@example.com">Email us!</a>
              </p>
          </div>
          
          
      </div>
  </div>
    );
};
  
  export default Contact;