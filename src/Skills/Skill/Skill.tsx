import React from 'react';
import styles from './Skill.module.scss'

type SkillsPropsType = {
    title: string
    style: {[key: string]: string}
    description: string
}

function Skill(props: SkillsPropsType) {
    return (
        <div className={styles.skill}>
            <div className={styles.iconWrapper} style={props.style}/>
            <h3 className={styles.skillName}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Skill;