import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import success from "../../../image/success.JPG";

function Donemail(){
return(
    <>
    <p className="title"><strong>Verification</strong></p>
<div className="hero">  
<div className="verifi">
     <p className="parg1">To use our services,We need to verifi your  <br></br>account</p>
      
        <div className="diverifi">
         <div className="left">
            <p>Email Address<br></br><span className="span2">mail@email.com</span><span className="span1">(Verified)</span></p>
         </div>
         <div className="right">
         <img className="checked" src={success} alt="..."/>
         </div>
        </div>

        <div className="diverifi">
         <div className="left">
          <p>Phone Number<br></br><span className="span2">+972*******966</span><span className="span11">(Not Verified)</span></p>
         </div>
         <div className="right">
         <Link to="/verifi/verifiphone"> <button className="btn" >Verified</button></Link>
         </div>
        </div>

        <div className="diverifi">
         <div className="left">
           <p>ID Verification<br></br><span className="span2">Identity Card-Passport-Driver License</span></p>
         </div>
         <div className="right">
           <button className="btn" >Verified</button>
         </div>
        </div>

        <div className="diverifi">
         <div className="left">
          <p>Address Verification<br></br><span className="span3">Phone,Electricity,Water Bill-Bank statement</span> </p>
         </div>
         <div className="right">
          <button className="btn" >Verified</button>
         </div>
        </div>
        <button >continue</button>
</div>
</div>
</>
)
}
export default  Donemail;