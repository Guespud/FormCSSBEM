import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Group,Button } from "react-bootstrap";
import "./styles.scss";

const Filtro = () => {
  return (
    <div className="filtro">
      <h2 className="filtro--titulo"><img src="https://img.icons8.com/dotty/20/000000/add-user-male.png"/>&nbsp;Filtrar búsqueda</h2>
      <div className="filtro__container">
        <Form.Group className="filtro__container--group">
          <p className="filtro__container--group--text">Nombres</p>
          <Form.Control className="filtro__container--group--input" size="sm" type="text" />
          <br />
          <p className="filtro__container--group--text">Apellidos</p>
          <Form.Control className="filtro__container--group--input" size="sm" type="text" />
          <br />
          <p className="filtro__container--group--text">Identificacion(C.C)</p>
          <Form.Control className="filtro__container--group--input" size="sm" type="text" />
          <br />
          <p className="filtro__container--group--text">Rol asociado</p>
          <Form.Control className="filtro__container--group--input" size="sm" type="text" />
          <br />
          <p className="filtro__container--group--text">Estado</p>
          <Form.Control className="filtro__container--group--input" size="sm" type="text" />
          <br />
          <p className="filtro__container--group--text">Contraseña</p>
          <Form.Control className="filtro__container--group--input" size="sm" type="text" />
          <br />
          <p className="filtro__container--group--text">Teléfono</p>
          <Form.Control className="filtro__container--group--input" size="sm" type="text" />
          <br />
          <p className="filtro__container--group--text">Correo electrónico</p>
          <Form.Control className="filtro__container--group--input" size="sm" type="text" />
          <br />
        </Form.Group>
      </div>
      <div className="filtro__group">
        <div className="filtro__group--button">
        <Button className="outline-primary" variant="secondary">Filtrar </Button>
        </div>
        <div className="filtro__group--button">
          <Button className="outline-primary" variant="outline-secondary">Limpiar</Button>
        </div>
      </div>
    </div>
  );
};

export default Filtro;
