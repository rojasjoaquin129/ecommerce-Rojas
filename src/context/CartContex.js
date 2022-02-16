import { createContext, useState } from "react";

export const CartConstext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (currentItem) => {
    if (items.some(({ item }) => item.id === currentItem.item.id)) return;
    setItems([...items, currentItem]);
  };

  const removeItem = (itemId) => {
    console.log(itemId);
    const itemsDelete = items.filter((item) => item.item.id !== itemId);
    setItems(itemsDelete);
  };

  const clear = () => {
    setItems([]);
  };
  const isInCart = (id) => {
    console.log(items.filter((item) => item.item.id === id));
    if (items.filter((item) => item.item.id === id)) {
      return true;
    }
    return false;
  };
  return (
    <CartConstext.Provider value={{ items, addItem, removeItem, isInCart }}>
      {children}
    </CartConstext.Provider>
  );
};
