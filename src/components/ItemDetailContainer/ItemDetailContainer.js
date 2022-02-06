import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItem } from "../service/promese";
import CircularProgress from "@material-ui/core/CircularProgress";

const ItemDetailContainer = () => {
  const [Product, setProduct] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getItemResult();
  }, []);

  const getItemResult = () => {
    getItem.then((result) => {
      setProduct(result);
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
    <div>
      <ItemDetail product={Product} />
    </div>
  );
};

export default ItemDetailContainer;
