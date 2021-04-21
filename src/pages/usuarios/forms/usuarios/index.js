import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import "./styles.scss";

const UsuariosForm = () => {
  const headTable = [
    "Nombres",
    "Apellidos",
    "Identificacion (C.C)",
    "Rol Asociado",
    "Estado",
    "Teléfono",
    "CorreoElectronico",
  ];

  const userTable = [
    "Alejandro",
    "Guespud",
    "111365478",
    "Admin",
    "Activo",
    "31695447",
    "admin@gmail.com",
  ];

  return (
    <div className="usuario">
      <div className="head">
        <div className="head--title">
          <h2><img src="https://img.icons8.com/dotty/20/000000/business-group.png"/>&nbsp;Usuarios Existentes</h2>
        </div>
        <div className="head--button">
          <button className="btn btn-secondary">Crear</button>
        </div>
      </div>
      <Table responsive>
        <thead>
          <tr>
            {Array.from(headTable).map((_, index) => (
              <th className="th__title" key={index}>
                {_}
              </th>
            ))}
            <th className="th__title">Accion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Array.from(userTable).map((_, index) => (
              <td className="td__title" key={_}>
                {_}
              </td>
            ))}
            <td className="td__title">
              &nbsp;
              <img src="https://img.icons8.com/small/15/000000/edit.png" />
              &nbsp;
              <img src="https://img.icons8.com/material/15/000000/delete-forever--v1.png" />
            </td>
          </tr>
          <tr>
            {Array.from(userTable).map((_, index) => (
              <td className="td__title" key={_}>
                {_}
              </td>
            ))}
            <td className="td__title">
              &nbsp;
              <img src="https://img.icons8.com/small/15/000000/edit.png" />
              &nbsp;
              <img src="https://img.icons8.com/material/15/000000/delete-forever--v1.png" />
            </td>
          </tr>
          <tr>
            {Array.from(userTable).map((_, index) => (
              <td className="td__title" key={_}>
                {_}
              </td>
            ))}
            <td className="td__title">
              &nbsp;
              <img src="https://img.icons8.com/small/15/000000/edit.png" />
              &nbsp;
              <img src="https://img.icons8.com/material/15/000000/delete-forever--v1.png" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UsuariosForm;
