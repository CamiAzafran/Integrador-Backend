import { Input, FormStyled, FormContent } from '../UI';
import useForm from '../../hooks/useForm';
import { VALIDATOR_REQUIRE } from '../../utils';
import { CardSummary } from '../CardSummary/CardSummary';
import { useSelector, useDispatch } from 'react-redux';
import { COSTO_ENVIO } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../UI/Spinner';
import * as orderActions from '../../redux/orders/order-actions';
import * as cartActions from '../../redux/cart/cart-actions';

export const CheckoutForm = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { cartItems } = useSelector((state) => state.cart);
  const { purchased, loading } = useSelector((state) => state.orders);
  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formState, inputHandler] = useForm(
    {
      domicilio: {
        value: '',
        isValid: false,
      },
      localidad: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!formState.isValid) {
      alert('Completa todos los datos');
      return;
    }
    const orderData = {
      userId: currentUser.id,
      shippingDetails: {
        domicilio: formState.inputs.domicilio.value,
        localidad: formState.inputs.localidad.value,
      },
      items: [...cartItems],
      shippingPrice: COSTO_ENVIO,
      subtotal: subTotal,
      total: COSTO_ENVIO + subTotal,
    };
    dispatch(orderActions.createOrder(orderData));
    dispatch(cartActions.clearCart());

    alert('joya');
  };

  if (purchased) {
    dispatch(orderActions.purchaseInit());
    navigate.push('/mis-ordenes');
  }

  return (
    <form onSubmit={handlerSubmit}>
      <FormStyled>
        <FormContent>
          <Input
            id="domicilio"
            label="Domicilio"
            type="text"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Campo Obligatorio"
          />

          <Input
            id="localidad"
            label="Localidad"
            type="text"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Campo Obligatorio"
          />
        </FormContent>
      </FormStyled>
      <CardSummary 
      isValid={!formState.isValid}
      subTotal={subTotal}
        envio={COSTO_ENVIO}
       />
       {loading && <Spinner/>}
    </form>
  );
};
