import React, { useState } from "react";
import LoginForm from '../components/LoginForm';
import Dashboard from "../pages/Dashboard";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const Dashlogin = () => {
    const adminUser = {
        email: "admin@admin",
        password: "test123"
    }

    const [user, setUser] = useState({email:""});
    const [error, setError] = useState("");
    
    const Login = details => {
        console.log(details);

        if (details.email === adminUser.email && details.password === adminUser.password)
       {
        console.log('were logged in');
        setUser({
            email: details.email
        });

        } else {
            console.log("details do not match")
            setError("invalid email & password");
        }
    }
     


    const Logout = () => {
        setUser({email:""});
    }

  return (
    <div className="container">
     {(user.email !== "") ? (
       <div className="dashboard">
        <Route exact component= {Dashboard}/>
    
       <button onClick={Logout}>Logout</button>
       </div>
     ) : (
     <LoginForm Login={Login} error={error}/>)}
    </div>
  );
}

export default Dashlogin;