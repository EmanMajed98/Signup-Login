import React,{useState} from "react";
import "./style.css";
import user from "../../../image/user.JPG";
import {HiOutlineUpload} from "react-icons/hi"
function Verifid(){
   const[document,setDocument]=useState('');
   const[idnumber,setIdnumber]=useState('');
   // const[file,setFile]=useState("");
   const[err,setErr]=useState(false);

const handelsubmit=(e)=>{
e.preventDefault();
if(!(document!=="")){
   setErr(true)
}
if(idnumber!==""){
   setErr(true)
}
}

return(
    <>
<p className="title"><strong>ID Verification</strong></p>
<div className="hero">  
<div className="forget">
 <img src={user} alt="logo..."/>

 <p className="parg1">Upload Document that proof your Identity <br></br>such as:Identity Card,Passport,Driver License </p>


<form onSubmit={handelsubmit}>
<div className="divtype">
    <lable className="lab1">Document Type</lable>
     <select value={document} onChange={(e)=>setDocument(e.target.value)}>
        <option  value="" disabled selected hidden>Choose your document type</option>
        <option value="Identity Card">Identity Card</option>
        <option value="passport">Passport</option>
        <option value="Driver License">Driver License</option>
     </select>
     {err&&document===""?<label className="labl4">Document Type required</label>:""}
 </div> 
 <div className="divnumber">
    <lable className="lab2">ID Number</lable>
    <input className="inpnumber" type="" placeholder=" Enter your ID number" onChange={(e)=>setIdnumber(e.target.value)} />
     {err&&idnumber===""?<label className="labl4">ID Number required</label>:""}
 </div>
 <div className="divchoise">
    <button className="inpefile" ><strong><HiOutlineUpload className="uploadicon"/></strong><b>Upload a File</b></button>
 {/* onClick={(e)=>setFile(e.target.value)} */}
 </div>
 
 <button className="btn" onSubmit={handelsubmit}>continue</button>
 </form>
 </div> 

</div>
</>
)
}
export default Verifid;