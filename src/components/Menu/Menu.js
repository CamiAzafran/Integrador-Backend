import React from 'react';
import styled from 'styled-components';

import { FormatPrice } from '../../data/data';
import { FoodGrid, Food, FoodLabel } from './FoodGrid';

import { useSelector } from 'react-redux';

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 20px 50px 20px;
  z-index: 3;
`;

export const Menu = ({ setopenFood }) => {
  const Foods = useSelector((state) => state.products.foods);

  
  return (
    <MenuStyled>
      {Object.entries(Foods).map(([sectionName, foods]) => {
        return (
          <>
            <h3>{sectionName}</h3>
            <FoodGrid>
              {foods.map((food) => (
                <Food img={food.img} onClick={() => setopenFood(food)}>
                  <FoodLabel>
                    <div>{food.name}</div>
                    <div>{FormatPrice(food.price)}</div>
                  </FoodLabel>
                </Food>
              ))}
            </FoodGrid>
          </>
        );
      })}
    </MenuStyled>
  );
};