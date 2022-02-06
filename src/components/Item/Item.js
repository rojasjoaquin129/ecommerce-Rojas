import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ItemCount from "../ItemCount/ItemCount";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Item({ product }) {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <section className="product-box">
        <a href="">
          <figure className="product-box_image">
            <img
              src={product.img}
              className="img-card"
              alt="imagen de producto"
            />
          </figure>
          <article className="product-box_data">
            <h2>${Math.round(product.price * 100) / 100} </h2>
            <p> {product.name} </p>
            <i>
              <LocalShippingIcon />
            </i>
          </article>
        </a>
      </section>
    </div>
  );
}
