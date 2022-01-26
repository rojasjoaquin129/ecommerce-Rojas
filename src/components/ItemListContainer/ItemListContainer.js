import React from "react";
import Item from "../Item/Item";

const items = [
  { id: "1", name: "iponeX", price: "99.99" },
  { id: "2", name: "iponeXS", price: "9945.99" },
  { id: "3", name: "Galaxy Note", price: "923.99" },
  { id: "4", name: "Redmi Note 8", price: "923.99" },
];
const ItemListContainer = () => {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemListContainer;
