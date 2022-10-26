import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import phone from "../../../image/phone.JPG";

function Verifiphone(){
return(
    <>
    <p className="title"><strong>Phone Verification</strong></p>
<div className="hero">  
<div className="verifiphone">
    <img src={phone} alt="..."></img>
     <p className="parg1">We have sent a verification code to your phone <br></br>number *******789</p>
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
        <Link to="/continue/phonesuccess"><button >continue</button></Link>
      </form>
    <p className="anchor">Didn't get the code ? <a href="#" className="anchor1" >Resend</a></p>


</div>
</div>
</>
)
}
export default Verifiphone;