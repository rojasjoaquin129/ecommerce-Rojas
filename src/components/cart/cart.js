import React, { useContext } from "react";
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
import "./cart.css";

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}
function priceRow(qty, unit) {
  return qty * unit;
}

const Cart = () => {
  const { items, removeItem } = useContext(CartConstext);

  const deleteItem = (id) => {
    removeItem(String(id), items);
  };
  console.log(items);

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
                  <img src={row.item.img} className="img" />
                </TableCell>
                <TableCell align="center">{row.item.name}</TableCell>
                <TableCell align="center">
                  {ccyFormat(row.item.price)}
                </TableCell>
                <TableCell align="center">{row.quenty}</TableCell>
                <TableCell align="center">
                  {ccyFormat(priceRow(row.quenty, row.item.price))} {}
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
        <Button variant="contained" color="success">
          Terminar Mi compra
        </Button>
      </div>
    </div>
  );
};

export default Cart;
