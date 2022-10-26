import React,{useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../image/logo.JPG";
import warinig from "../../image/warning.jpg";
import correct from "../../image/correct.jpg";
import "./style.css";
import Styled from "styled-components";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Signupall = Styled.div`
box-sizing: border-box;
background-color: #fff;
box-shadow: 0px 3px 6px #00000029;
width:450px;
height:755px;
border-radius: 10px;
margin-top: 60px;
margin-left:30%;
font-family:sans-serif;
`;
const H4signup = Styled.h4`
// font-size: 20px;
margin-left:175px;
`;
const Formsignup=Styled.form`
width: 80%;
margin-left:10%;
`;
const Pargraphsignup=Styled.p`
font-family:sans-serif;
margin-top:-20px;
font-size:13px;
`;
const Divname=Styled.div`
display: flex; 
margin-top: 30px;
`;
const Labelsignup=Styled.label`
font-size:12px;
`;
const Labelnotewrongsignup=Styled.label`
color:#EE404C;
margin-bottom: 20px;
margin-left:4px;
font-size:12px;
`;
const Inputfirstsignup=Styled.input`
width:90%;
border-radius:5px;
border:.5px solid rgb(209, 209, 209);
height:35px;
`;
const Inputlassignupt=Styled.input`
width:95%;
border-radius:5px;
border:.5px solid rgb(209, 209, 209);
height:35px;
`;
const Divemailsignup=Styled.div`
margin-top:20px;
`;
const Inputemailsignup =Styled.input`
width:350px;
height:35px;
border-radius:5px;
border:.5px solid rgb(209, 209, 209);
`;
const Divpasssignup=Styled.div`
margin-top:20px;
`;
const Inputpasssignup=Styled.input`
width:350px;
height:35px;
border-radius:5px;
border:.5px solid rgb(209, 209, 209);
// margin-bottom:20px;
`;
const Divoptionsignup=Styled.div`
margin-top:20px;
`;
const Selectsignup=Styled.select`
width:355px;
height:35px;
margin-left:3px;
border:.5px solid rgb(209, 209, 209);
border-radius:5px;
font-family:sans-serif;
`;
const Buttonsignup=Styled.button`
background-color: rgb(42, 81, 252); 
border:.5px solid rgb(209, 209, 209);
margin-top:40px;
color: #fff;
border-radius: 5px; 
width:355px;
height:35px;
font-family:sans-serif;
margin-left:2px;
`;
const Pargraphanchorsignup=Styled.p`
margin-left:25%;
margin-top:20px;
color: rgb(153, 146, 146);
font-family:Arial, Helvetica, sans-serif;
font-size:14px;
`;
const Anchor1signup=Styled.a`
color: rgb(42, 81, 252);
text-decoration: none;
`;


function Signup(){
const[firstname,setFirstname]=useState('');
const[lastname,setLastname]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[country,setCountry]=useState('');
const [tel, setTel] = useState();
const[err,setErr]=useState(false);

async function handelsubmit(e){
 e.preventDefault();
if (firstname !== ""){
  setErr(true)
 }
 if (lastname !== "") {
  setErr(true)
 }if (email !=="") {
  setErr(true)
 } else if (!email.includes("@")) {
  setErr(true)
 } if (password !== "") {
  setErr(true)
 } else if (password.length < 8 || password.includes("@", "/", "#",".","$","%","&")) {
  setErr(true)
}if (country!== ""){
  setErr(true)
} 
if (tel!==""){
  setErr(true)
} 
   console.log({firstname,lastname,email,password,country})


  const result=await fetch("https://talents-valley.herokuapp.com/api",{
   method:'POST',
   headers:{
     "Content-Type":"application/json",
   },
   body:JSON.stringify({firstname,lastname,email,password,country})
  })

   localStorage.setItem("keyId",JSON.stringify(result.json()))

}
return(
    <Signupall>
        <img src={logo} alt="..." className="imgiconsignup"/>
     <H4signup>Talents Valley</H4signup>

     <Formsignup onSubmit={handelsubmit}>
     <Pargraphsignup><b>Creat Your Account</b></Pargraphsignup>

        < Divname>

        <div>
        <Labelsignup><b>First Name</b></Labelsignup>
        <Inputfirstsignup type="text" placeholder="Enter first Name" value={firstname}  onChange={(e)=>setFirstname(e.target.value )}/>
         {err&&firstname==="" ? <Labelnotewrongsignup> firstname required </Labelnotewrongsignup> : ""}
       </div> 

       <div>
       <Labelsignup><b>Last Name</b></Labelsignup>
        <Inputlassignupt  type="text" placeholder="Enter last Name" value={lastname} onChange={(e)=>setLastname(e.target.value )}  />
        {err &&lastname===""?<Labelnotewrongsignup>lastname required</Labelnotewrongsignup>:""}
        </div>

        </ Divname>

        <Divemailsignup>
        <Labelsignup><b>Email</b></Labelsignup>
        <Inputemailsignup type="text" placeholder="email@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value )} />
        {err && email===""?<Labelnotewrongsignup>email required</Labelnotewrongsignup>: err &&!email.includes("@")?<Labelnotewrongsignup>email include @</Labelnotewrongsignup>:""}
        </Divemailsignup>

        <Divpasssignup>
        <Labelsignup><b>Password</b></Labelsignup>
        <Inputpasssignup id="pass" type="password" placeholder="" value={password} onChange={(e)=>setPassword(e.target.value )}/>
        {err&&password===""?<Labelnotewrongsignup>password required</Labelnotewrongsignup>:err && password.length<8?
        <Labelnotewrongsignup><img src={warinig} alt="..." className="correcticon"/>Your password is weak</Labelnotewrongsignup>
        :err &&password.length>=8?
        (<label >
           <img src={correct} alt="..." className="correcticon"/>
        Nice work. This is an excellent password</label>):""}
        </Divpasssignup>
        {/* (document.getElementById("pass").style.borderColor="#0F0") */}
        
        <Labelsignup><b>Phone Number</b></Labelsignup>
        <PhoneInput country={'us'} value={tel} onChange={setTel} className="phone" />
        {/* {err && (tel!=="")?<Labelnotewrongsignup>phone number required</Labelnotewrongsignup>:""} */}

      <Divoptionsignup>
        <Labelsignup><b>Country</b></Labelsignup>
       <Selectsignup name="country" value={country} onChange={(e)=>setCountry(e.target.value)}>
        <option></option>
        <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
    <option value="BA">Bosnia and Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BV">Bouvet Island</option>
    <option value="BR">Brazil</option>
    <option value="IO">British Indian Ocean Territory</option>
    <option value="BN">Brunei Darussalam</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="KH">Cambodia</option>
    <option value="CM">Cameroon</option>
    <option value="CA">Canada</option>
    <option value="CV">Cape Verde</option>
    <option value="KY">Cayman Islands</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="CL">Chile</option>
    <option value="CN">China</option>
    <option value="CX">Christmas Island</option>
    <option value="CC">Cocos (Keeling) Islands</option>
    <option value="CO">Colombia</option>
    <option value="KM">Comoros</option>
    <option value="CG">Congo</option>
    <option value="CD">Congo, Democratic Republic of the Congo</option>
    <option value="CK">Cook Islands</option>
    <option value="CR">Costa Rica</option>
    <option value="CI">Cote D'Ivoire</option>
    <option value="HR">Croatia</option>
    <option value="CU">Cuba</option>
    <option value="CW">Curacao</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands (Malvinas)</option>
    <option value="FO">Faroe Islands</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GF">French Guiana</option>
    <option value="PF">French Polynesia</option>
    <option value="TF">French Southern Territories</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GH">Ghana</option>
    <option value="GI">Gibraltar</option>
    <option value="GR">Greece</option>
    <option value="GL">Greenland</option>
    <option value="GD">Grenada</option>
    <option value="GP">Guadeloupe</option>
    <option value="GU">Guam</option>
    <option value="GT">Guatemala</option>
    <option value="GG">Guernsey</option>
    <option value="GN">Guinea</option>
    <option value="GW">Guinea-Bissau</option>
    <option value="GY">Guyana</option>
    <option value="HT">Haiti</option>
    <option value="HM">Heard Island and Mcdonald Islands</option>
    <option value="VA">Holy See (Vatican City State)</option>
    <option value="HN">Honduras</option>
    <option value="HK">Hong Kong</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option value="IN">India</option>
    <option value="ID">Indonesia</option>
    <option value="IR">Iran, Islamic Republic of</option>
    <option value="IQ">Iraq</option>
    <option value="IE">Ireland</option>
    <option value="IM">Isle of Man</option>
    <option value="IL">Israel</option>
    <option value="IT">Italy</option>
    <option value="JM">Jamaica</option>
    <option value="JP">Japan</option>
    <option value="JE">Jersey</option>
    <option value="JO">Jordan</option>
    <option value="KZ">Kazakhstan</option>
    <option value="KE">Kenya</option>
    <option value="KI">Kiribati</option>
    <option value="KP">Korea, Democratic People's Republic of</option>
    <option value="KR">Korea, Republic of</option>
    <option value="XK">Kosovo</option>
    <option value="KW">Kuwait</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LA">Lao People's Democratic Republic</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libyan Arab Jamahiriya</option>
    <option value="LI">Liechtenstein</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MO">Macao</option>
    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
    <option value="MG">Madagascar</option>
    <option value="MW">Malawi</option>
    <option value="MY">Malaysia</option>
    <option value="MV">Maldives</option>
    <option value="ML">Mali</option>
    <option value="MT">Malta</option>
    <option value="MH">Marshall Islands</option>
    <option value="MQ">Martinique</option>
    <option value="MR">Mauritania</option>
    <option value="MU">Mauritius</option>
    <option value="YT">Mayotte</option>
    <option value="MX">Mexico</option>
    <option value="FM">Micronesia, Federated States of</option>
    <option value="MD">Moldova, Republic of</option>
    <option value="MC">Monaco</option>
    <option value="MN">Mongolia</option>
    <option value="ME">Montenegro</option>
    <option value="MS">Montserrat</option>
    <option value="MA">Morocco</option>
    <option value="MZ">Mozambique</option>
    <option value="MM">Myanmar</option>
    <option value="NA">Namibia</option>
    <option value="NR">Nauru</option>
    <option value="NP">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="AN">Netherlands Antilles</option>
    <option value="NC">New Caledonia</option>
    <option value="NZ">New Zealand</option>
    <option value="NI">Nicaragua</option>
    <option value="NE">Niger</option>
    <option value="NG">Nigeria</option>
    <option value="NU">Niue</option>
    <option value="NF">Norfolk Island</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PK">Pakistan</option>
    <option value="PW">Palau</option>
    <option value="PS">Palestinian Territory, Occupied</option>
    <option value="PA">Panama</option>
    <option value="PG">Papua New Guinea</option>
    <option value="PY">Paraguay</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PN">Pitcairn</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="PR">Puerto Rico</option>
    <option value="QA">Qatar</option>
    <option value="RE">Reunion</option>
    <option value="RO">Romania</option>
    <option value="RU">Russian Federation</option>
    <option value="RW">Rwanda</option>
    <option value="BL">Saint Barthelemy</option>
    <option value="SH">Saint Helena</option>
    <option value="KN">Saint Kitts and Nevis</option>
    <option value="LC">Saint Lucia</option>
    <option value="MF">Saint Martin</option>
    <option value="PM">Saint Pierre and Miquelon</option>
    <option value="VC">Saint Vincent and the Grenadines</option>
    <option value="WS">Samoa</option>
    <option value="SM">San Marino</option>
    <option value="ST">Sao Tome and Principe</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SN">Senegal</option>
    <option value="RS">Serbia</option>
    <option value="CS">Serbia and Montenegro</option>
    <option value="SC">Seychelles</option>
    <option value="SL">Sierra Leone</option>
    <option value="SG">Singapore</option>
    <option value="SX">Sint Maarten</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="SB">Solomon Islands</option>
    <option value="SO">Somalia</option>
    <option value="ZA">South Africa</option>
    <option value="GS">South Georgia and the South Sandwich Islands</option>
    <option value="SS">South Sudan</option>
    <option value="ES">Spain</option>
    <option value="LK">Sri Lanka</option>
    <option value="SD">Sudan</option>
    <option value="SR">Suriname</option>
    <option value="SJ">Svalbard and Jan Mayen</option>
    <option value="SZ">Swaziland</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="SY">Syrian Arab Republic</option>
    <option value="TW">Taiwan, Province of China</option>
    <option value="TJ">Tajikistan</option>
    <option value="TZ">Tanzania, United Republic of</option>
    <option value="TH">Thailand</option>
    <option value="TL">Timor-Leste</option>
    <option value="TG">Togo</option>
    <option value="TK">Tokelau</option>
    <option value="TO">Tonga</option>
    <option value="TT">Trinidad and Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="TR">Turkey</option>
    <option value="TM">Turkmenistan</option>
    <option value="TC">Turks and Caicos Islands</option>
    <option value="TV">Tuvalu</option>
    <option value="UG">Uganda</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UM">United States Minor Outlying Islands</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VU">Vanuatu</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Viet Nam</option>
    <option value="VG">Virgin Islands, British</option>
    <option value="VI">Virgin Islands, U.s.</option>
    <option value="WF">Wallis and Futuna</option>
    <option value="EH">Western Sahara</option>
    <option value="YE">Yemen</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>
        <option value="AE">UAE</option>
        <option value="SA">SAU</option>
        <option value="PL">Palestine</option>
        <option value="US">USA</option>
        <option value="AF">Afghanistan</option>
        <option value="AX">Aland Islands</option>
        <option value="AX">Aland Islands</option>
        <option value="AX">Aland Islands</option>
        <option value="AX">Aland Islands</option>
        <option value="AX">Aland Islands</option>
        <option value="AL">Albania</option>
        <option value="DZ">Algeria</option>
        <option value="AS">American Samoa</option>
        <option value="AD">Andorra</option>
        <option value="AO">Angola</option>
        <option value="AI">Anguilla</option>
        <option value="AQ">Antarctica</option>
        <option value="AG">Antigua and Barbuda</option>
        <option value="AR">Argentina</option>
        <option value="AM">Armenia</option>
        <option value="AW">Aruba</option>
        <option value="AU">Australia</option>
        <option value="AT">Austria</option>
        <option value="AZ">Azerbaijan</option>
        <option value="BS">Bahamas</option>
        <option value="BH">Bahrain</option>
        <option value="BD">Bangladesh</option>
        <option value="BB">Barbados</option>
        <option value="BY">Belarus</option>
        <option value="BE">Belgium</option>
        <option value="BZ">Belize</option>
        <option value="BJ">Benin</option>
        <option value="BM">Bermuda</option>
        <option value="BT">Bhutan</option>
        <option value="BO">Bolivia</option>
       </Selectsignup>
       {err && country===""?<Labelnotewrongsignup>plz country required</Labelnotewrongsignup>:""}
    </Divoptionsignup>

    <div>
    <Link to="/signup/login"><Buttonsignup onSubmit={handelsubmit}>Sign Up</Buttonsignup></Link>
     </div>
 
     <Pargraphanchorsignup>Already have an account?<Link to="/signup/login" ><Anchor1signup>Sign in</Anchor1signup></Link></Pargraphanchorsignup>
    </Formsignup>
    </Signupall>
)
}
export default  Signup;