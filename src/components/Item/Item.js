import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../cart/cart.css";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <section className="product-box">
        <a>
          <Link to={"/item/" + product.id} className="text">
            <figure className="product-box_image">
              <img
                src={product.img}
                className="img-card"
                alt="imagen de producto"
              />
            </figure>
            <article className="product-box_data">
              <h2>$ {Math.round(product.price * 100) / 100} </h2>
              <br />
              <span>
                Envío gratis
                <svg
                  className="ui-item__full-icon ml-2 grenOferta"
                  width="41"
                  height="13"
                  viewBox="0 0 41 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="nonzero"
                    d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z"
                  ></path>
                </svg>
              </span>

              <p> {product.name} </p>
              <i>
                <LocalShippingIcon />
              </i>
            </article>
          </Link>
        </a>
      </section>
    </div>
  );
}
