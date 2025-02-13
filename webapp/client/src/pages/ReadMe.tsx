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
      <h1>Raindoff service portal-Read Me</h1>
      <p>This website is exclusively made for employees who want to request for administrative privileges.
     <br /> Anyone can register as a member with an email address (username@acit.com) but we will only grant
     <br />  admin privilege to trustworthy employees.
     <br /> There is one exception though, we have decided to add some of the Samba users of the victim1,
     <br />  machine (192.168.42.100) as administrators because the Samba system was down last week. 
     <br />  We will remove them asp. 
     <br /> This site is super secure because  everything is encrypted with TLS (https).
    <br /> Note that hackers are not welcome here. We hate hackers with passion :(.
</p>
  </div>
  );
};
