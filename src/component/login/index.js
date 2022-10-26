import React,{useEffect,useState} from "react";
// import { useHistory } from "react-router-dom";
import { Link,Outlet} from "react-router-dom";
import logo from "../../image/logo.JPG";
import "./style.css";
import styled from "styled-components";

const Divlogin=styled.div`
box-sizing: border-box;
background-color: #fff;
box-shadow: 0px 3px 6px #00000029;
width:450px;
height:545px;
border-radius: 10px;
margin-left:30%;
font-family:sans-serif;
margin-top:60px;
`;
const H4login=styled.h4`
margin-left:175px;
`;
const Formlogin=styled.form`
width: 80%;
margin-left:10%;
`;
const Pargraphlogin=styled.p`
font-family:sans-serif;
margin-bottom: 20px;
padding-top: 5px;
font-size:13px;
`;
const Labellogin=styled.label`
font-size:12px;
`;
const Inputemaillogin=styled.input`
width:350px;
height:35px;
border-radius:5px;
border:.5px solid rgb(209, 209, 209);
margin-top:3px;
margin-bottom:30px; 
`;
const Inputpasslogin=styled.input`
width:350px;
height:35px;
border-radius:5px;
border:.5px solid rgb(209, 209, 209);
margin-top:3px;
`;
const Buttonlogin=styled.button`
background-color: rgb(42, 81, 252); 
color: #fff;
border:none;
border-radius: 5px;
width:355px;
height:35px;
margin-top: 20px; 
margin-left:5px;
font-family:sans-serif;
`;
const Pargraphanchorlogin=styled.p`
margin-left:30%;
margin-top:40px;
color: rgb(153, 146, 146);
font-family:Arial, Helvetica, sans-serif;
font-size:14px;
`;
const Anchor1login=styled.a`
color: rgb(42, 81, 252);
text-decoration: none;
`;


function Login(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    // const history =useHistory();

useEffect(()=>{
 if(localStorage.getItem({email,password}));
//  history.push("/login")
})

async function handelsubmit(e){
 e.preventDefault();
  console.log({email,password})
  const result=await fetch("https://talents-valley.herokuapp.com/api",{
    method:'POST',
    headers:{
      "Content-Type":"application/json",
      "Accept":"*/*"
    },
    body:JSON.stringify({email,password})
   
  });
   localStorage.setItem("keyId",JSON.stringify(result.json()))
    //   history.push("");

  }
return(
    <Divlogin>
        <img src={logo} alt="..." className="imgiconlogin"/>
     <H4login>Talents Valley</H4login>

     <Formlogin onSubmit={handelsubmit}>

        <Pargraphlogin><b>Login To Your Account</b></Pargraphlogin>

        <Labellogin><b>Email</b></Labellogin>
        <Inputemaillogin type="email" placeholder="email@gmail.com"  onChange={(e)=>setEmail(e.target.value)} required/>
        {/* {localStorage.getItem("email") && (
          <div>
            <p>{localStorage.getItem("email")}</p>
          </div>
        )}  */}

        <Labellogin><b>Password</b></Labellogin>
        <Inputpasslogin type="password" placeholder=""  onChange={(e)=>setPassword(e.target.value)}required/>
      
        <Link  to="/login/fogetpass" className="forgetpass">Forget password?</Link>
        <Outlet/>
         
    <Link  to="/home"><Buttonlogin onSubmit={handelsubmit} >Sign In</Buttonlogin></Link>
    </Formlogin>
    
    {/* <Divlineborderlogin></Divlineborderlogin> */}
    <Pargraphanchorlogin>Don't have an account?<Link to="/login/signup"> <Anchor1login >Sign UP</Anchor1login></Link></Pargraphanchorlogin>

    </Divlogin>
)
}
export default Login;