import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Modal } from "react-bootstrap";
import "./styles.scss";
import ModalUser from "./modal/Modal";
import fire from "../../../../constants/firebase";

const UsuariosForm = () => {
  const [lgShow, setLgShow] = useState(false);

  const [userList, setUserList] = useState([]);

  const ModalClose = () => {
    setLgShow(false);
  };

  useEffect(() => {
    var ref = fire.database().ref("/usuarios");
    var dataArray = [];
    ref.once("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var key = childSnapshot.key;
        var data = childSnapshot.val();

        dataArray.push({
          key: key,
          name: data.name,
          lastName: data.lastName,
          identification: data.identification,
          password: data.password,
          role: data.role,
          state: data.state,
          email: data.email,
          number: data.number,
        });
      });
      setUserList(dataArray);
    });
  }, []);

  return (
    <div className="usuario">
      <div className="head">
        <div className="head--title">
          <h2>
            <img src="https://img.icons8.com/dotty/20/000000/business-group.png" />
            &nbsp;Usuarios Existentes
          </h2>
        </div>
        <div className="head--button">
          <button onClick={() => setLgShow(true)} className="btn btn-secondary">
            Crear
          </button>
        </div>
      </div>
      <Table responsive>
        <thead>
          <th className="th__title">Nombres</th>
          <th className="th__title">Apellidos</th>
          <th className="th__title">Identificación</th>
          <th className="th__title">Rol</th>
          <th className="th__title">Estado</th>
          <th className="th__title">Télefono</th>
          <th className="th__title">Email</th>
          <th className="th__title">Acción</th>
        </thead>
        <tbody>
          {userList.map((data) => {
            return (
              <tr className="tr-body-table">
                <td className="txt-cuerpo-table">{data.name}</td>
                <td className="txt-cuerpo-table">{data.lastName}</td>
                <td className="txt-cuerpo-table">{data.identification}</td>
                <td className="txt-cuerpo-table">{data.role}</td>
                <td className="txt-cuerpo-table">{data.state}</td>
                <td className="txt-cuerpo-table">{data.number}</td>
                <td className="txt-cuerpo-table">{data.email}</td>
                <td className="txt-accion-table">
                  &nbsp;
                  <img src="https://img.icons8.com/small/15/000000/edit.png" />
                  &nbsp;
                  <img src="https://img.icons8.com/material/15/000000/delete-forever--v1.png" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <ModalUser ModalClose={ModalClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UsuariosForm;
