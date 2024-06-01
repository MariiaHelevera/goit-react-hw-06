import './App.css'
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import initialContacts from '/src/contacts.json';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';


const LS_KEY = 'saved-contacts';

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem(LS_KEY);
    if (!stringifiedContacts) return initialContacts;

    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  });

  const [filter, setFilter] = useState("");

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };

    setContacts((prevState) => [...prevState, finalContact]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={filter} onChange={onChangeFilter}/>
      <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact} />
    </div>
  )
}

export default App
