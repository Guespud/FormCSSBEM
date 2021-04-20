import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import './styles.scss'

const UsuariosForm = () => {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UsuariosForm;
