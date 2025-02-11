import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;
const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }
  input {
    width: 100%;
    margin-bottom: 1em;
  }
`;


const UserForm = (props:any) => {
  // set the default state of the form

  const [values, setValues] = useState<any>();
  // update the state when a user types in the form
  const onChange = (event:any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    //console.log(values);
  };
/*
const myRedirect = ()=>{

  const navigate = useNavigate();

  if (localStorage.getItem("token") ==="member")
    //  return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
     return navigate("/MemberNavigation", { replace: true });
     else
  return  navigate("/InNavigation", { replace: true });


};
*/

  return (
    <Wrapper>
      {/* Display the appropriate form header */}
      {props.formType === "signup" ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
      {/* perform the mutation when a user submits the form */}
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          props.action({
            variables: {
              ...values,
            },
          });



        }


      }
      >
        {props.formType === "signup" && (
          <React.Fragment>
            <label htmlFor="name">Username:</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Username"
              onChange={onChange}
            />
          </React.Fragment>
        )}
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};
export default UserForm;
