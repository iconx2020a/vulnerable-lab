
import { useLazyQuery, useApolloClient, gql } from "@apollo/client";
import UserForm from "../components/UserForm";
import { query } from "./SignUp";
import { useNavigate } from "react-router-dom";
import {  useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";

const GET_ADMIN = gql`
query findUser($email: String!, $password:String!) {
  findUser(email: $email, password:$password) {
    name
    role
    password
  }
}
`;
const SignIn = (props:any) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Sign In";
  });

  const client = useApolloClient();
  const [cookies, setCookies] = useCookies<any>(['user']);
  const [values, setValues] = useState<any>();

const [signIn, { called, loading, data }] = useLazyQuery(GET_ADMIN, {  variables: values,
    onCompleted: (data) => {
        client.writeQuery({
        query,
        data: {
          isLoggedIn: true,
          token: data.findUser.role,
        },
      });


  if (data.findUser.role ==="member"){
      setCookies("SessionToken", data.findUser.role , { path: '/' });
     navigate("/Member", { replace: true });

   }

     else {
      setCookies("SessionToken", data.findUser.role , { path: '/' });
      navigate("/Admin", { replace: true });
  }
    },
  });

const errorMessage = ()=>{
  if   (called && loading)
    return <p>Loading...</p>;
    else if (!called)
    return ;
    else if (!(called && loading))
     return <h2>...sign in error...</h2>;
     else return ;
}
  return (
    <React.Fragment>
      <UserForm action={signIn} formType="signIn" />
      {errorMessage()}
      <button onClick={() => navigate("/")}>Home</button>
    </React.Fragment>
  );
};

export default SignIn;
