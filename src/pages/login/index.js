import React from "react";
import FormLogin from "./form";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <>
      <div className="login">
        <section className="login__section">
          <div className="col" id="contenedorTitulo">
            <div className="col-md-12">
              <h1 className="login__section--title">
                Aplicación
                <br />
                OLSoftware
              </h1>
            </div>
            <div className="col-md-12">
              <p className="login__section--subtitle">
                Prueba práctica Front-end senior
              </p>
            </div>
          </div>

          <div className="login__section--login">
            <FormLogin />
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
