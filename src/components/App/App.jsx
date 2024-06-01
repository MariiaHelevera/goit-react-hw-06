import './App.css'
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';


function App() {
  const contacts = useSelector(selectContacts);
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your phonebook is currently empty.</p>
      )}
    </div>
  )
}

export default App
