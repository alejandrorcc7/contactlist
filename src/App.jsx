import React from 'react'
import { ContactProvider } from './context/ContactContext'
import { Link, Route, Routes } from 'react-router-dom'
import ContactPage from './views/ContactPage'
import AddContactPage from './views/AddContactPage'
import EditContactPage from './views/EditContactPage'

function App() {
  return (
    <ContactProvider>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Contacts</Link>
            <Link className="btn btn-primary" to="/add-contact">Agregar Contacto</Link> 
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<ContactPage />} />
          <Route path='/add-contact' element={<AddContactPage />} />
          <Route path='/edit-contact/:id' element={<EditContactPage />} />
        </Routes>
    </ContactProvider>
  )
}

export default App