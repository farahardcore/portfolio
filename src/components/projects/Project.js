import React from 'react';
import styles from "./Project.module.css"

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.image}>
                <a className={styles.viewBtn}>View</a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.title}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>


        </div>
    );
}

export default Project;
