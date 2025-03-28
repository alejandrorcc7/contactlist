import React from "react";
import { createContext, useState, useEffect, children } from "react";

export const ContactContext = createContext();

const baseUrl = 'https://playground.4geeks.com/contact/agendas'
const agendaName = 'franciscoYuster'
const apiUrl = `${baseUrl}/${agendaName}/contacts`


export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([])




    // Si no existe la agenda se crea
    const getContacts = () => {
        fetch(apiUrl)
        .then(response => {
            if (response.status == 404) {
                console.log("Agena no enctrada, creando una nueva...");
                return fetch(`${baseUrl}/${agendaName}`, { method: "POST"});
            } else (response.ok); {
                console.log('✅✅✅')
            }
            return response.json()
        })
        .then(data => {
            if(data && data.contacts);
            setContacts(data.contacts)
            console.log(data)
        })

        .catch(error => console.error('error fetching contactos', error))   
    }


    useEffect(() => {
        getContacts();
    }, []);

    // Agregar contacto
    const addContact = async (newContact) => {
        const response = await
            fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(newContact),
            })
            .then(response => {
                if (response.ok) {
                    const addContact = response.json();
                    setContacts([...contacts, addContact]);
                    getContacts();
                    console.log(`Contacto agregado`)
                } else {
                    console.error('Error al agregar al contacto', response.status);
                }
            })    

            .then(data => {
                console.log("Datos actualizados",data)
            }) 

            .catch(error => console.error('Error', error))
                        
    };

    // Actualizar contacto

    const updateContact = (id, updateContact) => {


        fetch(`${baseUrl}/${agendaName}/contacts/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateContact),
        })

        .then(response => {
            if (!response.ok) {
                console.error("Error al actualizar contacto", response.status);
            }
            return response.json()
        })

        .then(data => {
            setContacts(contacts =>
                contacts.map(contact => ( contact.id === id ? data : contact))
            )
                console.log('Contacto actualizado:', data)
                getContacts();
        })

        .catch(error => console.error('Error', error))
    };

    // Eliminar contacto

    
    const deleteContact =  (id) => {

        const nameContact = contacts.find(contact => contact.id === id);

        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        })
        .then(response => {   
        if (response.ok) {
            setContacts(contacts => contacts.filter(contact => contact.id !== id));
                console.log(`${nameContact.name} ha sido eliminado`)
        } else {
            console.error(`Error al eliminat al contacto`, response.status);
        }
        })

    }

    return (
        <ContactContext.Provider value={{contacts, addContact, updateContact, deleteContact}}>
            {children}
        </ContactContext.Provider>
    )
};