import React, { useState } from "react";
import LoginForm from '../components/LoginForm';



const Dashlogin = () => {
    const adminUser = {
        email: "admin@admin",
        password: "test123"
    }

    const [user, setUser] = useState({email:""});
    const [error, setError] = useState("");
    
    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password)
       {
        console.log('were logged in');
        setUser({
            email: details.email
        });

        } else {
            console.log("details do not match");
        }
    }
     


    const Logout = () => {
        setUser({email:""});
    }

  return (
    <div className="container">
     {(user.email != "") ? (
         <div className="dashboard">
             <h2> welcome test</h2>
             <button onClick={Logout}>Logout</button>
             </div>
     ) : (
     <LoginForm Login={Login} error={error}/>)}
    </div>
  );
}

export default Dashlogin;