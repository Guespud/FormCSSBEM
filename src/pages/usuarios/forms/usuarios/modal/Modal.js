import React, { useState } from "react";
import fire from "../../../../../constants/firebase";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Group, Button } from "react-bootstrap";
import "./styles.scss";

const ModalUser = ({ ModalClose }) => {
  let db = fire.firestore();
  db.settings({});
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    history.push("/home");
  };
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    event.persist();
    if (event.target.name === "") {
      return;
    }
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));

    console.log(inputs);
  };

  const handleSaveDb = () => {
    fire.database().ref("usuarios").push(inputs);
    window.location.replace("/home");
    handleClose();
  };

  return (
    <div className="filtro">
      <h2 className="filtro--titulo">
        <img src="https://img.icons8.com/dotty/20/000000/add-user-male.png" />
        &nbsp;Agregar nuevo usuario
      </h2>
      <div className="row filtro__container">
        <Form.Group className=" row filtro__container--group">
          <div className="col-md-6">
            <p className="filtro__container--group--text">Nombres</p>
            <Form.Control
              className="filtro__container--group--input"
              size="sm"
              name="name"
              type="text"
              placeholder="Ingrese Nombre"
              onChange={handleChange}
            />
            <br />
            <p className="filtro__container--group--text">
              Identificacion(C.C)
            </p>
            <Form.Control
              className="filtro__container--group--input"
              size="sm"
              name="identification"
              type="number"
              placeholder="Ingrese su identificacion"
              onChange={handleChange}
            />
            <br />
            <p className="filtro__container--group--text">Estado</p>
            <Form.Control
              className="filtro__container--group--input"
              size="sm"
              name="state"
              type="text"
              placeholder="Ingrese un estado"
              onChange={handleChange}
            />
            <br />
            <p className="filtro__container--group--text">Teléfono</p>
            <Form.Control
              className="filtro__container--group--input"
              size="sm"
              name="number"
              type="number"
              placeholder="Ingrese su numero de telefono."
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="col-md-6">
            <p className="filtro__container--group--text">Apellidos</p>
            <Form.Control
              className="filtro__container--group--input"
              size="sm"
              name="lastName"
              type="text"
              placeholder="Ingrese su Apellido"
              onChange={handleChange}
            />
            <br />
            <p className="filtro__container--group--text">Rol asociado</p>
            <Form.Control
              className="filtro__container--group--input"
              size="sm"
              name="role"
              type="text"
              placeholder="Ingrese un rol"
              onChange={handleChange}
            />
            <br />
            <p className="filtro__container--group--text">Contraseña</p>
            <Form.Control
              className="filtro__container--group--input"
              size="sm"
              name="password"
              type="password"
              placeholder="Ingrese su contraseña"
              onChange={handleChange}
            />
            <br />
            <p className="filtro__container--group--text">Correo electrónico</p>
            <Form.Control
              className="filtro__container--group--input"
              size="sm"
              name="email"
              type="mail"
              placeholder="ingrese su email"
              onChange={handleChange}
            />
            <br />
          </div>
        </Form.Group>
      </div>
      <div className="filtro__group">
        <div className="filtro__group--button">
          <Button
            className="outline-primary"
            variant="secondary"
            onClick={handleSaveDb}
          >
            Aceptar
          </Button>
        </div>
        <div className="filtro__group--button">
          <Button
            className="outline-primary"
            variant="outline-secondary"
            onClick={ModalClose}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalUser;
