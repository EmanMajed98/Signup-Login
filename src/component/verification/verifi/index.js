import React from "react";
import {Link, Outlet} from "react-router-dom";
import "./style.css";
import img1 from "../../../image/img1.jpg";

function Verifi(){
return(
    <>
    <p className="title"><strong>Verification</strong></p>
<div className="hero">  
<div className="verifi">
    <img src={img1} alt="..."></img>
     <p className="parg1">To use our services,We need to verifi your  <br></br>account</p>
      
        <div className="diverifi">
         <div className="left">
            <p>Email Address<br></br><span className="span2">mail@email.com</span><span className="span1">(Not Verified)</span></p>
         </div>
         <div className="right">
         <Link to="/verifi/verifiemail"><button className="btn" >Verified</button></Link>
         <Outlet/>
         </div>
        </div>

        <div className="diverifi">
         <div className="left">
          <p>Phone Number<br></br><span className="span2">+972*******966</span><span className="span1">(Not Verified)</span></p>
         </div>
         <div className="right">
         <Link to="/verifi/verifiphone"><button className="btn" >Verified</button></Link>
         </div>
        </div>

        <div className="diverifi">
         <div className="left">
           <p>ID Verification<br></br> <span className="span2">Identity Card-Passport-Driver License</span></p>
         </div>
         <div className="right">
         <Link to="/verifi/verifiid"><button className="btn" >Verified</button></Link>
         </div>
        </div>

        <div className="diverifi">
         <div className="left">
          <p>Address Verification<br></br><span className="span3">Phone,Electricity,Water Bill-Bank statement</span> </p>
         </div>
         <div className="right">
         <Link to="/verifi/verifiaddres"><button className="btn" >Verified</button></Link>
         </div>
        </div>
        <button >continue</button>
</div>
</div>
</>
)
}
export default Verifi;