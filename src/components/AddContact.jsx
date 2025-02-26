import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const navigate = useNavigate();
  const { addContact } = useContext(CartContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email && contact.phone && contact.address) {
      addContact(contact);
      navigate("/");
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center">Agregar Contacto</h2>
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
            Agregar
          </button>
        </form>
      </div>
    </>
  );
};

export default AddContact;
