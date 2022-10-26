import React from "react";
import "./style.css";
import {AiOutlineExclamationCircle } from 'react-icons/ai';
import img1 from "../../../image/img1.jpg";

function Doneaddres(){
return(
    <>
    <p className="title"><strong>Verification</strong></p>
<div className="hero">  
<div className="verifi">
    <img src={img1} alt="..."></img>
     <p className="parg1">To use our services,We need to verifi your  <br></br>account</p>
      
        <div className="diverifi">
         <div className="left">
            <p>Email Address<br></br><span className="span2">mail@email.com</span><span className="span1">(Verified)</span></p>
         </div>
         <div className="right">
          <img className="checked" src={img1} alt="..."/>
         </div>
        </div>

        <div className="diverifi">
         <div className="left">
          <p>Phone Number<br></br><span className="span2">+972*******966</span><span className="span11">(Verified)</span></p>
         </div>
         <div className="right">
          <img className="checked" src={img1} alt="..."/>
         </div>
        </div>

        <div className="diverifi">
         <div className="left">
           <p>ID Verification<span className="requir">required</span> <AiOutlineExclamationCircle className="icon"/><br></br><span className="span2">Identity Card-Passport-Driver License</span></p>
         </div>
         <div className="right">
           <button className="btn" >Try Again</button>
         </div>
        </div>

        <div className="diverifi">
         <div className="left">
          <p>Address Verification<br></br><span className="span3">Phone,Electricity,Water Bill-Bank statement</span> </p>
         </div>
         <div className="right">
         <img className="checked" src={img1} alt="..."/>
         </div>
        </div>
        <button >continue</button>
</div>
</div>
</>
)
}
export default   Doneaddres;