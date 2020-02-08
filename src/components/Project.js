import React from 'react';
import styles from "./Project.module.css"

function Project() {
    return (
        <div className={styles.project}>
            <div className={styles.container}>
                <div className={styles.view}>
                    <img className={styles.image} src="" alt="picture"/>
                    <button className={styles.watchBtn}>Watch</button>
                </div>
                <div className={styles.title}>
                    <span>Title</span>
                </div>
                <div className={styles.description}>
                    <span>Description</span>
                </div>
            </div>

        </div>
    );
}

export default Project;
