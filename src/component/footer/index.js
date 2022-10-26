import React from "react";
import styled from "styled-components";

const Divfooter=styled.div`
display:flex
`;
const Pargraphtalentsfooter=styled.a`
margin-top:50px;
margin-left:90px;
font-size:13px;
color:#000;
text-decoration:none;
`;
const PargraphContactsfooter=styled.a`
margin-top:50px;
margin-left:40px;
font-size:13px;
color:#000;
text-decoration:none;
`;
const PargraphPrivacyfooter=styled.a`
margin-top:50px;
margin-left:40px;
font-size:13px;
padding-bottom:6.5%;
color:#000;
text-decoration:none;
`;

function Footer(){
return(
<Divfooter>
<Pargraphtalentsfooter href="#">Talents Valley</Pargraphtalentsfooter>
<PargraphContactsfooter href="#">Contacts</PargraphContactsfooter>
<PargraphPrivacyfooter href="#">Privacy & Terms</PargraphPrivacyfooter>


</Divfooter>

)
}
export default Footer;