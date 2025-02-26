import React from "react";
import { createContext, useState, useEffect, children } from "react";

export const CartContext = createContext();

const baseUrl = "https://playground.4geeks.com/contact/agendas";
const agendaName = "alejandrorcc7";
const apiUrl = `${baseUrl}/${agendaName}/contacts`;

export const Provider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  // agenda se crea
  const getContacts = () => {
    fetch(apiUrl)
      .then((response) => {
        if (response.status == 404) {
          console.log("creando una nueva...");
          return fetch(`${baseUrl}/${agendaName}`, { method: "POST" });
        } else response.ok;
        {
          console.log("EXCELLENT");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.contacts);
        setContacts(data.contacts);
        console.log(data);
      })

      .catch((error) => console.error("error fetching contactos", error));
  };

  useEffect(() => {
    getContacts();
  }, []);

  // Agregar contacto
  const addContact = async (newContact) => {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    })
      .then((response) => {
        if (response.ok) {
          const addContact = response.json();
          setContacts([...contacts, addContact]);
          getContacts();
          console.log(`Contacto agregado`);
        } else {
          console.error("Error al agregar al contacto", response.status);
        }
      })

      .then((data) => {
        console.log("Datos actualizados", data);
      })

      .catch((error) => console.error("Error", error));
  };

  // EDITAR CONTACT

  const updateContact = (id, updateContact) => {
    fetch(`${baseUrl}/${agendaName}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateContact),
    })
      .then((response) => {
        if (!response.ok) {
          console.error("actualizar contacto ERROR", response.status);
        }
        return response.json();
      })

      .then((data) => {
        setContacts((contacts) =>
          contacts.map((contact) => (contact.id === id ? data : contact))
        );
        console.log("Contact actualizado:", data);
        getContacts();
      })

      .catch((error) => console.error("Error", error));
  };

  // DELETE

  const deleteContact = (id) => {
    const nameContact = contacts.find((contact) => contact.id === id);

    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        setContacts((contacts) =>
          contacts.filter((contact) => contact.id !== id)
        );
        console.log(`${nameContact.name} eliminado`);
      } else {
        console.error(`ERROR DELETE contact`, response.status);
      }
    });
  };

  return (
    <CartContext.Provider
      value={{ contacts, addContact, updateContact, deleteContact }}
    >
      {children}
    </CartContext.Provider>
  );
};
