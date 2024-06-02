import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilters } from "../../redux/filtersSlice";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilters);


    const filteredContacts = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <ul className={css.contactList}>
            {filteredContacts.map(contact => (
                <Contact contact={contact} key={contact.id} />
            ))}
        </ul>
    );
};

export default ContactList;