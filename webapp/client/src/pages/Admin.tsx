import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Downloads from "./Downloads";

const Nav = styled.nav`
  padding: 1em;
  background: #f5f4f0;
  @media (max-width: 700px) {
    padding-top: 64px;
  }
  @media (min-width: 900px) {
    position: fixed;
    width: 920px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`;

export const Admin = () =>{
  
  return (
    <Nav>
      <Header />
    <div>
      <p><b>Since administrators are always forgetting their passwords we have created ssh private key to replace passwords.
      You are responsible for the security of the ssh private key. Use it together with your user name to access the victim2 server with ip:192.168.42.156 
      <br /> Very big thanks to the new Security Manager!!.
  </b></p>
     </div>
   <div>
      <p style={{color: "tometo"}}> Change the file permission (chmod 400 admin.key) !!! </p> 
   </div>   

     <div> <Downloads /></div>
          </Nav>
  );
}

export default Admin;
