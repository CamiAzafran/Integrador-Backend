import styled, { css } from 'styled-components';
import { NegroFondo } from '../../Styles/utilities/Colors';

export const CustomButton = styled.button`
  font-family: 'Montserrat', cursive;
  font-weight: 700;
  z-index: 999;
  border: none;
  margin: ${({ m }) => (m ? `${m}` : '10px')};
  color: white;
  height: 20px;
  border-radius: 8px;
  color: white;
  padding: 20px;
  width: ${({ w }) => (w ? `${w}` : '200px')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${NegroFondo};
  ${({ disabled }) =>
    disabled &&
    css`
      background: #181818 !important;
      color: #282828;
      border: none;
      cursor: not-allowed !important;
      transition: 0.5s ease-out;
    `}
`;
