import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link, Router } from "react-router-dom";
import styled from "styled-components";
import { query } from "../pages/SignUp";
import { useNavigate } from "react-router-dom";
import ButtonAsLink from "./ButtonAsLink";

import { useState } from "react";
import { useCookies } from "react-cookie";

const UserState = styled.div`
  margin-left: auto;
`;
// local query
const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;


const Header = () => {
  const navigate = useNavigate();
const [cookie, setCookie, removeCookie] = useCookies(['SessionToken']);

// Remove cookie
  const { data, client } = useQuery(IS_LOGGED_IN);
  return (
    <header>
      <h2>Welcome Raindoff service portal</h2>
      <UserState>
        {data.isLoggedIn ? (
          <ButtonAsLink
            onClick={() => {
              // remove the token
              localStorage.removeItem("token");
              removeCookie("SessionToken");
              // clear the application's cache
              client.resetStore();
              // update local state
              client.writeQuery({
                query,
                data: {
                  isLoggedIn: false,

                },
              });

              navigate("/", { replace: true });

              }}
          >
            Logout
          </ButtonAsLink>
        ) : (
          <p>
            <Link to={"/Signin"}>Sign In</Link> or{" "}
            <Link to={"/Signup"}>Sign Up</Link>
          </p>
        )}
      </UserState>

    </header>
  );
};
export default Header;
