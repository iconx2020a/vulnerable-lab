import React, { useState } from 'react';
import styled from "styled-components";
import { Button } from "antd";
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

export const Downloads = () =>{
  const [flag, setFlag] = useState(false);
    fetch('/key', {
      }).then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "admin_ssh_key.pem";
        document.body.appendChild(link);
       if (flag)
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });

  return (
    <Nav> 
   <div>
      <Button type="primary" onClick={() =>{ 
                      setFlag(true);
                      Downloads();
                    }} >
        Download the SSH key for Administrators
        
      </Button>
    </div>

          </Nav>
  );
}

export default Downloads;




 
      
