import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MuiAlert from "@mui/material/Alert";
import { AddShoppingCart } from "@material-ui/icons";
import Snackbar from "@mui/material/Snackbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartConstext } from "../../context/CartContex";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ItemCount = ({ id, stock, quenty }) => {
  const [messageError, setMessageError] = useState("No se encontro stock");
  const { isInCart } = useContext(CartConstext);

  const [counter, setCounter] = useState(0);
  const [open, setOpen] = React.useState(false);

  const cantidad = () => quenty(counter);
  const minusCounter = () => {
    if (stock) {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        setMessageError("No se puede elejir menos de 0 ");
        handleClick();
      }
    } else {
      setMessageError("No se encontro stock");
      handleClick();
    }
  };
  const plusCounter = () => {
    if (stock) {
      if (counter < stock) {
        setCounter(counter + 1);
      } else {
        setMessageError("No se puede superar el stock");
        handleClick();
      }
    } else {
      setMessageError("No se encontro stock");
      handleClick();
    }
  };

  const addCart = (event) => {
    if (counter === 0) {
      setMessageError("Ustede no puede elegir 0");
      handleClick();
    } else {
      setCounter(0);

      cantidad();
    }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "20%" }}>
          {messageError}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ItemCount;
