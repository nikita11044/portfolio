import React from "react";
import styles from './Title.module.scss'

type TitlePropsType = {
    titleText: string
}

export const Title: React.FC<TitlePropsType> = ({titleText}) => {
    return (
        <div className={styles.title}>
            <h2>{titleText}</h2>
        </div>
    )
}