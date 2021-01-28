import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Contact = () => {
    return (
      <div className="container">
        <a href="/">
            <Logo className="logo" />
          </a>
        <p>Contact Us!</p>
      </div>
    );
  };
  
  export default Contact;