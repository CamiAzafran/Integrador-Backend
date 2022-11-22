import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ShoopingIcon } from '../../assets/cart-icon.svg';

const CartIconStyled = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  color: white;
`;

export const CartIcon = () => {
  return (
    <CartIconStyled>
      <ShoopingIcon style={{ width: '24px', height: '24px' }} />
      <ItemCount>{0}</ItemCount>
    </CartIconStyled>
  );
};
