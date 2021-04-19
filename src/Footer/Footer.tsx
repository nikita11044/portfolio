import React from 'react';
import styles from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faVk, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <Title titleText="Nikita Iskorostinskii"/>
                <ul className={styles.social}>
                    <li>
                        <FontAwesomeIcon icon={faInstagram} size="4x"/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLinkedinIn} size="4x"/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faVk} size="4x"/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGithub} size="4x"/>
                    </li>
                </ul>
                <p className={styles.copyright}>@2021 All rights reseved</p>
            </div>
        </footer>
    );
}

export default Footer;