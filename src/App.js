import React, { useState } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import ContactStats from "./ContactStats";
import "./App.css";

const initialContacts = [
  { id: 1, name: "John Doe", type: "Business", gender: "Male" },
  { id: 2, name: "Jane Smith", type: "Personal", gender: "Female" },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditingContact(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContact = (contact) => {
    setEditingContact(contact);
  };

  return (
    <div className="App">
      <h1>Contact List</h1>
      <ContactForm
        addContact={addContact}
        updateContact={updateContact}
        editingContact={editingContact}
      />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        editContact={editContact}
      />
      <ContactStats contacts={contacts} />
    </div>
  );
}

export default App;
