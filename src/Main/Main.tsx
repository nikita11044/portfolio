import React from 'react';
import styleContainer from './../common/styles/Container.module.scss'
import styles from './Main.module.scss'
import myPhoto from "../assets/image/my-photo.jpg"

function Main() {
    const myPhotoStyle = {
        backgroundImage: `url(${myPhoto})`
    }

    return (
        <section className={styles.mainBlock}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <div className={styles.greetingsBlock}>
                    <span>Hi there</span>
                    <h1>I am Nikita Iskorostinskii</h1>
                    <p>A front-end developer</p>
                </div>
                <div className={styles.photo} style={myPhotoStyle}></div>
            </div>
        </section>
    );
}

export default Main;