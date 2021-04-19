import React from 'react';
import styles from './Skills.module.scss'
import styleContainer from './../common/styles/Container.module.scss'
import Skill from "./Skill/Skill";
import {Title} from "../common/components/Title";
import htmlIcon from "../assets/image/html.svg"
import jsIcon from "../assets/image/js.svg"
import reactIcon from "../assets/image/react.svg"

function Skills() {
    const html = {
        backgroundImage: `url(${htmlIcon})`
    }

    const js = {
        backgroundImage: `url(${jsIcon})`
    }

    const react = {
        backgroundImage: `url(${reactIcon})`
    }

    return (
        <section className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title titleText="My Skills"/>
                <div className={styles.skills}>
                    <Skill
                        title={'HTML & CSS'}
                        style={html}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill
                        title={'JavaScript'}
                        style={js}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Skill
                        title={'React'}
                        style={react}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                </div>
            </div>
        </section>
    );
}

export default Skills;