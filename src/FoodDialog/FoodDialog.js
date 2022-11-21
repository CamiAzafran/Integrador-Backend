import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { Title } from '../Styles/title';
import { GrisOscuro } from '../Styles/colors';
import { FormatPrice } from '../data/data';

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 150px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const DialogBanner = styled.div`
  min-height: 150px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img})`};
  background-position: center;
  background-size: cover;
  border-radius: 8px 8px 0px 0px;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 75px;
  padding: 5px 10px;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  max-height: 400px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px gray;
  display: flex;
  justify-content: center;
`;
export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  cursor: pointer;
  background-color: ${GrisOscuro};
  text-align: center;
  &:hover {
    opacity: 0.5;
  }
  &:actibe {
    opacity: 1;
  }
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const FoodDialogContainer = ({ openFood, setopenFood, orders, setOrdes }) => {
  const handlerClose = () => {
    setopenFood();
  };
  const order = {
    ...openFood,
  };
  
  const addToOrder = () => {
    setOrdes([...orders, order]);
    handlerClose();
  };

  return (
    <>
      <DialogShadow onClick={handlerClose} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <div>comprameee</div>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton> onClick={addToOrder} Agregar: {FormatPrice(openFood.price)}</ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const FoodDialog = (props) => {
  if (!props.openFood) return null;

  return <FoodDialogContainer {...props} />;
};
