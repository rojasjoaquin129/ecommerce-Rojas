import React from "react";
import Item from "../Item/Item";
const ItemList = ({ listProduct }) => {
  return (
    <div>
      {listProduct.map((item) => (
        <Item key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ItemList;
