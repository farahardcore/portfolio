import React from 'react';
import styles from "./Main.module.css"

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hello</span>
                    <span>my name is Farid Mokhammad</span>
                    <span>Im Frontend Developer</span>
                </div>
                <div className={styles.photo}>
                    <img src="" alt="photo"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
