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

    fetch('https://localhost:4000/key', {
      headers: {
    'Content-Type': 'application/text',
      'authorization' : cookie.SessionToken
  },
      }).then(req => req.text()).then(setData);
  }, []);


  return (
    <Nav>
      <Header />
      <br/> <h2>Admin Welcome </h2>
      <p><b>Since you keep on forgetting your password we have create ssh key for you to make your login super secure.
      You are responsible for the security of your private key </b></p>
     <h3> </h3>
     <br/>
    <div>
      {data}
  </div>
          </Nav>
  );
}

export default Admin;
