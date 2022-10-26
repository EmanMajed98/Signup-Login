import React,{useState} from "react";
import "./style.css";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {IoIosArrowBack} from 'react-icons/io';
import logo from "../../../image/logo.JPG";


const Divheroforget=styled.div`
width:450px ;
height:480px;
box-sizing: border-box;
background-color:#fff;   
box-shadow: 0px 3px 6px #00000029;
border-radius:10px;
padding-top: 30px;
margin-left:30%;
margin-top:60px;
font-family:sans-serif;
`;
const Divforget=styled.div`
width:300px;
height:400px;
margin-left:75px;
`;
const H4forget=styled.h4`
letter-spacing: .7px;
color: #000000;
text-align: center;
`;
const Pargraph1forget=styled.p`
letter-spacing:.3px;
color: #000000;
font-size:15px;
`;
const Pargraph2forget=styled.p`
color: #707070;;
text-transform: capitalize;
width:350px;
font-size: 12px;
`;
const Formforget=styled.form`
margin-top:40px;   
`;
const Labelforget=styled.label`
font-size:13px;
letter-spacing: 0.4px;
color:#707070;
`;
const Inputemailforget=styled.input`
width:294px;
height:35px;
border-radius:7px ;
border:.5px solid #BEC2C6;
margin-top:5px;
`;
const Buttonforget=styled.button`
margin-top:40px;
margin-left:3px;
width:300px;
height:35px;
background: #4375FF;
border-radius: 7px ;
border:none;
color: #fff;
`;

function Forgetpass(){
const[email,setEmail]=useState("");
const[err,setErr]=useState(false);

const handelsubmit=(e)=>{
  e.preventDefault();  
  if(email!==""){
  setErr(true)  
} else if (!email.includes("@")) {
    setErr(true)
   }
}
return(
<Divheroforget> 
<Link to="/forgetpass/backe"><IoIosArrowBack className="iconforgetpass"/></Link> 
<Divforget>
 <img src={logo} alt="logo..." className="img1logo"/>
 <H4forget>Talents Valley</H4forget>
 <Pargraph1forget><b>Forget Password?</b></Pargraph1forget>
 <Pargraph2forget>W'll send a code your email to reset your password</Pargraph2forget>


<Formforget onSubmit={handelsubmit}>
<div>
    <Labelforget>Email</Labelforget>
    <Inputemailforget type="email" placeholder=" email@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
    {err && email===""?<label className="notewrong">email required</label>:""}
 </div> 
 <Link to="/fogetpass/check"><Buttonforget onSubmit={handelsubmit} >Send Code</Buttonforget></Link>
 </Formforget>
 </Divforget> 



</Divheroforget>
)
}
export default Forgetpass;