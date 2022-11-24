import styled from 'styled-components';
import { GrisClaro } from '../../Styles/utilities';

export const TagsMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const TagCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ selected }) => (selected ? '#1f1f1f' : '#141414')};
  color: ${GrisClaro};
  box-shadow: 0 3px 5px 0 #292929;
  border-radius: 20px;
  padding: 0.35rem;
  cursor: pointer;
  &:hover {
    background: #1f1f1f;
    box-shadow: none;
  }
`;

export const TagImg = styled.div`
  border-radius: 50%;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  width: 30px;
  height: 30px;
  margin-right: 0.75rem;
`;
