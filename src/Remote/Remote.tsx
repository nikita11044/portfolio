import React from 'react';
import './../App.scss';
import styles from './Remote.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/Title";

function Remote() {
    return (
        <section className={styles.remoteBlock}>
            <div className={`${styleContainer.container} ${styles.remoteContainer}`}>
                <Title titleText="Ready to work remote"/>
                <button className={`${styles.button} custom-button`}>Hire me</button>
            </div>
        </section>
    );
}

export default Remote;