import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import "./App.css";

const App = () => {
  const [contact, setContact] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);

  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContact((prev) => [...prev, newContact]);
  };

  const deleteContact = (id) => {
    setContact((prev) => prev.filter((c) => c.id !== id));
  };

  const filteredContacts = contact.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div className="container">
        <h1>Phonebook</h1>
        <div className="form-container">
          <ContactForm onAdd={addContact} />
        </div>
        <div className="search-container">
          <SearchBox value={filter} onChange={setFilter} />
        </div>
        <div className="contact-list-container">
          <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        </div>
      </div>
    </div>
  );
};

export default App;
