import React from 'react';
import styled from 'styled-components';
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from '../FoodDialog/FoodDialog';
import { FormatPrice } from '../../data/data';
import { GrisClaro, GrisOscuro, ColorSombra } from '../../Styles/colors';
import { useSelector } from 'react-redux';

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 93px;
  width: 340px;
  background-color: black;
  height: calc(100% - 93px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px ${ColorSombra};
  display: flex;
  flex-direction: column;
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(100%)')};
  transition-property: transform;
  transition-duration: 0.5s;
`;

const OrderContent = styled(DialogContent)`
  color: ${GrisClaro};
  padding: 20px;
  max-height: 100%;
  height: 100%;
`;

const OrderContainer = styled.div`
  color: ${GrisClaro};
  padding: 10px 5px;
  border-bottom: 1px solid ${ColorSombra};
`;

const OrderItem = styled.div`
  padding: 10px 5px;
  display: grid;
  grid-template-column: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const OrderFooter = styled(DialogFooter)`
  box-shadow: 0px -2px 10px 0px ${ColorSombra};
`;

const OrderButton = styled(ConfirmButton)`
  background-color: ${GrisClaro};
  color: ${GrisOscuro};
  &:hover {
    opacity: 0.9;
  }
`;

export const Order = ({ orders }) => {
  const hidden = useSelector((state) => state.cart.hidden);

  return (
    <OrderStyled show={hidden}>
      {orders?.length === 0 ? (
        <OrderContent>Sin ordenes</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Tu pedido:</OrderContainer>

          {orders.map((order) => (
            <OrderContainer>
              <OrderItem>
                <div>1</div>
                <div>{order.name}</div>
                <div>{FormatPrice(order.price)}</div>
              </OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}
      <OrderFooter>
        <OrderButton>Ir a pagar</OrderButton>
      </OrderFooter>
    </OrderStyled>
  );
};
