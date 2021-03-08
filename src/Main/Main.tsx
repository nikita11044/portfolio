import React from 'react';
import styleContainer from './../common/styles/Container.module.css'
import styles from './Main.module.css'

function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.greetingsBlock}>
                    <span>Hi there</span>
                    <h1>I am Nikita Iskorostinskii</h1>
                    <p>A front-end developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
}

export default Main;