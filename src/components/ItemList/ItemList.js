import React from "react";
import Item from "../Item/Item";
const ItemList = ({ listProduct }) => {
  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12">
          <h2 className="products-title">Todos los productos</h2>
        </div>
        {listProduct.map((item) => (
          <Item key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
