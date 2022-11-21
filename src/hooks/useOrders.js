import { useState } from 'react';

export const useOrders = () => {
  const [ordes, setOrders] = useState([]);
  return {
    ordes,
    setOrders,
  };
};
