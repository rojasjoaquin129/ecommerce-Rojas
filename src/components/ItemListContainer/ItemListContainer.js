import React, { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import CircularProgress from "@material-ui/core/CircularProgress";
import { itemsList } from "../service/promese";

const ItemListContainer = () => {
  const [listProduct, setList] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getItemResult();
  }, []);

  const getItemResult = () => {
    itemsList.then((result) => {
      setList(result);
      setloading(false);
    });
  };
  if (loading) {
    return (
      <div className="row justify-content-center">
        <div className="col-sm-4 col-md-3">
          <h1>Loading.... please wait!!</h1>
          <br />
          <CircularProgress />
        </div>
      </div>
    );
  }
  return (
    <div className="container mt-5">
      <h1>Lista de Productos</h1>
      <ItemList listProduct={listProduct} />
    </div>
  );
};

export default ItemListContainer;
