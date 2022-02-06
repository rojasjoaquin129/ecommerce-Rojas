const items = [
  {
    id: "1",
    name: "iponeX",
    price: "99.99",
    img: "https://http2.mlstatic.com/D_NQ_NP_660724-MLA48591993193_122021-O.webp",
    stock: 15,
    description: "esto es un celular",
  },
  {
    id: "2",
    name: "Toper",
    price: "123",
    img: "https://http2.mlstatic.com/D_NQ_NP_869470-MLA48280172654_112021-O.webp",
    stock: 12,
    description: "esto es una zapatillas",
  },
  {
    id: "3",
    name: "Heladera",
    price: "923.99",
    img: "https://http2.mlstatic.com/D_NQ_NP_664398-MLA47668885112_092021-O.webp",
    stock: 13,
    description: "esto es una heladera",
  },
  {
    id: "4",
    name: "Aire Acondicionado",
    price: "923.99",
    img: "https://http2.mlstatic.com/D_NQ_NP_667004-MLA40913899475_022020-O.webp",
    stock: 13,
    description: "esto es un aire acondicionado",
  },
];

export const itemsList = new Promise((resolve) => {
  setTimeout(() => {
    resolve(items);
  }, 2000);
});
export const getItem = new Promise((resolve) => {
  setTimeout(() => {
    resolve(items[1]);
  }, 2000);
});
