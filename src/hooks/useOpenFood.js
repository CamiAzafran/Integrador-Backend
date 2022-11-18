import { useState } from 'react';

export const useOpenFood = () => {
  const [openFood, setopenFood] = useState(null);
  return {
    openFood,
    setopenFood,
  };
};
