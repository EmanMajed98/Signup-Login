import React from "react";
import styled from "styled-components";
import "./style.css";
import logo from "../../../image/logo.JPG";
import {Link} from "react-router-dom";
import {IoIosArrowBack} from 'react-icons/io';

const Divherocheckemail=styled.div`
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
const Divnewpasscheckemail=styled.div`
width:300px;
height:400px;
margin-left:75px; 
`;
const H4checkemail=styled.h4`
letter-spacing: .7px;
color: #000000;
text-align: center;
margin-bottom: 40px;
`;
const Pargraph1checkemail=styled.p`
margin-bottom: 20px;
font-size:15px;
`;
const Pargraph2checkemail=styled.p`
font-size: 14px;
color: #707070;
margin-bottom: 30px;
`;
const Divinputparentcheckemail=styled.div`
display:flex;  
justify-content: center;
`;
const Divinputleftcheckemail=styled.div`
width:150px;
justify-content: space-between;
`;
const Inputallcheckemail=styled.input`
width:30px;
height: 30px;
box-shadow: 0px 2px 2px #00000029;
margin:3px;
border-radius: 5px;
border:.2px solid #D4D4D4;
`;
const Buttoncheckemail=styled.button`
margin-top:40px;
width:300px;
height:35px;
background: #4375FF;
border-radius: 7px ;
border:none;
color: #fff;
font-size:15px;
margin-left:5px
`;
const Pargraphanchor1checkemail=styled.p`
margin-left:23%;
color: rgb(153, 146, 146);
font-family:Arial, Helvetica, sans-serif;
font-size:12px;
margin-top: 20px;
`;
const Anchorcheckemail=styled.a`
text-decoration-line: none;
color:#4375FF;
font-family:Arial, Helvetica, sans-serif;
`;
const Iconcheckemail=styled.i`
margin-left:40px;
font-size:20px;
`;

function Checkemail(){
return(
<Divherocheckemail> 
<Link to="/checkemail/backe"><IoIosArrowBack className="iconcheckemail"/></Link> 
<Divnewpasscheckemail>
 
    <img src={logo} alt="..." className="imgcheckemail"></img>

     <H4checkemail>Talents Valley</H4checkemail>
     <Pargraph1checkemail><b>Check Your Email</b></Pargraph1checkemail>
     <Pargraph2checkemail>We have sent an email that contains a code to <br></br>reset your password</Pargraph2checkemail>
      <form>
        <Divinputparentcheckemail>
        <Divinputleftcheckemail>
        <Inputallcheckemail type="text" />
        <Inputallcheckemail type="text" />
        <Inputallcheckemail type="text" />
        </Divinputleftcheckemail>
        <div>
        <Inputallcheckemail type="text" />
        <Inputallcheckemail type="text" />
        <Inputallcheckemail type="text" />
        </div>
        </Divinputparentcheckemail>
       <Link to="/checkemail/newpassword"><Buttoncheckemail>continue</Buttoncheckemail></Link> 
      </form>
    <Pargraphanchor1checkemail>Didn't get the code ? <Anchorcheckemail href="#">Resend</Anchorcheckemail></Pargraphanchor1checkemail>


</Divnewpasscheckemail>
</Divherocheckemail>
)
}
export default Checkemail;