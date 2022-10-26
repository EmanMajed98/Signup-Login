import React from "react";
import {Link, Outlet} from "react-router-dom";
import "./style.css";
import email from "../../../image/email.JPG";

function Verifiemail(){
return(
    <>
    <p className="title"><strong>Email Verification</strong></p>
<div className="hero">  
<div className="verifi">
    <img src={email} alt="..."></img>
     <p className="parg1">We have sent a verification code to your email <br></br>****78@gmail.com</p>
      <form>
        <div className="inpparent">
        <div className="inpleft">
        <input type="text" required/>
        <input type="text" required/>
        <input type="text" required/>
        </div>
        <div className="inpright">
        <input type="text" required/>
        <input type="text" required/>
        <input type="text" required/>
        </div>
        </div>
        <Link to="/continue/emailsuccess"><button >continue</button></Link>
        <Outlet/>
      </form>
    <p className="anchor">Didn't get the code ? <a href="#" className="anchor1" >Resend</a></p>


</div>
</div>
</>
)
}
export default Verifiemail;