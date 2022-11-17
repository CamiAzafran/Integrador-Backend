import styled from 'styled-components';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-column: 1fr 1fr;
  gap: 10px;
`;

export const Food = styled.div`
  height: 100px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
`;
