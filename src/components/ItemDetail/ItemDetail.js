import React from "react";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ product }) => {
  return (
    <>
      <div className="container products-wrapper">
        <div className="product-detail">
          <div className="row">
            <div className="col-12 col-lg-8">
              <img
                src={product.img}
                alt="product image"
                className=" justify-content-center  product-detail-img mt-4"
              />
              <p className="product-detail-description">
                {product.description}
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <article className="product-detail-info">
                <h2 className="product-detail-title">{product.name} </h2>

                <p className="product-detail-price">
                  $ {Math.round(product.price * 100) / 100}
                </p>

                <ul className="actions-list">
                  <li>
                    <i>
                      <CreditCardIcon />
                    </i>
                    <p>Pagá en 12 cuotas sin interes</p>
                  </li>
                  <li>
                    <i>
                      <StorefrontIcon />
                    </i>
                    <p>Retiro gratis en locales del vendedor</p>
                  </li>
                </ul>
                <hr />
                <ItemCount stock={product.stock} />
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
