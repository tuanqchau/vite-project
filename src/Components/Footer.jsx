// Footer.jsx
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>© {new Date().getFullYear()} Tuan Chau</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  background-color: transparent;
  color: var(--text-secondary); /* uses CSS variable, adapts to light/dark mode */

  text-align: center;
  padding: 20px 0;
  position: relative;
  font-size: 14px;
`;
export default Footer;
