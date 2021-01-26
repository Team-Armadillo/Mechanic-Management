import React from 'react';
import { useState } from "react";

import LoginBtn from './loginBtn';
import './loginBtn.css'
import './LoginForm.css';

function LoginForm({Login, error}) {

    const [details, setDetails] = useState({email:"", password:""});
    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }


    return (
       <form className="adminform" onSubmit={submitHandler}>
           <div className= "form-inner">
           <h1>mecanico</h1>
           <p>admin dashboard</p>
           
           {(error !== "") ? (<div className="error">{error}</div>) : ""}

           <div className="form-group">
               <label htmlFor="email" >Email: </label>
               <input type="email" name="email" autocomplete="off" id="email" onChange={e => setDetails({...details, email: e.target.value })} value={(details.email)}/>
               </div>

               <div className="form-group">
               <label htmlFor="password">Password: </label>
               <input type="password" name="password" id="password"onChange={e => setDetails({...details, password: e.target.value })} value={(details.password)}></input>
               </div>

               <LoginBtn/>

        </div>
       </form>
    )
};

export default LoginForm