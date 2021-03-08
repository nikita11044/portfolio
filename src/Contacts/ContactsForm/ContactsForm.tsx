import React from 'react';
import styles from './ContactsForm.module.css'

function ContactsForm() {
    return (
        <form className={styles.formContainer}>
            <input type="text"/>
            <input type="text"/>
            <textarea name="" id=""></textarea>
        </form>
    );
}

export default ContactsForm;
