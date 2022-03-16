import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import CircularProgress from "@material-ui/core/CircularProgress";
import Sliders from "../sliders/Sliders";
import { useParams } from "react-router-dom";
import { db } from "../service/firebase-service";
import { collection, getDocs } from "firebase/firestore";
const ItemListContainer = () => {
  const [listProduct, setList] = useState([]);
  const [loading, setloading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    const coleccion = collection(db, "items ");
    getDocs(coleccion).then((snapshot) => {
      setList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
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
    <>
      <Sliders />
      <div className="container mt-5">
        <h1>{id ? "Lista Filtrada de Productos" : "Lista de Productos"}</h1>
        <ItemList listProduct={listProduct} id={id} />
      </div>

      <div></div>
    </>
  );
};

export default ItemListContainer;
