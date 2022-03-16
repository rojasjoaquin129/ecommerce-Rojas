import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MuiAlert from "@mui/material/Alert";
import { AddShoppingCart } from "@material-ui/icons";

import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartConstext } from "../../context/CartContex";

const ItemCount = ({ id, stock, quenty }) => {
  const { isInCart } = useContext(CartConstext);
  const [counter, setCounter] = useState(0);

  const cantidad = () => quenty(counter);
  const minusCounter = () => {
    if (stock) {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        handleClick("No se puede elejir menos de 0 ");
      }
    } else {
      handleClick("No se encontro stock");
    }
  };
  const plusCounter = () => {
    if (stock) {
      if (counter < stock) {
        setCounter(counter + 1);
      } else {
        handleClick("No se puede superar el stock");
      }
    } else {
      handleClick("No se encontro stock");
    }
  };

  const addCart = () => {
    if (counter === 0) {
      handleClick("Ustede no puede elegir 0");
    } else if (isInCart(id)) {
      handleClick("Usted ya tiene este producto en su carrito");
      setCounter(0);
    } else {
      handleClick("producto agregado con exito al carrito", true);
      cantidad();
    }
  };

  const handleClick = (message, error) => {
    if (!error) {
      toast.error(message, {
        theme: "colored",
        autoClose: 2500,
        position: "bottom-right",
        hideProgressBar: true,
      });
    } else {
      toast.success(message, {
        autoClose: 2500,
        theme: "colored",
        position: "bottom-right",
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="row justify-content-center">
      <div>
        <IconButton
          color="primary"
          onClick={minusCounter}
          aria-label="add to shopping cart"
        >
          <RemoveIcon />
        </IconButton>

        <span> {counter} </span>
        <IconButton
          color="primary"
          onClick={plusCounter}
          aria-label="add to shopping cart"
        >
          <AddIcon />
        </IconButton>
      </div>
      <div>
        <Button
          onClick={addCart}
          variant="outlined"
          endIcon={<AddShoppingCart />}
        >
          Agregar al carrito
        </Button>
      </div>
      <ToastContainer
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};

export default ItemCount;
