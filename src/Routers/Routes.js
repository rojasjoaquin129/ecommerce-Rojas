import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
