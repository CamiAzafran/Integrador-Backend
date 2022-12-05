export const foodItems = [
  {
    id: 1,
    name: 'Pancho Simpatico',
    img: '/static/img/panchos-1.jpg',
    section: 'Panchos',
    description: 'Pancho bastante simpatico con muchas cosas.',
    price: 500,
  },
  {
    id: 2,
    name: 'Pancho Pulpito',
    img: '/proyecto-integrador/public/img/panchos-2.jpg',
    section: 'Panchos',
    description: 'Pancho con cosas verdes arriba y ketchup.',
    price: 500,
  },
  {
    id: 3,
    name: 'Pancho Genial',
    img: '/static/img/panchos-3.jpg',
    section: 'Panchos',
    description:
      'Pancho extremadamente genial, ideal para comer con las otras cosas geniales.',
    price: 500,
  },
  {
    id: 4,
    name: 'Papas Simpaticas',
    img: '/static/img/papas-1.jpg',
    section: 'Papas',
    description: 'Papas muy simpaticas y naranjas.',
    price: 500,
  },
  {
    id: 5,
    name: 'Papas Pulpito',
    img: '/static/img/papas-2.jpg',
    section: 'Papas',
    description: 'Papas con algo que no te puedo decir porque es secreto.',
    price: 500,
  },
  {
    id: 6,
    name: 'Papas Ultra Geniales',
    img: '/static/img/papas-3.jpg',
    section: 'Papas',
    description: 'Papas con cosas Ultra Geniales y ketchup.',
    price: 500,
  },
  {
    id: 7,
    name: 'Bebida Simpatica',
    img: '/static/img/bebida-1.jpg',
    section: 'Bebidas',
    description: 'Jugo de limón con menta, muy simpatica.',
    price: 500,
  },
  {
    id: 8,
    name: 'Bebida Pulpito',
    img: '/static/img/bebida-2.jpg',
    section: 'Bebidas',
    description: 'Coquita con hielo.',
    price: 500,
  },
  {
    id: 9,
    name: 'Bebida Genial',
    img: '/static/img/bebida-3.jpg',
    section: 'Bebidas',
    description: 'Jugo de naranja con cosas geniales.',
    price: 500,
  },
];

export const arraySections = [
  {
    section: 'Panchos',
    imgTag: '/static/img/panchos-2.jpg',
  },
  {
    section: 'Papas',
    imgTag: '/static/img/papas-2.jpg',
  },
  {
    section: 'Bebidas',
    imgTag: '/static/img/bebida-2.jpg',
  },
];

export const Foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section] = [...res[food.section], food];

  return res;
}, {});
