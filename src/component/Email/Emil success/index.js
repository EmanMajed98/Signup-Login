import React from "react";
import {Link } from "react-router-dom";
import "./style.css";
import success from "../../../image/success.JPG";

function Succesemail(){
return(    
    <>
    
    <div className="hero">  
    <p className="emailverifi"><strong>Email Verification</strong></p>
    <div className="succemail">
    <img src={success} alt="..."></img>


     <p className="parhead">Your email has been Verified<br></br> Successfully</p>
    
    
     <Link to="/continue/emaildone"><button >continue</button></Link>
     </div>
</div></>
)
}
export default Succesemail;