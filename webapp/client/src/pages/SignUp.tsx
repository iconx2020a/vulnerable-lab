import React, { useEffect } from "react";
//import { useCookies } from 'react-cookie';
import {
  useMutation, useApolloClient, gql,
} from "@apollo/client";
import { useNavigate} from "react-router-dom";
import UserForm from "../components/UserForm";


export const query = gql`
  query LoginQuery {
    isLoggedIn
  }
`;

const SIGNUP_USER = gql`
  mutation signUp( $name: String!, $email: String!, $password: String!) {
    signUp( name: $name, email: $email, password: $password){
      name
      email
      role
    }
  }
`;

const SignUp = () => {
//  const [cookies, setCookie] = useCookies<any>(['user']);
  const client = useApolloClient();
  useEffect(() => {
    document.title = "Sign Up ";
  });

const navigate = useNavigate();
const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
  onCompleted: (result) => {
    //localStorage.setItem("token", result.signUp.menber);
    client.writeQuery({
      query,
      data: {
        isLoggedIn: true,
      },
    });
    navigate("/SignIn", { replace: true });
  },
});


return (
<React.Fragment>
<UserForm action={signUp} formType="signup" />
{/* if the data is loading, display a loading message*/}
{loading && <p>Loading...</p>}
{/* if there is an error, display a error message*/}
{error && <p>Error creating an account!</p>}
<button onClick={() => navigate("/")}>Home</button>
</React.Fragment>
);
};
export default SignUp;
