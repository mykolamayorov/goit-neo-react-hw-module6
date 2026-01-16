import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <p className={styles.name}>👤 {name}</p>
        <p className={styles.number}>📞 {number}</p>
      </div>
      <button className={styles.deleteBtn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
