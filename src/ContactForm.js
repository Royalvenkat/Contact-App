import React, { useState, useEffect } from "react";

function ContactForm({ addContact, updateContact, editingContact }) {
  const [contact, setContact] = useState({
    name: "",
    type: "Personal",
    gender: "Male",
  });

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingContact) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    setContact({ name: "", type: "Personal", gender: "Male" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingContact ? "Edit Contact" : "Add Contact"}</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Type: </label>
        <select name="type" value={contact.type} onChange={handleChange}>
          <option value="Personal">Personal</option>
          <option value="Business">Business</option>
        </select>
      </div>
      <div>
        <label>Gender: </label>
        <select name="gender" value={contact.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button type="submit">
        {editingContact ? "Update Contact" : "Add Contact"}
      </button>
    </form>
  );
}

export default ContactForm;
