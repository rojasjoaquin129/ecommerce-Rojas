import React from "react";
import Item from "../Item/Item";
const ItemList = ({ listProduct, id }) => {
  let filterProduct;
  if (id) {
    filterProduct = listProduct.filter(({ category }) => category === id);
  }

  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12">
          <h2 className="products-title">
            {id === "phones" ? "Filtrado de Productos por telefono" : null}
            {id === "electro"
              ? "Filtrado de Productos por Electrodomesticos"
              : null}
            {id === "tennis" ? "Filtrado de Productos por zapatillas" : null}
          </h2>
        </div>
        {!id &&
          listProduct.map((item) => <Item key={item.id} product={item} />)}
        {id &&
          filterProduct.map((item) => <Item key={item.id} product={item} />)}
      </div>
    </div>
  );
};

export default ItemList;
