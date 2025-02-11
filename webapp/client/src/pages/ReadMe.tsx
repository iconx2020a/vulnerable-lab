//Read me
import React from "react";
import { useEffect } from "react";
export const ReadMe = () => {
  useEffect(() => {
    // update the document title
    document.title = "Reaad Me";
  });
  return (
    <div>
      <h1>Read Me</h1>
      <p>This page for manbers. Members have least privilege to systems <br/> It is cool to join as a member but you will boost you profile if you ara admin</p>
         </div>
  );
};
