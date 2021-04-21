import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import Logo from "../../../assets/images/logo.png";

const FormLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  return (
    <div className="form">
      <img src={Logo} className="form__logo" />
      <form className="form__container">
        <h2 className="form__container--title">Inicio de Sesión</h2>
        <div className="form__container--input-container form-group">
          <input
            className="form__container--input-container--input"
            placeholder="Usuario"
            type="text"
            value={user}
            onChange={(e) => {
              console.log({ user });
              setUser(e.target.value);
            }}
          />
          <input
            className="form__container--input-container--input"
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(e) => {
              console.log({ password });
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            history.push("/home");
          }}
          className="btn form__container--button btn-primary"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
