import React from "react";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import LogoOl from '../../../assets/images/logo.png'

const Load = () => {
  return (
    <div className="load">
      <img src={LogoOl}></img>
      <h1>Estamos preparando todo para ti</h1>
      <div className="row load__container">
        <Spinner className="load__container--spinner" animation="grow" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        <Spinner className="load__container--spinner" animation="grow" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        <Spinner className="load__container--spinner" animation="grow" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default Load;
