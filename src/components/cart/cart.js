import React, { useContext } from "react";
import { CartConstext } from "../../context/CartContex";

const Cart = () => {
  const { items, removeItem } = useContext(CartConstext);

  const deleteItem = (id) => {
    removeItem(String(id), items);
  };
  console.log(items);
  return (
    <div className="container mt-5">
      {items.map((item) => (
        <div>
          <h2>{item.item.name}</h2>
          <h2>Cantidad elegidos:{item.quenty}</h2>
          <button onClick={() => deleteItem(item.item.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
