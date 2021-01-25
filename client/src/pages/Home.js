import React, { useState } from "react";
import ReactDOM from 'react-dom'
import Navbar from "../components/Navbar.js";

import SignInForm from "../components/SignInForm.js";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <p>Welcome to Mechanic-Management!</p>
      {/* <SigninForm /> */}

    </div>
  );
};

export default Home;