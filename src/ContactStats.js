import React from "react";

function ContactStats({ contacts }) {
  const personalContacts = contacts.filter(
    (contact) => contact.type === "Personal"
  ).length;
  const businessContacts = contacts.filter(
    (contact) => contact.type === "Business"
  ).length;
  const maleContacts = contacts.filter(
    (contact) => contact.gender === "Male"
  ).length;
  const femaleContacts = contacts.filter(
    (contact) => contact.gender === "Female"
  ).length;

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Contacts: {contacts.length}</p>
      <p>Personal Contacts: {personalContacts}</p>
      <p>Business Contacts: {businessContacts}</p>
      <p>Male Contacts: {maleContacts}</p>
      <p>Female Contacts: {femaleContacts}</p>
    </div>
  );
}

export default ContactStats;
