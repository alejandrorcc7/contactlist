import React from "react";
import { Provider } from "./context/CartContext";
import { Link, Route, Routes } from "react-router-dom";
import ContactPage from "./pages/AddContactPage";
import AddContactPage from "./pages/AddContactPage";
import EditContactPage from "./pages/EditPage";

function App() {
  return (
    <Provider>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Contacts
          </Link>
          <Link className="btn btn-primary" to="/add-contact">
            Agregar Contacto
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/add-contact" element={<AddContactPage />} />
        <Route path="/edit-contact/:id" element={<EditContactPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
