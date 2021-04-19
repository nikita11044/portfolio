import React from 'react';
import styles from './ContactsForm.module.scss'

function ContactsForm() {
    return (
        <form className={styles.formContainer}>
            <input type="text"/>
            <input type="text"/>
            <textarea></textarea>
        </form>
    );
}

export default ContactsForm;
