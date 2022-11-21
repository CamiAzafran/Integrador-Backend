export const FormatPrice = (price) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(price);
};

export const foodItems = [
  {
    name: 'Pancho Simpatico',
    img: 'img/panchos-1.jpg',
    section: 'Panchos',
    price: 500,
  },
  {
    name: 'Pancho Pulpito',
    img: 'img/panchos-2.jpg',
    section: 'Panchos',
    price: 500,
  },
  {
    name: 'Pancho Genial',
    img: 'img/panchos-3.jpg',
    section: 'Panchos',
    price: 500,
  },
  {
    name: 'Papas Simpaticas',
    img: 'img/papas-1.jpg',
    section: 'Papas',
    price: 500,
  },
  {
    name: 'Papas Pulpito',
    img: 'img/papas-2.jpg',
    section: 'Papas',
    price: 500,
  },
  {
    name: 'Papas Ultra Geniales',
    img: 'img/papas-3.jpg',
    section: 'Papas',
    price: 500,
  },
  {
    name: 'Bebida Simpatica',
    img: 'img/bebida-1.jpg',
    section: 'Bebidas',
    price: 500,
  },
  {
    name: 'Bebida Pulpito',
    img: 'img/bebida-2.jpg',
    section: 'Bebidas',
    price: 500,
  },
  {
    name: 'Bebida Genial',
    img: 'img/bebida-3.jpg',
    section: 'Bebidas',
    price: 500,
  },
];

export const Foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section] = [...res[food.section], food];

  return res;
}, {});
