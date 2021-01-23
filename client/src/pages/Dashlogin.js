import React, { useState } from "react";



const Dashlogin = () => {
    const adminUser = {
        email: "admin@admin",
        password: "test123"
    }

    const [user, setUser] = useState({email:""});
    const [error, setError] = useState("");
    
    const Login = details => {
        console.log(details);

    }

    const Logout = () => {
        console.log("logout")
    }

  return (
    <div className="container">
     {(user.email != "") ? (
         <div className="dashboard">
             <h2> welcome test</h2>
             <button>Logout</button>
             </div>
     ): (<LoginForm/>)}
    </div>
  );
};

export default Dashlogin;