import styled from 'styled-components';
import { CustomButton } from '../UI';
import { formatPrice } from '../../utils';
import { useSelector } from 'react-redux';
import { COSTO_ENVIO } from '../../utils';
import { GrisOscuro } from '../../Styles/utilities';

const CardContainer = styled.div`
  max-width: 660px;
  min-width: 320px;
`;

const CardSummaryStyled = styled.div`
  margin-top: 62px;
  background-color: ${GrisOscuro};
  border-radius: 15px;
  width: 400px;
  box-shadow: 0 6px 10px 0 #121212;
`;

const CardSummaryContent = styled.div`
  padding: 24px 32px 15px;
  border-radius: 15px 15px;
  background-color: ${GrisOscuro};
`;

const UlCard = styled.ul`
  list-style: none;
  padding: 0;
`;

const LiCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: dimgray;
  margin-bottom: 15px;
`;

const RowCard = styled.hr`
  height: 1px;
  width: 100%;
  background-color: #1c1c1c;
  border: none;
`;

const TotalCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1px;
  color: lightgray;
`;

export const CardSummary = ({ isValid }) => {
  const totalItems = useSelector((state) =>
    state.cart.cartItems.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    )
  );
  return (
    <CardContainer>
      <CardSummaryStyled>
        <CardSummaryContent>
          <UlCard>
            <LiCard>
              <p>Costo de Productos</p>
              <span>{formatPrice(totalItems)}</span>
            </LiCard>
            <LiCard>
              <p>Costo de Envío</p>
              <span>{formatPrice(COSTO_ENVIO)}</span>
            </LiCard>
          </UlCard>
          <RowCard />
          <TotalCard>
            <h4>Total</h4>
            <h4>{formatPrice(COSTO_ENVIO + totalItems)}</h4>
          </TotalCard>
          <CustomButton w="100%" m="0px" disabled={isValid}>
            Pagar
          </CustomButton>
        </CardSummaryContent>
      </CardSummaryStyled>
    </CardContainer>
  );
};
