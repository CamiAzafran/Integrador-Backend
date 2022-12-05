import styled from 'styled-components';


export const Banner = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/static/img/banner-1.jpg');
  filter: contrast(75%) brightness(75%);
  background-attachment: fixed;
  background-position: center -180px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  color: #fff;
  margin: 0px 20px 0px 20px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
