import React from 'react';

import { FoodDialog } from '../components/FoodDialog/FoodDialog';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';

const Home = ({ opendFood }) => {
  return (
    <>
      <FoodDialog {...opendFood} />
      <Banner>
        <h2>Los panchos más simpaticos</h2>
        <p>Pedi online!</p>
      </Banner>
      <Menu {...opendFood} />
    </>
  );
};

export default Home;
