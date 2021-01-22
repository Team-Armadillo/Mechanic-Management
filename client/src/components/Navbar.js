import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <Logo className="logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">SIGN-IN</a>
          </li>
          <li>
            <a href="" className="sign-up">
              SIGN-UP
            </a>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li>
          <a href="#">SIGN-IN</a>
        </li>
        <li>
          <a href="" className="signup-btn">
            SIGN-UP
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;