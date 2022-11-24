import React from 'react';
import styled from 'styled-components';
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
  DialogShadow,
} from '../FoodDialog/FoodDialog';
import { formatPrice } from '../../data/data';
import { GrisClaro, GrisOscuro, ColorSombra } from '../../Styles/utilities';
import { useSelector, useDispatch } from 'react-redux';
import { QuantityManage } from './QuantityManage';
import * as cartActions from '../../redux/cart/cart-actions';

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
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(100%)`)};
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
  padding: 10px 10px;
  border-bottom: 1px solid ${ColorSombra};
`;

const OrderItem = styled.div`
  padding: 10px 5px;
  display: grid;
  grid-template-column: 50px 100px 100px;
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

const ItemImg = styled.div`
  width: 46px;
  height: 46px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
`;

export const Order = () => {
  const hidden = useSelector((state) => state.cart.hidden);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handlerToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  return (
    <>
      {hidden && <DialogShadow onClick={handlerToggle} />}
      <OrderStyled show={hidden}>
        {cartItems?.length === 0 ? (
          <OrderContent>Sin ordenes</OrderContent>
        ) : (
          <OrderContent>
            <OrderContainer>Tu pedido:</OrderContainer>

            {cartItems.map((item) => (
              <OrderContainer>
                <OrderItem>
                  <ItemImg img={item.img} />
                  <div>
                    <div>{item.name}</div>
                    {formatPrice(item.price * item.quantity)}
                  </div>

                  <div>
                    <QuantityManage item={item} />
                  </div>
                </OrderItem>
              </OrderContainer>
            ))}
          </OrderContent>
        )}
        <OrderFooter>
          <OrderButton>Ir a pagar {formatPrice(total)}</OrderButton>
        </OrderFooter>
      </OrderStyled>
    </>
  );
};
