import React from "react";
import "./style.css";
import img1 from "../../../image/img1.jpg";

function Verifiaddres(){
return(
    <>
    <p className="title"><strong>Address Verification</strong></p>
    <div className="hero">  
    <div className="verifi">
    <img src={img1} alt="..."></img>
     <p className="parg1">Upload Document That Proof Your Address Such<br></br> As: Bill (Phone, Electricity, Water, Bank Statement</p>
      <form>
      <div className="divtype">
       <lable className="lab1">Document Type</lable>
        <select className="select1" placeholder="choose your document type">
        <option></option>
        <option>Identity Card</option>
        <option>Passport</option>
        <option>Driver License</option>
     </select>
    </div> 
        <div className="inpparent">

        <div className="inpleft">
         <label className="lab2">Address 1</label>
         <input className="input1" type="text" placeholder="Neighborhood"/>
        </div>
        <div className="inpright">
        <label className="lab3">Address 2</label>
        <input className="input1" type="text" placeholder="Street" />
        </div>

        </div>

        <div className="inpparent">

        <div className="inpleft">
         <label className="lab2">City</label>
         <input className="input2" type="text" />
        </div>

        <div className="inpright">
        <label className="lab3">Country</label>
        <select className="select2" placeholder="choose your document type">
        <option></option>
        <option>Palestine</option>
        <option>USA</option>
        <option>UAE</option>
         </select>
        </div>

        </div>
        <input className="inpfile"  paceholder="Upload a File"/>
        <p className="pargfile">Your document shouldn't be three months old</p>






        <button >continue</button>
      </form>
</div>
</div>
</>
)
}
export default Verifiaddres;