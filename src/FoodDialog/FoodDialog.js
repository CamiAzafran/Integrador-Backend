import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';

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

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const FoodDialogContainer = ({ openFood }) => {
  return (
    <>
      <DialogShadow />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.names}</DialogBannerName>
        </DialogBanner>
        algo
      </Dialog>
    </>
  );
};

export const FoodDialog = (props) => {
if(!props.openFood) return null;

  return <FoodDialogContainer {...props} />;
};
