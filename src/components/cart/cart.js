import React, { useContext, useState } from "react";
import { CartConstext } from "../../context/CartContex";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./cart.css";

const Cart = () => {
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  const [open, setOpen] = useState(false);

  const { items, removeItem, clear } = useContext(CartConstext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseUno = () => {
    let nombre = document.getElementById("nombre").value;
    let tel = document.getElementById("pass").value;
    let email = document.getElementById("ee").value;
    let total = 0;
    items.forEach((element) => {
      let esto = element.item.price * element.quenty;
      total = total + esto;
    });
    const buyer = {
      name: nombre,
      phone: tel,
      email: email,
    };
    const order = {
      buyer,
      items: items,
      total,
    };
    addDoc(ordersCollection, order).then(({ id }) => {
      console.log("este es tu comprobante", id);
      clear();
      setOpen(false);
    });
  };

  const deleteItem = (id) => {
    removeItem(String(id), items);
  };

  if (items.length === 0) {
    return (
      <div className="container mt-5">
        <div className="m-2">
          <h1>Usted no tiene nada en Su Carrito </h1>
          <NavLink to="/" className="text">
            <Button variant="contained" endIcon={<SendIcon />}>
              Ir a comprar
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <div className="container mt-5">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Imagen</TableCell>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Precio</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="center">Subtotal</TableCell>
              <TableCell align="center">Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <img src={row.item.img} alt="" className="img" />
                </TableCell>
                <TableCell align="center">{row.item.name}</TableCell>
                <TableCell align="center">{row.item.price}</TableCell>
                <TableCell align="center">{row.quenty}</TableCell>
                <TableCell align="center">
                  {(row.quenty, row.item.price)}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="error"
                    size="large"
                    onClick={() => deleteItem(row.item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={4} />
              <TableCell colSpan={3} align="right">
                <b>Total :</b>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className="d-flex justify-content-around mt-3">
        <NavLink to="/" className="text">
          <Button variant="contained"> Segir comprando </Button>
        </NavLink>
        <Button variant="contained" color="success" onClick={handleClickOpen}>
          Terminar Mi compra
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para usted comprar tiene q registrarse .
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="nombre"
            label="nombre requerido"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="ee"
            label="Email requerido"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="pass"
            label="telefono requerido"
            type="nume"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCloseUno}>esto es lo q me llevo </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cart;
