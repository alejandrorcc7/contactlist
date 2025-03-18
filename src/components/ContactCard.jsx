import React, { useContext, useState } from "react";
import {  ContactContext } from "../context/ContactContext";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const ContactCard = ({ contact }) => {
  const { deleteContact } = useContext(ContactContext);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deleteContact(contact.id);
    setShowModal(false);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">
          <strong>Email:</strong> {contact.email}
        </p>
        <p className="card-text">
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p className="card-text">
          <strong>Address:</strong> {contact.address}
        </p>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => setShowModal(true)}
        >
          Delete🗑
        </button>

        <Link
          to={`/edit-contact/${contact.id}`}
          className="btn btn-primary btn-sm m-1"
        >
          Edit✒
        </Link>
      </div>

      {showModal && (
        <Modal
          tittle="Confirm Delete"
          message={`Are you sure you want to delete ${contact.name}?`}
          onConfirm={handleDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ContactCard;
