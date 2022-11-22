import React from 'react';
import styled from 'styled-components';
import imgLogo from '../../assets/logo-panchos.jpg';
import { CartIcon } from '../Cart/CartIcon';

const NavbarStyled = styled.div`
  padding: 10px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid #1c1c1c;
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;
`;

const NavigationMenu = styled.div`
  display: flex;
  padding: 15px;
  align-self: flex-end;
  margin-right: 20px;
`;

export const Navbar = () => {
  return (
    <NavbarStyled>
      <Logo src={imgLogo} />
      <NavigationMenu>
        <CartIcon></CartIcon>
      </NavigationMenu>
    </NavbarStyled>
  );
};
