import React from 'react';
import LoginBtn from './LoginBtn';
import './LoginForm.css';

function LoginForm() {
    return (
       <form>
           <div className= "form-inner">
           <h1>Mecanico</h1>
           <p>Dashboard Login</p>
           {/*error*/}

           <div className="form-group">
               <label htmlFor="email">Email: </label>
               <input type="email" name="email" id="email"/>
               </div>

               <div className="form-group">
               <label htmlFor="password">Password: </label>
               <input type="password" name="password" id="password"></input>
               </div>

               <LoginBtn/>

        </div>
       </form>
    )
};

export default LoginForm
