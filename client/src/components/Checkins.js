import React from 'react'
import { useState } from "react";
import "../components/Checkins.css"

function Checkins({Login, error}) {
    const [details, setDetails] = useState({firstname:"", lastname:"", tel:""});
        const submitHandler = e => {
            e.preventDefault();
           console.log(details)
        }
    return (
        

    <form className="checkin" onSubmit={submitHandler}>
           <div className= "checkins-inner">
           <h1>Check-ins</h1>
           
           {(error !== "") ? (<div className="error">{error}</div>) : ""}
           <div className="checkins-group">
               <label htmlFor="firstname" >First Name: </label>
               <input type="firstname" name="firstname" autocomplete="off" id="firstname"  onChange={e => setDetails({...details, firstname: e.target.value })} value={(details.firstname)}/>
               </div>

           <div className="checkins-group">
               <label htmlFor="lastname" >Last Name: </label>
               <input type="lastname" name="lastname" autocomplete="off" id="lastname" onChange={e => setDetails({...details, lastname: e.target.value })} value={(details.lastname)}/>
               </div>

               <div className="checkins-group">
               <label htmlFor="email" > Email: </label>
               <input type="email" name="email" autocomplete="off" id="lastname" onChange={e => setDetails({...details, email: e.target.value })} value={(details.email)}/>
               </div>

               <div className="checkins-group">
               <label htmlFor="password">Phone Number: </label>
               <input id="tel" type="tel" pattern="^\d{3}-\d{3}-\d{4}$" autocomplete="off" required placeholder="(xxx)-xxx-xxxx" onChange={e => setDetails({...details, tel: e.target.value })} value={(details.tel)}></input>
               </div>

               <input class= "checkin-btn" type="submit" value="Send to the shop"/>

        </div>
       </form>

       
    )
}

export default Checkins
