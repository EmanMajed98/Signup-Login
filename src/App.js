import React from "react";
import Styled from "styled-components";
import Footer from "./component/footer";
import Signup from "./component/signin";
import Login from "./component/login";
//import Navbar from "./component/navbar";////
import Home from "./component/home";
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////////pass/////
import Forgetpass from "./component/Password/Forget password/index";
import Newpass from "./component/Password/New password";
import Restpass from "./component/Password/Rest password";
/////////////////////////////////////////////////////////////////////////////////////email////
import Checkemail from "./component/Email/check email";
import Succesemail from "./component/Email/Emil success";
import Verifiemail from "./component/Email/Email verifi";
//  import Donemail from "./component/Email/Email done";
////////////////////////////////////////////////////////////////////////////////////phone////
import Verifiphone from "./component/phone/Phone verifi";
import Succesphone from "./component/phone/Phone success";
import Donephone from "./component/phone/Phone done";
////////////////////////////////////////////////////////////////////////////////////id////
import Verifid from "./component/ID/ID verifi";
// import Pendingid from "./component/ID/ID pending";
///////////////////////////////////////////////////////////////////////////////////Addres/////
import Verifiaddres from "./component/Address/Addres verifi";
// import Pendingaddres from "./component/Address/Addres pending";
// import Doneaddres from "./component/Address/Addres done";
////////////////////////////////////////////////////////////////////////////////////verifi////
import Verifi from "./component/verification/verifi";
import Donemail from "./component/Email/Email done";
// import Doneverifi from "./component/verification/verifi done";
 
const DivApp = Styled.div`
width:100%;
position:absolute;
box-sizing: border-box; 
background-color: rgb(243, 243, 243);
`;

function App (){
  return (
     <DivApp>
   
    {/* ///////////////////////pass/ */}
   <Router>
   <Routes>  
      <Route path="home" element={<Home/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup/login" element={<Login/>}/>
      <Route path="login/fogetpass" element={<Forgetpass/>}/>
      <Route path="fogetpass/check" element={<Checkemail/>}/>
      <Route path="restpass" element={<Restpass/>}/>
      <Route path="restpass/login" element={<Login/>}/> 
      <Route path="verifi" element={<Verifi/>}/>
      <Route path="verifi/verifiemail" element={<Verifiemail/>}/>
      <Route path="verifi/verifiphone" element={<Verifiphone/>}/>
      <Route path="verifi/verifiid" element={<Verifid/>}/>
      <Route path="verifi/verifiaddres" element={<Verifiaddres/>}/>
      <Route path="continue/emailsuccess" element={<Succesemail/>}/>
      <Route path="continue/emaildone" element={<Donemail/>}/>
      <Route path="continue/phonesuccess" element={<Succesphone/>}/>
      <Route path="continue/phonedone" element={<Donephone/>}/>
      <Route path="newpass" element={<Newpass/>}/>
      <Route path="newpass/backe" element={<Checkemail/>}/>
      <Route path="checkemail/backe" element={<Forgetpass/>}/>
      <Route path="forgetpass/backe" element={<Login/>}/>
      <Route path="checkemail/newpassword" element={<Newpass/>}/>
      <Route path="newpass/restpassword" element={<Restpass/>}/>
      <Route path="login/signup" element={<Signup/>}/>
      <Route path=" signup/login" element={<Login/>}/>
      </Routes>
    </Router>
   
   
    {/* //////////////////////email/ */}
    {/* <Checkemail/> */}
  
    {/* //////////////////////phone/ */}
    {/* <Donephone/> */}
    {/* //////////////////////id/ */}
    {/* <Pendingid/> */}
    {/* //////////////////////Addres/ */}
    {/* <Pendingaddres/> */}
    {/* <Doneaddres/> */}
    {/* //////////////////////Verification/ */}
    {/* <Doneverifi/> */}


    <Footer/>
     </DivApp>
  );
};
export default App;

