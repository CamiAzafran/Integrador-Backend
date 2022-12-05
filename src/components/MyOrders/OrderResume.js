import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Container, OrderHistory, Wrapper } from './MyOrders';
import { CustomButton } from '../UI';

const HeaderResume = styled.div`
  display: flex;
  border-bottom: 1px solid #1c1c1c;
  margin-bottom: 30px;
`;

const ProductResume = styled.div`
  padding: 15px 20px;
`;

const ProductUl = styled.ul`
  padding: 0px;
  list-style: none;
`;
const ProductLi = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: space-between;
`;

const ItemImg = styled.div`
  width: 60px;
  height: 60px;
  background-image: ${({ img }) => `url(${img})`} ;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
`;
const InfoProducts = styled.div`
  width: 100%;
  padding: 0 15px;
`;

const PriceResume = styled.div`
  width: 100px;
  text-align: right;
`;

const Quantity = styled.span`
  display: block;
  color: red;
`;

const CostResume = styled.div`
  border-top: 1px solid #1c1c1c;
  padding: 15px 20px;
`;

const CostLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
`;

export const OrderResume = () => {
  let { orderId } = useParams();
  let { orders } = useSelector((state) => state.orders);

  let [order] = orders.filter((order) => order.id === orderId);
  return (
    <Container>
      <OrderHistory>
        <Wrapper>
          <HeaderResume>
            <Link to="/mis-ordenes">
              <CustomButton w="60px">Volver</CustomButton>
            </Link>
            <h3 style={{color: 'rgb(122 122 122)'}} >Resumen orden: {orderId}</h3>
          </HeaderResume>
          <ProductResume>
            <h3 style={{color: 'rgb(122 122 122)'}} >Productos</h3>
            <ProductUl>
              {order.items.map((item) => (
                <ProductLi>
                  <ItemImg img={item.img} />
                  <InfoProducts>
                    <p style={{color: 'rgb(122 122 122)'}} >
                      {item.name} - {item.description}
                    </p>
                  </InfoProducts>

                  <PriceResume>
                    <Quantity style={{color: 'rgb(122 122 122)'}} >{item.quantity}U</Quantity>
                    <strong style={{color: 'rgb(122 122 122)'}} >${item.price}</strong>
                  </PriceResume>
                </ProductLi>
              ))}
            </ProductUl>
          </ProductResume>
          <CostResume>
            <h3 style={{color: 'rgb(122 122 122)'}} >Costos</h3>
            <ProductUl>
              <CostLi>
                <span style={{color: 'rgb(62 62 62)'}} >Costo de los productos </span>

                <span style={{color: 'rgb(62 62 62)'}} >${order.subtotal}</span>
              </CostLi>
              <CostLi>
                <span style={{color: 'rgb(62 62 62)'}} >Costo de envío </span>

                <span style={{color: 'rgb(62 62 62)'}} >${order.shippingPrice}</span>
              </CostLi>
              <CostLi>
                <span style={{color: '#fff'}} >
                  <strong>Total</strong>
                </span>

                <span style={{color: '#fff'}} >
                  <strong>${order.total}</strong>
                </span>
              </CostLi>
            </ProductUl>
          </CostResume>
        </Wrapper>
      </OrderHistory>
    </Container>
  );
};