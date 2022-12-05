import React from 'react';
/* import styled from 'styled-components'; */
import { Wrapper, LayoutPage } from '../components/UI';
import { CheckoutForm } from '../components/CheckoutForm/CheckoutForm';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Checkout = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  if (!currentUser) {
    navigate.push('/login');
  }
  return (
    <LayoutPage>
      <Wrapper>
       <CheckoutForm/>
      </Wrapper>
    </LayoutPage>
  );
};

export default Checkout;
