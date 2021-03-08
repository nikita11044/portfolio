import React from 'react';
import styles from './Remote.module.css'
import styleContainer from "../common/styles/Container.module.css";

function Remote() {
    return (
        <div className={styles.remoteBlock}>
            <div className={`${styleContainer.container} ${styles.remoteContainer}`}>
                <h2 className={styles.title}>Ready to work remote</h2>
                <button className={styles.button}>Hire me</button>
            </div>
        </div>
    );
}

export default Remote;