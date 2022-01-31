import React from "react";
import Item from "../Item/Item";

const items = [
  {
    id: "1",
    name: "iponeX",
    price: "99.99",
    img: "https://http2.mlstatic.com/D_NQ_NP_660724-MLA48591993193_122021-O.webp",
    stock: 15,
  },
  {
    id: "2",
    name: "Toper",
    price: "123",
    img: "https://http2.mlstatic.com/D_NQ_NP_869470-MLA48280172654_112021-O.webp",
    stock: 12,
  },
  {
    id: "3",
    name: "Heladera",
    price: "923.99",
    img: "https://http2.mlstatic.com/D_NQ_NP_664398-MLA47668885112_092021-O.webp",
    stock: 13,
  },
  {
    id: "4",
    name: "Aire Acondicionado",
    price: "923.99",
    img: "https://http2.mlstatic.com/D_NQ_NP_667004-MLA40913899475_022020-O.webp",
    stock: 13,
  },
];
const ItemListContainer = () => {
  return (
    <div className="container">
      {items.map((item) => (
        <Item key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ItemListContainer;
