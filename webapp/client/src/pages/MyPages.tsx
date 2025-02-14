import React from "react";
import { Navigate, Outlet, Route, useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "./Home";
import SignUp, { query } from "./SignUp";
import Admin from "./Admin";
import Member from "./Member";
//import { bootstrap } from 'global-agent';

//import { Cookies, useCookies } from "react-cookie";
// import Apollo Client libraries
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  gql,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { useQuery } from "@apollo/client";
import SignIn from "./SignIn";
import {ReadMe} from "./ReadMe";
const httpLink = new HttpLink({ uri: "/api" });
const cache = new InMemoryCache();
// check for a token and return the headers to the context

console.log("here");
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || "",
    },
  };
});
// create the Apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true,
});

const data = {
  isLoggedIn: !!localStorage.getItem("token"),
};

// write the cache data on initial load
cache.writeQuery({ query, data });
// write the cache data after cache is reset
client.onResetStore((): any => cache.writeQuery({ query, data }));

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

function PrivateRoute({ children }:any) {
   const location = useLocation();
    const { loading, error, data } = useQuery(IS_LOGGED_IN);
    if (loading) return <p>Loading...</p>;
    // if there is an error fetching the data, display an error message
    if (error) return <p>Error!</p>;

    if (!data.isLoggedIn) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/Signin" state={{ from: location }} />
    }
    return children ? children : <Outlet />;
}

export { PrivateRoute };

export const MyPages = () => {
  return (
    <ApolloProvider client={client}>
      <Routes>
        {/* Wrap our routes within the Layout component */}
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
         <Route path="/SignUp" element={<SignUp />} />
         <Route path="/ReadMe" element={<ReadMe />} />
        <Route
         path="/Admin"
         element={
           <PrivateRoute>
             <Admin />
           </PrivateRoute>
         }
       />

      <Route
       path="/Member"
       element={
         <PrivateRoute>
           <Member />
         </PrivateRoute>
       }
      />

      </Routes>
    </ApolloProvider>
  );
};
