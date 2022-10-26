import React,{useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import {IoIosArrowBack} from 'react-icons/io';
import logo from "../../../image/logo.JPG";
import correct from "../../../image/correct.jpg";
import warinig  from "../../../image/warning.jpg";


const Divheronewpass=styled.div`
box-sizing: border-box;
background-color: #fff;
box-shadow: 0px 3px 6px #00000029;
width:450px ;
height:500px;
border-radius:10px;
padding-top:30px;
margin-top:60px;
margin-left:30%;
`;
const Divnewpass=styled.div`
width:300px;
height:400px;
margin-left:75px; 
`;
const Imgnewpass=styled.img`
width:60px;
height: 30px;
margin-left:120px; 
margin-top:-10px;
`;
const H4newpass=styled.h4`
letter-spacing: .7px;
color: #000000;
text-align: center;
margin-bottom: 40px;
`;
const Pargraphnewpaass=styled.p`
margin-bottom: 20px;
font-size:15px;
`;
const Labelnewpass=styled.label`
font-size:13px;
letter-spacing: 0.4px;
color:#707070;
`;
const Diveyeiconnewpass=styled.div`
position:relative;
`;
const Inputnewpass=styled.input`
width:294px;
height:35px;
border-radius:7px ;
border:.5px solid #BEC2C6;
margin-top:5px;
`;
const Buttonnewpass=styled.button`
margin-top:40px;
margin-left:5px;
width:300px;
height:35px;
background: #4375FF;
border-radius: 7px ;
border:none;
color: #fff; 
`;
const Pargraphanchornewpass=styled.p`
margin-left:23%;
color: rgb(153, 146, 146);
font-family:Arial, Helvetica, sans-serif;
font-size:12px;
margin-top: 20px;
`;
const Anchor1newpass=styled.a`
text-decoration-line: none;
color:#4375FF;
font-family:Arial, Helvetica, sans-serif;
`;
const Labelnotewrongnewpass=styled.label`
color:#EE404C;
margin-bottom: 20px;
font-size:12px;
`;
const Label=styled.label`
margin-bottom: 20px;
font-size:12px;
`;
const Imgcorrecticonnewpass=styled.img`
width:15px;
height:15px;
margin-top:-55px;
margin-left:-2px;
`;
const Iconnewpass=styled.span`
margin-left:40px;
font-size:20px;
color:#000;
`;
 const Iconeyeiconnewpass=styled.span`
position: absolute;
margin-top:-30px;
margin-left:280px;
opacity: .3;
`;


function Newpass(){
const[password,setPassword]=useState('');
const[newpassword,setNewassword]=useState('');
const[err,setErr]=useState(false);


const handelsubmit=(e)=>{
  e.preventDefault();
   if (password !== "") {
    setErr(true)
  } else if (password.length < 8 || password.includes("@", "/", "#",".","$","%","&")) {
    setErr(true)
  }
 }
  

return(
<Divheronewpass>  
<Link to="/newpass/backe" ><Iconnewpass><IoIosArrowBack /></Iconnewpass> </Link>
<Divnewpass>
    <Imgnewpass src={logo} alt="..." />

     <H4newpass>Talents Valley/</H4newpass>

     <form  onSubmit={handelsubmit}>
        <Pargraphnewpaass><b>Creat New Password</b></Pargraphnewpaass>

        <Labelnewpass>New Password</Labelnewpass>
        <Diveyeiconnewpass>
        <Inputnewpass type="password" placeholder="" onChange={(e)=>{setPassword(e.target.value);document.getElementById('eyeicon1').style.display='none'}}/>
        <Iconeyeiconnewpass><AiOutlineEyeInvisible id="eyeicon1" /></Iconeyeiconnewpass>
        {err&&password===""?<Labelnotewrongnewpass>password required</Labelnotewrongnewpass>:err && password.length<8?
        <Labelnotewrongnewpass><Imgcorrecticonnewpass src={warinig} alt="..."/>Your password is weak</Labelnotewrongnewpass>
        :err &&password.length>8?
        (<Label><Imgcorrecticonnewpass src={correct} alt="..."/>
        Nice work. This is an excellent password</ Label>):""}
        </Diveyeiconnewpass>

        <Labelnewpass>Re-Enter Password</Labelnewpass>
        <Diveyeiconnewpass>
        <Inputnewpass type="password" placeholder="" onChange={(e)=>{setNewassword(e.target.value);document.getElementById('eyeicon').style.display='none'}}/>
        <Iconeyeiconnewpass><AiOutlineEyeInvisible id="eyeicon" /></Iconeyeiconnewpass>
        {err&&newpassword===""?<Labelnotewrongnewpass>password required</Labelnotewrongnewpass>:err && newpassword!==password?
        <Labelnotewrongnewpass><Imgcorrecticonnewpass src={warinig} alt="..."/>Your password is not match</Labelnotewrongnewpass>
        :err && newpassword===password?<Label><Imgcorrecticonnewpass src={correct} alt="..."/>
        Your password is match</ Label>:""}
        </Diveyeiconnewpass>
       
        
        <Link to="/newpass/restpassword"><Buttonnewpass onSubmit={handelsubmit} >continue</Buttonnewpass></Link>
      
    </form>
    <Pargraphanchornewpass className="anchor">Didn't get the code ? <Anchor1newpass>Resend</Anchor1newpass></Pargraphanchornewpass>


</Divnewpass>
</Divheronewpass>
)
}
export default Newpass;