import React from 'react';
import styles from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import ContactsForm from "./ContactsForm/ContactsForm";

function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2>Contacts</h2>
                <ContactsForm />
                <button>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
