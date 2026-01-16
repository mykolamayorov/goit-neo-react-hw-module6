import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((item) => (
        <li key={item.id}>
          <Contact
            name={item.name}
            number={item.number}
            onDelete={() => onDelete(item.id)} // Pass ID to App
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
