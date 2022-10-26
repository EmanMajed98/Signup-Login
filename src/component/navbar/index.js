import React from "react";
import "./style.css";
import logo from "../../image/logo.JPG";
import { Link } from "react-router-dom";
function Navbar(){
return(
    <div className="navbar">

    <div className="logo">
    <img src={logo} alt="..." className="img"/> 
    <p className="par"> Talents Valley</p>
    </div>

    <div className="link">
    {/* <Link to="signin" className="sign">Sign In</Link>
    <Link to="login" className="log">Log In</Link> */}
    </div>
    
    </div>
)

}
export default Navbar;