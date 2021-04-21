import React from "react";
import Filtro from "./forms/filtro";
import UsuariosForm from "./forms/usuarios";
import './styles.scss';

const Forms = () => {
  return (
    <div className="forms">
      <div className="row forms__container">
        <div className="col-md-9 col-sm-12 forms__container--usuarios">
          <UsuariosForm />
        </div>
        &nbsp;
        <div className="col-md-3 col-sm-12 forms__container--filtros">
          <Filtro />
        </div>
      </div>
    </div>
  );
};

export default Forms;
