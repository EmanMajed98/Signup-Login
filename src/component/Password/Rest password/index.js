import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import "./style.css";
import logo from "../../../image/logo.JPG";
import success from "../../../image/success.JPG";

const Divherorestpass=styled.div`
box-sizing: border-box;
background-color: #fff;
box-shadow: 0px 3px 6px #00000029;
width:450px ;
height:480px;
border-radius: 10px;
padding-top:30px;
margin-left:30%;
margin-top:60px;
`;
const Divrestpass=styled.div`
width:300px;
height:400px;
margin-left:75px;  
`;
const H4restpass=styled.h4`
letter-spacing: .7px;
color: #000000;
text-align: center;
margin-bottom: 40px;
`;
const Pargraph1restpass=styled.p`
font-size:15px;
letter-spacing: 1.5px;
text-align: center;
margin-top:30px;
`;
const Pargraph2restpass=styled.p`
font-size: 15px;
`;
const Buttonrestpass=styled.button`
margin-top:40px;
width:300px;
height:35px;
background: #4375FF;
border-radius: 7px ;
border:none;
color: #fff; 
`;


function Restpass(){
return(
<Divherorestpass>

<Divrestpass>

<img src={logo} alt="..." className="img1"></img>
<H4restpass>Talents Valley</H4restpass>
<img  src={success} alt="..." className="img2"></img>
<Pargraph1restpass><b>Password Rest</b></Pargraph1restpass>
<Pargraph2restpass>Your Password has been Successfully Rest.<br></br>Click Below To Login</Pargraph2restpass>

<Link to="/restpass/login"><button>Sign In</button></Link>
</Divrestpass>
</Divherorestpass>
)
}
export default Restpass;
