import React from 'react';
import styles from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    style: {[key: string]: string}
}

function Project(props: ProjectPropsType) {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.imageWrapper} style={props.style}>
                <button className={styles.button}>
                    <a href="">View</a>
                </button>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    );
}

export default Project;