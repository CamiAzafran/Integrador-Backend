import { useState } from 'react';

export const useOrders = () => {
  const [ordes, setOrdes] = useState([]);
  return {
    ordes,
    setOrdes,
  };
};
