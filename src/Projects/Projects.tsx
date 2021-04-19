import React from 'react';
import styleContainer from './../common/styles/Container.module.scss'
import styles from './Projects.module.scss'
import Project from "./Project/Project";
import {Title} from "../common/components/Title";
import socialNetworkImage from './../assets/image/social-network.jpg'
import todolistImage from './../assets/image/todolist.jpg'

function Projects() {
    const social = {
        backgroundImage: `url(${socialNetworkImage})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }

    return (
        <section className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title titleText="My Projects"/>
                <div className={styles.projects}>
                    <Project
                        style={todolist}
                        title={'ToDoList'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minima nostrum optio possimus quia repellat similique tempore unde vero. Architecto consectetur dolorem ipsum qui quidem. Consequatur ea eum quis similique?'}/>
                    <Project
                        style={social}
                        title={'SocialNetwork'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minima nostrum optio possimus quia repellat similique tempore unde vero. Architecto consectetur dolorem ipsum qui quidem. Consequatur ea eum quis similique?'}/>
                </div>
            </div>
        </section>
    );
}

export default Projects;