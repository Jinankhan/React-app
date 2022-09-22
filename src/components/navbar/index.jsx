import React from "react";
import styled from "styled-components";

import { Logo } from "../logo";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  width: 100%;
  height: 45px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  
  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#1f1f1f"};
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;


const AnchorLink = styled(Link)`
color: #fff;
background-color: transparent;
border: none;
&:hover {
  background-color: transparent;
  border: none;
  color: #00B997;
}
text-decoration:none;
`;




export function Navbar(props) {
  

  const { useTransparent } = props;
  return (
    <NavbarContainer useTransparent={useTransparent} > 
      <BrandContainer>
        <Link to="/" style={{textDecoration:"none"}}> <Logo inline /></Link>
         </BrandContainer>
        <AccessibilityContainer>
        <Marginer direction="horizontal" margin="8px" />
        <AnchorLink to="/customer/access">Login</AnchorLink>
        
      </AccessibilityContainer>
    </NavbarContainer>
  );
}