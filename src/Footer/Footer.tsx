import React from 'react';
import styles from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2>Nikita</h2>
                <ul className={styles.social}>
                    <li>
                        <div className={styles.imgWrapper}></div>
                    </li>
                    <li>
                        <div className={styles.imgWrapper}></div>
                    </li>
                    <li>
                        <div className={styles.imgWrapper}></div>
                    </li>
                    <li>
                        <div className={styles.imgWrapper}></div>
                    </li>
                </ul>
                <p className={styles.copyright}>@2021 All rights reseved</p>
            </div>
        </footer>
    );
}

export default Footer;