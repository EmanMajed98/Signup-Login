import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import success from "../../../image/success.JPG";

function Succesphone(){
return(    
    <>
    <p className="title"><strong>Phone Verification</strong></p>
    <div className="hero">  
    <div className="succephone">
    <img src={success} alt="..."></img>


     <p className="parhead">Your phone Number has been Verified<br></br> Successfully</p>
    
    
        <Link to="/continue/phonedone"><button >continue</button></Link>
     </div>
</div></>
)
}
export default Succesphone;