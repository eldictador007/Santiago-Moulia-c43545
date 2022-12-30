import React from "react";

const UserForm = () => {
  return (
    <div>
      <label for="basic-url" className="form-label">
        Datos personales
      </label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>
        <input
          type="text"
          className="form-control"
          placeholder="Apellido"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>
      </div>

      <div className="input-group mb-3">
        <input
          type="mail"
          className="form-control"
          placeholder="tumail@ejemplo.com"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        ></input>
      </div>
      <div className="input-group">
        <span className="input-group-text" id="basic-addon3">
          Telefono
        </span>
        <input
          type="phone"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        ></input>
      </div>
      <div class="col-auto"></div>
      <div className="form-text">
        Completa todos los campos para finalizar tu compra.
      </div>
      <button type="submit" className="btn btn-success m-3">
        Confirmar
      </button>
    </div>
  );
};

export default UserForm;
