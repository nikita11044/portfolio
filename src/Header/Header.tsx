import React from 'react';
import styles from './Header.module.css'
import Nav from "../Nav/Nav";

function Header() {
    return (
        <header className={styles.header}>
            <Nav />
        </header>
    );
}

export default Header;