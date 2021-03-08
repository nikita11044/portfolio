import React from 'react';
import styleContainer from './../common/styles/Container.module.css'
import styles from './Projects.module.css'
import Project from "./Project/Project";

function Projects() {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>My projects</h2>
                <div className={styles.projects}>
                    <Project title={'ToDoList'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minima nostrum optio possimus quia repellat similique tempore unde vero. Architecto consectetur dolorem ipsum qui quidem. Consequatur ea eum quis similique?'}/>
                    <Project title={'ToDoList'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minima nostrum optio possimus quia repellat similique tempore unde vero. Architecto consectetur dolorem ipsum qui quidem. Consequatur ea eum quis similique?'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;