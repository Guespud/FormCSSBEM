import React from "react";
import Filtro from "./forms/filtro";
import UsuariosForm from "./forms/usuarios";
import './styles.scss';

const Forms = () => {
  return (
    <div className="forms">
      <div className="forms__container">
        <div className="col-md-8 forms__container--usuarios">
          <UsuariosForm />
        </div>
        <div className="col-md-4 forms__container--filtros">
          <Filtro />
        </div>
      </div>
    </div>
  );
};

export default Forms;
