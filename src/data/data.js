export const foodItems = [
  {
    name: 'Pancho Simpatico',
    img: 'img/panchos-1.jpg',
    section: 'Panchos',
  },
  {
    name: 'Pancho Pulpito',
    img: 'img/panchos-2.jpg',
    section: 'Panchos',
  },
  {
    name: 'Pancho Genial',
    img: 'img/panchos-3.jpg',
    section: 'Panchos',
  },
  {
    name: 'Papas Simpaticas',
    img: 'img/papas-1.jpg',
    section: 'Papas',
  },
  {
    name: 'Papas Pulpito',
    img: 'img/papas-2.jpg',
    section: 'Papas',
  },
  {
    name: 'Papas Ultra Geniales',
    img: 'img/papas-3.jpg',
    section: 'Papas',
  },
  {
    name: 'Bebida Simpatica',
    img: 'img/bebida-1.jpg',
    section: 'Bebidas',
  },
  {
    name: 'Bebida Pulpito',
    img: 'img/bebida-2.jpg',
    section: 'Bebidas',
  },
  {
    name: 'Bebida Genial',
    img: 'img/bebida-3.jpg',
    section: 'Bebidas',
  },
];

export const Foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section] = [...res[food.section], food];

  return res;
}, {});
