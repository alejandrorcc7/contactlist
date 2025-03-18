import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center">Contact List</h2>
        <div className="row">
          {contacts.map((contact, index) => (
            <div className="col-md-4 mb-3" key={contact.id || index}>
              <ContactCard contact={contact} />
            </div>
          ))}
        </div>
        <p className="text-center">{contacts.length} Contacts available</p>
      </div>
    </>
  );
};

export default ContactList;
