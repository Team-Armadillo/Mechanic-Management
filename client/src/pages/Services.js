import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Services = () => {
    return (
      <div className="container">
        <a href="/">
            <Logo className="logo" />
          </a>
        <p>Our Services!</p>
      </div>
    );
};

export default Services;