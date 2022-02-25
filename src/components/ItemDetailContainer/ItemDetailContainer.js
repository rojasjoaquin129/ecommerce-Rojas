import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { itemsList } from "../service/promese";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from "react-router-dom";
import { db } from "../service/firebase-service";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [Product, setProduct] = useState({});
  const [loading, setloading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getItemResult();
  }, []);

  const getItemResult = () => {
    const itemcRef=doc(db,"items ",id);
    getDoc(itemcRef).then((snapshot)=>{
      setProduct({id:snapshot.id,...snapshot.data()});
      setloading(false);
    })
    // i
  };

  if (id) {
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
  } else {
    return (
      <div>
        <h1>No se encontro id</h1>
      </div>
    );
  }
};

export default ItemDetailContainer;
