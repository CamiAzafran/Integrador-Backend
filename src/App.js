import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';

import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { Order } from './Orders/Order';

import { useOpenFood } from './hooks/useOpenFood';
import { useOrders } from './hooks/useOrders';

function App() {
  const opendFood = useOpenFood();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...opendFood} {...orders}/>
      <Navbar />
      <Order {...orders}/>
      <Banner>
        <h2>Los panchos más simpaticos</h2>
        <p>Pedi online!</p>
      </Banner>
      <Menu {...opendFood} />
    </>
  );
}

export default App;
