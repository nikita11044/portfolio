import React from 'react';
import './../App.scss';
import styles from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import ContactsForm from "./ContactsForm/ContactsForm";
import {Title} from "../common/components/Title";

function Contacts() {
    return (
        <section className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title titleText="Contacts"/>
                <ContactsForm />
                <button className={`${styles.sendButton} custom-button`}>Send</button>
            </div>
        </section>
    );
}

export default Contacts;
