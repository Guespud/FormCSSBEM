import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Group } from "react-bootstrap";
import "./styles.scss";

const Filtro = () => {
  return (
    <div className="filtro">
      <h2>Filtrar búsqueda</h2>
      <div className="filtro__container">
        <Form.Group>
          <Form.Control type="text" placeholder="Normal text" />
          <br />
          <Form.Control type="text" placeholder="Normal text" />
          <br />
          <Form.Control type="text" placeholder="Normal text" />
          <br />
          <Form.Control type="text" placeholder="Normal text" />
          <br />
          <Form.Control type="text" placeholder="Normal text" />
          <br />
          <Form.Control type="text" placeholder="Normal text" />
          <br />
          <Form.Control type="text" placeholder="Normal text" />
          <br />
          <Form.Control type="text" placeholder="Normal text" />
          <br />
        </Form.Group>
      </div>
      <div className="filtro__group">
        <div className="filtro__group--button">
        <button className="btn btn-primary">Filtrar</button>
        </div>
        <div className="filtro__group--button">
          <button className="btn btn-primary">Limpiar</button>
        </div>
      </div>
    </div>
  );
};

export default Filtro;
