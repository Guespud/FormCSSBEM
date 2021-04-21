import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormLogin from "./form";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Load from "./load";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const CambiarEstado = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push("/home");
    }, 2000);
  };

  return (
    <>
      {loading ? (
        <Load />
      ) : (
        <>
          {" "}
          <div className="login" id="login-escritorio">
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
                <FormLogin CambiarEstado={CambiarEstado} />
              </div>
            </section>
          </div>
          <div id="login-movil" className="movil">
            <h1>Aplicación OLSoftware</h1>
            <br></br>
            <p>
              Prueba práctica<br></br>Front-end senior
            </p>
            <div className="movil--login">
              <FormLogin CambiarEstado={CambiarEstado} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
