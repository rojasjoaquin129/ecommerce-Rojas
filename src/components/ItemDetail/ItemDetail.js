import React, { useState, useEffect, useContext } from "react";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ItemCount from "../ItemCount/ItemCount";
import { CartConstext } from "../../context/CartContex";
const ItemDetail = ({ product }) => {
  const [quenty, setQuenty] = useState(null);

  const { addItem } = useContext(CartConstext);

  useEffect(() => {
    if (quenty) {
      handleAddToCart();
      setQuenty(0);
    }
  }, [quenty]);

  const handleAddToCart = () => {
    addItem({ item: product, quenty });
  };
  return (
    <>
      <div className="container products-wrapper">
        <div className="product-detail">
          <div className="row">
            <div className="col-12 col-lg-8">
              <img
                src={product.img}
                alt="product image"
                className="justify-content-center  product-detail-img mt-4"
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
                <ItemCount
                  id={product.id}
                  stock={product.stock}
                  quenty={setQuenty}
                />
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
