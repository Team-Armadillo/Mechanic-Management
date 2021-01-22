import React, { useState } from "react";

import Navbar from "../components/Navbar.js";


const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <p>Welcome to Mechanic-Management!</p>
    </div>
  );
};

export default Home;