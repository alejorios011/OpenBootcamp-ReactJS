import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";

const ContactoComponent = ({ contacto }) => {
  return (
    <div>
      <p>
        <b> Nombre Completo: </b> {contacto.nombre + " " + contacto.apellido}<br />
        <b> Correo electronico: </b> {contacto.email} <br />
        <b> Estado: </b>{contacto.conectado ? "Contacto En Línea" : "Contacto No Disponible"}
      </p>
    </div>
  );
};

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ContactoComponent;
