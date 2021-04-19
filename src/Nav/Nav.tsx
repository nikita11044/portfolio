import React from 'react';
import styles from './Nav.module.scss'

function Nav() {
    return (
        <nav className={styles.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </nav>
    );
}

export default Nav;