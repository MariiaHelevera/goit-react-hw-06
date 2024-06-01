// import Contact from "../Contact/Contact";
// import css from "../ContactList/ContactList.module.css";
// import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/contactsSlice';
// import { selectFilters } from "../../redux/filtersSlice";

// const ContactList = () => {
//     const contacts = useSelector(selectContacts);
//     const filter = useSelector(selectFilters);
//     console.log(contacts);

//     const filteredContacts = contacts.filter(
//         contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
//     );

//     return (
//         <ul className={css.contactList}>
//             {filteredContacts.map(contact => (
//                 <Contact contact={contact} key={contact.id}/>
//             ))}
//         </ul>
//     );
// };

// export default ContactList;

import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilters } from "../../redux/filtersSlice";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilters);

    console.log('Contacts:', contacts);  // Debugging

    const filteredContacts = contacts.filter(contact => {
        if (!contact || !contact.name || typeof contact.name !== 'string') {
            console.warn('Invalid contact found:', contact);
            return false;
        }
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