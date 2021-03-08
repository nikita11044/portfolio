import React from 'react';
import styles from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

function Project(props: ProjectPropsType) {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.imageWrapper}></div>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
        </div>
    );
}

export default Project;