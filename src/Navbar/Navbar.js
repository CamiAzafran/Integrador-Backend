import React from 'react';
import styled from 'styled-components';

const NavbarStyled = styled.div`
  padding: 10px;
  position: fixed;
  background-color: #000000;
  width: 100%;
  z-index: 999;
`;

export const Navbar = () => {
  return <NavbarStyled>
    <h1>Malvina</h1>
  </NavbarStyled>;
};
