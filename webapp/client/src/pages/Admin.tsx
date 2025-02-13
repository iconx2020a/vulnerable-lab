import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";


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
  const [data, setData] = useState<any>();
  const [cookie] = useCookies(['SessionToken']);
  useEffect(() => {

    fetch('/key', {
      headers: {
    'Content-Type': 'application/text',
      'authorization' : cookie.SessionToken
  },
      }).then(req => req.text()).then(setData);
  }, []);


  return (
    <Nav>
      <Header />
      <br/> <h2> Welcome to Raindoff service portal Admin page </h2>
    <div>
      <p><b>Since administrators keep on forgetting their passwords we have created ssh private key to replace passwords.
      You are responsible for the security of the ssh private key. Use it together with your user name to access the victim2 server with ip:192.168.42.156 
      <br /> Very big thanks to the new Security Manager!!.
  </b></p>
     </div>
   <div>
      <p style={{color: "tometo"}}> Make sure you format the key before you use it !!! </p> 
       <ul>
      <li>Copy the key line by line (one line after the order) and paste them in the same file.</li>
       <li>Remove the LF characters by pressing the enter key on each line (Enter key first and back key afterwards).</li>
       <li>Change the file permission (chmod 400 filename.key).</li>
       <li>You must change the permission back to 777 if the formatting fails. This will enable you reformat the file. Make sure you change it back to 400 when you succeed in formatting the key correctly.</li>       
      </ul> 
       <a href="https://unix.stackexchange.com/questions/577402/ssh-error-while-logging-in-using-private-key-loaded-pubkey-invalid-format-and">See this example</a>

   </div>   
<h3> </h3>
     <br/>
    <div>
      {data}
  </div>
          </Nav>
  );
}

export default Admin;
