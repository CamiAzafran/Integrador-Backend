import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';

import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';

import { useOpenFood } from './hooks/useOpenFood';

function App() {
const opendFood = useOpenFood();

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...opendFood} />
      <Navbar />
      <Banner>
        <h2>Los panchos más simpaticos</h2>
        <p>Pedi online!</p>
      </Banner>
      <Menu {...opendFood} />
    </>
  );
}

export default App;
