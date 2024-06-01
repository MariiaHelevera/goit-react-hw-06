import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={css.contactList}>
            {contacts.map(contact => (
                <Contact contact={contact} onDeleteContact={onDeleteContact} key={contact.id}/>
            ))}
        </ul>
    );
};

export default ContactList;