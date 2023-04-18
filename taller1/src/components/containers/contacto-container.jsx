import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';

const ContactoContainer = () => {
  // Instanceamos un contacto con algunos datos por defecto
  const defaultContacto = new Contacto("Alejandro", "Rios", "alejandrorios2012@gmail.com", true);

  return (
    <div>
      <h1>Datos Contacto: </h1>
      <ContactoComponent contacto={defaultContacto} />
    </div>
  );
}

export default ContactoContainer;
