import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

const About = () => {
    return (
      <div className="container">
        <a href="/">
            <Logo className="logo" />
          </a>
        <p>About Us!</p>
      </div>
    );
};

export default About;