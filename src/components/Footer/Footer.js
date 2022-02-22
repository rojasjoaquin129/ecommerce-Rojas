import React from "react";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import SecurityIcon from "@mui/icons-material/Security";
const Footer = () => {
  return (
    <div className="mt-5">
      <footer className="main-footer ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <article className="footer-data">
                <i>
                  <CreditScoreIcon fontSize="large" />
                </i>
                <h4>Pagá con tarjeta o en efectivo</h4>
                <p>
                  Con MercadoApp, tenés cuotas sin interés con tarjeta o
                  efectivo en puntos de pago. ¡Y siempre es seguro!
                </p>
              </article>
            </div>
            <div className="col-12 col-lg-4">
              <article className="footer-data">
                <i className="fas fa-gift">
                  <CardGiftcardIcon fontSize="large" />
                </i>
                <h4>Envío gratis desde $ 1.999</h4>
                <p>
                  Solo por estar registrado en MercadoApp tenés envíos gratis en
                  miles de productos. Es un beneficio de Mercado Puntos.
                </p>
              </article>
            </div>
            <div className="col-12 col-lg-4">
              <article className="footer-data">
                <i className="fas fa-user-shield">
                  <SecurityIcon fontSize="large" />
                </i>
                <h4>Seguridad, de principio a fin</h4>
                <p>
                  ¿No te gusta? ¡Devolvelo! En MercadoApp no hay nada que no
                  puedas hacer, porque estás siempre protegido.
                </p>
              </article>
            </div>
          </div>
        </div>
      </footer>
      <div className="sub-footer">
        <div clclassNameass="container">
          <p>Copyright ©2022 JoaquinRojas</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
