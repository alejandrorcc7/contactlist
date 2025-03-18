import React, { use, useContext, useEffect, useState } from "react";
import { ContactContext } from "../context/ContactContext";
import { useNavigate, useParams } from "react-router-dom";

const ContactEdit = () => {
  const navigate = useNavigate();
  const { updateContact, contacts } = useContext(ContactContext);
  const { id } = useParams();

  const [contact, setContact] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(
    () => {
      const foundContact = contacts.find((contact) => contact.id == id);
      if (foundContact) {
        setContact(foundContact);
      }
    },
    [id],
    [contacts]
  );

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email && contact.phone && contact.address) {
      updateContact(id, contact);
      navigate("/");
    } else {
      console.error("Error al actualizar el contacto", error);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center">Actualizar Datos Contacto</h2>
        <form onSubmit={handleSumbit} className="border p-3 rounded shadow-sm">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              value={contact.address}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="sumbit" className="btn btn-primary w-100">
            Actualizar
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactEdit;
